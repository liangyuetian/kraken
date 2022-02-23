/*
 * Copyright (C) 2019-present Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */
import 'package:kraken/css.dart';
import 'package:kraken/dom.dart';

const String TEXTAREA = 'TEXTAREA';

const Map<String, dynamic> _defaultStyle = {
  DISPLAY: INLINE_BLOCK,
  BORDER: '1px solid #767676',
};

// @TODO Implement textarea attributes and multiline editing for textarea.
class TextareaElement extends TextFormControlElement {
  TextareaElement(EventTargetContext? context)
    : super(context, defaultStyle: _defaultStyle, isIntrinsicBox: true);
}
