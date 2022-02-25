/*
 * Copyright (C) 2021-present Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */
import 'package:flutter/foundation.dart';

typedef BindingObjectOperation = void Function(BindingObject bindingObject);

class BindingContext {
  final int contextId;
  final pointer;
  const BindingContext(this.contextId, this.pointer);
}

abstract class BindingObject {
  static BindingObjectOperation? bind;
  static BindingObjectOperation? unbind;

  final BindingContext? _context;

  int? get contextId => _context?.contextId;
  get pointer => _context?.pointer;

  BindingObject([BindingContext? context]) : _context = context {
    _bind();
  }

  // Bind dart side object method to receive invoking from native side.
  void _bind() {
    bind??(this);
  }

  void _unbind() {
    unbind??(this);
  }

  // Get a property, eg:
  //   console.log(el.foo);
  dynamic getProperty(String key) {}

  // Set a property, eg:
  //   el.foo = 'bar';
  void setProperty(String key, value) {}

  // Call a method, eg:
  //   el.getContext('2x');
  dynamic invokeMethod(String method, List args) {}

  @mustCallSuper
  void dispose() {
    _unbind();
  }
}