/*
 * Copyright (C) 2021 Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */

#include "script_value.h"
#include <vector>
#include "core/executing_context.h"
#include "native_string_utils.h"
#include "qjs_engine_patch.h"

namespace kraken {

ScriptValue ScriptValue::createErrorObject(JSContext* ctx, const char* errmsg) {
  JS_ThrowInternalError(ctx, "%s", errmsg);
  JSValue errorObject = JS_GetException(ctx);
  ScriptValue result = ScriptValue(ctx, errorObject);
  JS_FreeValue(ctx, errorObject);
  return result;
}

ScriptValue ScriptValue::createJSONObject(JSContext* ctx, const char* jsonString, size_t length) {
  JSValue jsonValue = JS_ParseJSON(ctx, jsonString, length, "");
  ScriptValue result = ScriptValue(ctx, jsonValue);
  JS_FreeValue(ctx, jsonValue);
  return result;
}

ScriptValue ScriptValue::Empty(JSContext* ctx) {
  return ScriptValue(ctx);
}

JSValue ScriptValue::ToQuickJS() const {
  return m_value;
}

ScriptValue ScriptValue::ToJSONStringify(ExceptionState* exception) {
  JSValue stringifyedValue = JS_JSONStringify(m_ctx, m_value, JS_NULL, JS_NULL);
  ScriptValue result = ScriptValue(m_ctx);
  // JS_JSONStringify may return JS_EXCEPTION if object is not valid. Return JS_EXCEPTION and let quickjs to handle it.
  if (JS_IsException(stringifyedValue)) {
    exception->ThrowException(m_ctx, stringifyedValue);
  } else {
    result = ScriptValue(m_ctx, stringifyedValue);
  }

  return result;
}

std::unique_ptr<NativeString> ScriptValue::toNativeString() {
  return jsValueToNativeString(m_ctx, m_value);
}

std::string ScriptValue::toCString() {
  return jsValueToStdString(m_ctx, m_value);
}

bool ScriptValue::isException() {
  return JS_IsException(m_value);
}

}  // namespace kraken
