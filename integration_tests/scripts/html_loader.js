const filepath = require('path');
var HTMLParser = require('node-html-parser');

const SCRIPT = 'script';

let filename = '';
const scripts = [];

const traverseParseHTML = (ele) => {
  ele.childNodes && ele.childNodes.forEach(e => {
    if (e.rawTagName === SCRIPT) {
      e.childNodes.forEach(item => {
        // TextNode of script element.
        if (item.nodeType === 3) {
          scripts.push(item._rawText);
        }
        // Delete content of script element for avoid to  script repetition.
        item._rawText = '';
      })
    }
    traverseParseHTML(e);
  });
}

const loader = function(source) {
  const opts = this.query || {};
  const snapshotFilepath = filepath.relative(
    opts.workspacePath,
    filepath.join(
      opts.snapshotPath,
      filepath.relative(opts.testPath, filename),
    )
  );

  let root = HTMLParser.parse(source);
  traverseParseHTML(root);

  return `
    describe(${snapshotFilepath}, async () => {
      window.html_snapshot = async (...argv) => {
        if (argv.length === 0) {
          await snapshot(null, '${snapshotFilepath}');
        } else if (argv.length === 1) {
          await snapshot(argv[0], '${snapshotFilepath}');
        }
      };
      __kraken_parse_html__('${root.toString().replace(/\n/g, '')}');
      ${scripts.map(script => script)}
    });
  `;
}

loader.pitch = (f) => {
  filename = f;
}

module.exports = loader;
