/*
 * Copyright (C) 2021 Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */

#ifndef KRAKENBRIDGE_QJS_BLOB_H
#define KRAKENBRIDGE_QJS_BLOB_H

#include <quickjs/quickjs.h>
#include "core/executing_context.h"
#include "wrapper_type_info.h"

namespace kraken {

class ExecutingContext;

class QJSBlob final {
 public:
  static void install(ExecutingContext* context);

  static WrapperTypeInfo* GetWrapperTypeInfo() { return const_cast<WrapperTypeInfo*>(&m_wrapperTypeInfo); }

 private:
  static JSValue ConstructorCallback(JSContext* ctx, JSValue func_obj, JSValue this_val, int argc, JSValue* argv, int flags);
  constexpr static const WrapperTypeInfo m_wrapperTypeInfo = {"Blob", nullptr, ConstructorCallback};

  static void installPrototypeMethods(ExecutingContext* context);
  static void installPrototypeProperties(ExecutingContext* context);
  static void installConstructor(ExecutingContext* context);

  friend class Blob;
};

}  // namespace kraken

#endif  // KRAKENBRIDGE_QJS_BLOB_H
