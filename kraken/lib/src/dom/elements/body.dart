/*
 * Copyright (C) 2019-present Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */
import 'package:kraken/css.dart';
import 'package:kraken/dom.dart';

const String BODY = 'BODY';

const Map<String, dynamic> _defaultStyle = {
  DISPLAY: BLOCK,
};

class BodyElement extends Element {
  BodyElement(EventTargetContext? context)
      : super(context, defaultStyle: _defaultStyle);

  @override
  void addEvent(String eventType) {
    // Scroll event not working on body.
    if (eventType == EVENT_SCROLL) return;

    // Event of Body should set to documentElement.
    // The Render Object of element which set position may be at the same level as the Render Object of body,
    // resulting in the failure to get events handlers.
    ownerDocument.documentElement?.addEvent(eventType);
  }

  @override
  void removeEvent(String eventType) {
    ownerDocument.documentElement?.removeEvent(eventType);
  }
}
