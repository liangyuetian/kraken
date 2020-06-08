/*auto generated*/
describe('flex-minimum', () => {
  it('height-flex-items-001', async () => {
    let referenceOverlappedRed;
    let content100X100;
    let testFlexItemOverlappingGreen;
    let constrainedFlex;
    referenceOverlappedRed = createElement('div', {
      xmlns: 'http://www.w3.org/1999/xhtml',
      id: 'reference-overlapped-red',
      style: {
        position: 'absolute',
        width: '100px',
        height: '100px',
      },
    });
    constrainedFlex = createElement(
      'div',
      {
        xmlns: 'http://www.w3.org/1999/xhtml',
        id: 'constrained-flex',
        style: {
          display: 'flex',
          'flex-direction': 'column',
          width: '100px',
          height: '10px',
        },
      },
      [
        (testFlexItemOverlappingGreen = createElement(
          'div',
          {
            id: 'test-flex-item-overlapping-green',
            style: {
              color: 'green',
              'background-color': 'green',
              font: '50px/1 Ahem',
            },
          },
          [
            (content100X100 = createElement('div', {
              id: 'content-100x100',
              style: {
                width: '100px',
                height: '100px',
              },
            })),
          ]
        )),
      ]
    );
    BODY.appendChild(referenceOverlappedRed);
    BODY.appendChild(constrainedFlex);

    await matchScreenshot();
  });
  xit('height-flex-items-002', async () => {
    let referenceOverlappedRed;
    let content100X200;
    let testFlexItemOverlappingGreen;
    let constrainedFlex;
    referenceOverlappedRed = createElement('div', {
      xmlns: 'http://www.w3.org/1999/xhtml',
      id: 'reference-overlapped-red',
      style: {
        position: 'absolute',
        width: '100px',
        height: '100px',
      },
    });
    constrainedFlex = createElement(
      'div',
      {
        xmlns: 'http://www.w3.org/1999/xhtml',
        id: 'constrained-flex',
        style: {
          display: 'flex',
          'flex-direction': 'column',
          width: '100px',
          height: '10px',
        },
      },
      [
        (testFlexItemOverlappingGreen = createElement(
          'div',
          {
            id: 'test-flex-item-overlapping-green',
            style: {
              'background-color': 'green',
              height: '100px',
            },
          },
          [
            (content100X200 = createElement('div', {
              id: 'content-100x200',
              style: {
                width: '100px',
                height: '200px',
              },
            })),
          ]
        )),
      ]
    );
    BODY.appendChild(referenceOverlappedRed);
    BODY.appendChild(constrainedFlex);

    await matchScreenshot();
  });
  xit('height-flex-items-003', async () => {
    let p;
    let referenceOverlappedRed;
    let content100X100;
    let testFlexItemOverlappingGreen;
    let constrainedFlex;
    p = createElement(
      'p',
      {
        xmlns: 'http://www.w3.org/1999/xhtml',
        style: {},
      },
      [
        createText(`Test passes if there is a filled green square and `),
        createElement(
          'strong',
          {
            style: {},
          },
          [createText(`no red`)]
        ),
        createText(`.`),
      ]
    );
    referenceOverlappedRed = createElement('div', {
      xmlns: 'http://www.w3.org/1999/xhtml',
      id: 'reference-overlapped-red',
      style: {
        position: 'absolute',
        'background-color': 'red',
        width: '100px',
        height: '100px',
        'z-index': '-1',
      },
    });
    constrainedFlex = createElement(
      'div',
      {
        xmlns: 'http://www.w3.org/1999/xhtml',
        id: 'constrained-flex',
        style: {
          display: 'flex',
          'flex-direction': 'column',
          width: '100px',
          height: '10px',
        },
      },
      [
        (testFlexItemOverlappingGreen = createElement(
          'div',
          {
            id: 'test-flex-item-overlapping-green',
            style: {
              color: 'green',
              'background-color': 'green',
              height: '200px',
              font: '50px/1 Ahem',
            },
          },
          [
            (content100X100 = createElement('div', {
              id: 'content-100x100',
              style: {
                width: '100px',
                height: '100px',
              },
            })),
          ]
        )),
      ]
    );
    BODY.appendChild(p);
    BODY.appendChild(referenceOverlappedRed);
    BODY.appendChild(constrainedFlex);

    await matchScreenshot();
  });
  xit('height-flex-items-004', async () => {
    let referenceOverlappedRed;
    let constrainedFlex;
    referenceOverlappedRed = createElement('div', {
      xmlns: 'http://www.w3.org/1999/xhtml',
      id: 'reference-overlapped-red',
      style: {
        position: 'absolute',
        'background-color': 'red',
        width: '100px',
        height: '100px',
        'z-index': '-1',
      },
    });
    constrainedFlex = createElement(
      'div',
      {
        xmlns: 'http://www.w3.org/1999/xhtml',
        id: 'constrained-flex',
        style: {
          display: 'flex',
          'flex-direction': 'column',
          width: '100px',
          height: '10px',
        },
      },
      [
        createElement('img', {
          src: 'assets/100x100-green.png',
          style: {},
        }),
      ]
    );
    BODY.appendChild(referenceOverlappedRed);
    BODY.appendChild(constrainedFlex);

    await matchScreenshot();
  });
  xit('height-flex-items-005', async () => {
    let referenceOverlappedRed;
    let testFlexItemOverlappingGreen;
    let constrainedFlex;
    referenceOverlappedRed = createElement('div', {
      xmlns: 'http://www.w3.org/1999/xhtml',
      id: 'reference-overlapped-red',
      style: {
        position: 'absolute',
        'background-color': 'red',
        width: '100px',
        height: '100px',
        'z-index': '-1',
      },
    });
    constrainedFlex = createElement(
      'div',
      {
        xmlns: 'http://www.w3.org/1999/xhtml',
        id: 'constrained-flex',
        style: {
          display: 'flex',
          'flex-direction': 'column',
          width: '100px',
          height: '10px',
        },
      },
      [
        (testFlexItemOverlappingGreen = createElement('img', {
          id: 'test-flex-item-overlapping-green',
          src: 'assets/60x60-green.png',
          style: {
            height: '100px',
          },
        })),
      ]
    );
    BODY.appendChild(referenceOverlappedRed);
    BODY.appendChild(constrainedFlex);

    await matchScreenshot();
  });
  xit('height-flex-items-006', async () => {
    let referenceOverlappedRed;
    let testFlexItemOverlappingGreen;
    let constrainedFlex;
    referenceOverlappedRed = createElement('div', {
      xmlns: 'http://www.w3.org/1999/xhtml',
      id: 'reference-overlapped-red',
      style: {
        position: 'absolute',
        'background-color': 'red',
        width: '100px',
        height: '100px',
        'z-index': '-1',
      },
    });
    constrainedFlex = createElement(
      'div',
      {
        xmlns: 'http://www.w3.org/1999/xhtml',
        id: 'constrained-flex',
        style: {
          display: 'flex',
          'flex-direction': 'column',
          width: '100px',
          height: '10px',
        },
      },
      [
        (testFlexItemOverlappingGreen = createElement('img', {
          id: 'test-flex-item-overlapping-green',
          src: 'assets/100x100-green.png',
          style: {
            height: '100px',
          },
        })),
      ]
    );
    BODY.appendChild(referenceOverlappedRed);
    BODY.appendChild(constrainedFlex);

    await matchScreenshot();
  });
  xit('height-flex-items-007', async () => {
    let p;
    let referenceOverlappedRed;
    let testFlexItemOverlappingGreen;
    let constrainedFlex;
    p = createElement(
      'p',
      {
        xmlns: 'http://www.w3.org/1999/xhtml',
        style: {},
      },
      [
        createText(`Test passes if there is a filled green square and `),
        createElement(
          'strong',
          {
            style: {},
          },
          [createText(`no red`)]
        ),
        createText(`.`),
      ]
    );
    referenceOverlappedRed = createElement('div', {
      xmlns: 'http://www.w3.org/1999/xhtml',
      id: 'reference-overlapped-red',
      style: {
        position: 'absolute',
        'background-color': 'red',
        width: '100px',
        height: '100px',
        'z-index': '-1',
      },
    });
    constrainedFlex = createElement(
      'div',
      {
        xmlns: 'http://www.w3.org/1999/xhtml',
        id: 'constrained-flex',
        style: {
          display: 'flex',
          'flex-direction': 'column',
          width: '100px',
          height: '10px',
        },
      },
      [
        (testFlexItemOverlappingGreen = createElement('img', {
          id: 'test-flex-item-overlapping-green',
          src: 'assets/60x60-green.png',
          style: {
            width: '100px',
          },
        })),
      ]
    );
    BODY.appendChild(p);
    BODY.appendChild(referenceOverlappedRed);
    BODY.appendChild(constrainedFlex);

    await matchScreenshot();
  });
  xit('height-flex-items-008', async () => {
    let p;
    let referenceOverlappedRed;
    let testFlexItemOverlappingGreen;
    let constrainedFlex;
    p = createElement(
      'p',
      {
        xmlns: 'http://www.w3.org/1999/xhtml',
        style: {},
      },
      [
        createText(`Test passes if there is a filled green square and `),
        createElement(
          'strong',
          {
            style: {},
          },
          [createText(`no red`)]
        ),
        createText(`.`),
      ]
    );
    referenceOverlappedRed = createElement('div', {
      xmlns: 'http://www.w3.org/1999/xhtml',
      id: 'reference-overlapped-red',
      style: {
        position: 'absolute',
        'background-color': 'red',
        width: '100px',
        height: '100px',
        'z-index': '-1',
      },
    });
    constrainedFlex = createElement(
      'div',
      {
        xmlns: 'http://www.w3.org/1999/xhtml',
        id: 'constrained-flex',
        style: {
          display: 'flex',
          'flex-direction': 'column',
          width: '100px',
          height: '10px',
        },
      },
      [
        (testFlexItemOverlappingGreen = createElement('img', {
          id: 'test-flex-item-overlapping-green',
          src: 'assets/100x100-green.png',
          style: {
            width: '100px',
          },
        })),
      ]
    );
    BODY.appendChild(p);
    BODY.appendChild(referenceOverlappedRed);
    BODY.appendChild(constrainedFlex);

    await matchScreenshot();
  });
  xit('height-flex-items-009', async () => {
    let p;
    let log;
    let inner;
    let inner_1;
    let flexbox;
    let flexbox_1;
    let flexbox_2;
    let flexbox_3;
    let flexbox_4;
    let flexbox_5;
    let flexbox_6;
    let flexbox_7;
    let container;
    let container2;
    p = createElement(
      'p',
      {
        style: {
          'box-sizing': 'border-box',
        },
      },
      [
        createText(
          `Green rectangle should be entirely within the black rectangle`
        ),
      ]
    );
    log = createElement('div', {
      id: 'log',
      style: {
        'box-sizing': 'border-box',
      },
    });
    container = createElement(
      'div',
      {
        id: 'container',
        class: 'container',
        style: {
          height: '300px',
          outline: '2px solid black',
          'box-sizing': 'border-box',
        },
      },
      [
        (flexbox_3 = createElement(
          'div',
          {
            class: 'flexbox column',
            style: {
              display: 'flex',
              '-webkit-flex-direction': 'column',
              'flex-direction': 'column',
              'box-sizing': 'border-box',
              height: '100%',
            },
          },
          [
            (flexbox_2 = createElement(
              'div',
              {
                class: 'flexbox flex-one',
                style: {
                  display: 'flex',
                  '-webkit-flex': '1',
                  flex: '1',
                  'box-sizing': 'border-box',
                },
              },
              [
                (flexbox_1 = createElement(
                  'div',
                  {
                    class: 'flexbox column',
                    style: {
                      display: 'flex',
                      '-webkit-flex-direction': 'column',
                      'flex-direction': 'column',
                      'box-sizing': 'border-box',
                    },
                  },
                  [
                    (flexbox = createElement(
                      'div',
                      {
                        class: 'flexbox column flex-one',
                        style: {
                          display: 'flex',
                          '-webkit-flex': '1',
                          flex: '1',
                          '-webkit-flex-direction': 'column',
                          'flex-direction': 'column',
                          'box-sizing': 'border-box',
                        },
                      },
                      [
                        (inner = createElement('div', {
                          class: 'inner',
                          'data-expected-height': '80',
                          style: {
                            width: '400px',
                            flex: '1',
                            'background-color': 'green',
                            'box-sizing': 'border-box',
                          },
                        })),
                      ]
                    )),
                  ]
                )),
              ]
            )),
          ]
        )),
      ]
    );
    container2 = createElement(
      'div',
      {
        id: 'container2',
        class: 'container',
        style: {
          height: '300px',
          outline: '2px solid black',
          'box-sizing': 'border-box',
        },
      },
      [
        (flexbox_7 = createElement(
          'div',
          {
            class: 'flexbox column',
            style: {
              display: 'flex',
              '-webkit-flex-direction': 'column',
              'flex-direction': 'column',
              'box-sizing': 'border-box',
              height: '100%',
            },
          },
          [
            (flexbox_6 = createElement(
              'div',
              {
                class: 'flexbox flex-one',
                style: {
                  display: 'flex',
                  '-webkit-flex': '1',
                  flex: '1',
                  'flex-basis': 'auto',
                  'box-sizing': 'border-box',
                },
              },
              [
                (flexbox_5 = createElement(
                  'div',
                  {
                    class: 'flexbox column',
                    style: {
                      display: 'flex',
                      '-webkit-flex-direction': 'column',
                      'flex-direction': 'column',
                      'flex-basis': '0',
                      'box-sizing': 'border-box',
                    },
                  },
                  [
                    (flexbox_4 = createElement(
                      'div',
                      {
                        class: 'flexbox column flex-one',
                        style: {
                          display: 'flex',
                          '-webkit-flex': '1',
                          flex: '1',
                          '-webkit-flex-direction': 'column',
                          'flex-direction': 'column',
                          'flex-basis': 'auto',
                          'box-sizing': 'border-box',
                        },
                      },
                      [
                        (inner_1 = createElement('div', {
                          class: 'inner',
                          'data-expected-height': '80',
                          style: {
                            width: '400px',
                            flex: '1',
                            'background-color': 'green',
                            'flex-basis': 'auto',
                            'box-sizing': 'border-box',
                          },
                        })),
                      ]
                    )),
                  ]
                )),
              ]
            )),
          ]
        )),
      ]
    );
    BODY.appendChild(p);
    BODY.appendChild(log);
    BODY.appendChild(container);
    BODY.appendChild(container2);

    // function change() {
    //   var container = document.getElementById('container');
    //   container.offsetHeight;
    //   container.style.height = '80px';
    //   container = document.getElementById('container2');
    //   container.offsetHeight;
    //   container.style.height = '80px';
    //   checkLayout('.container');
    // }

    await matchScreenshot();
  });
});