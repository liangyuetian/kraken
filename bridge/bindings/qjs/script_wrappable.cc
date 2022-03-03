/*
 * Copyright (C) 2019 Alibaba Inc. All rights reserved.
 * Author: Kraken Team.
 */

#include "script_wrappable.h"
#include "core/executing_context.h"

namespace kraken {

ScriptWrappable::ScriptWrappable(JSContext* ctx) : ctx_(ctx), runtime_(JS_GetRuntime(ctx)) {}

JSValue ScriptWrappable::ToQuickJS() {
  if (wrapped_) {
    return jsObject_;
  }

  // Initialize the corresponding quickjs object.
  InitializeQuickJSObject();

  return jsObject_;
}

void ScriptWrappable::InitializeQuickJSObject() {
  auto* wrapperTypeInfo = const_cast<WrapperTypeInfo*>(GetWrapperTypeInfo());
  JSRuntime* runtime = runtime_;

  /// When classId is 0, it means this class are not initialized. We should Create a JSClassDef to describe the behavior of this class and associate with classID.
  /// ClassId should be a static ToQuickJS to make sure JSClassDef when this class are created at the first class.
  if (wrapperTypeInfo->classId == 0 || !JS_HasClassId(runtime, wrapperTypeInfo->classId)) {
    /// Allocate a new unique classID from QuickJS.
    JS_NewClassID(&wrapperTypeInfo->classId);
    /// Basic template to describe the behavior about this class.
    JSClassDef def{};

    def.class_name = GetHumanReadableName();

    /// This callback will be called when QuickJS GC is running at marking stage.
    /// Users of this class should override `void Trace(JSRuntime* rt, JSValueConst val, JS_MarkFunc* mark_func)` to tell GC
    /// which member of their class should be collected by GC.
    def.gc_mark = [](JSRuntime* rt, JSValueConst val, JS_MarkFunc* mark_func) {
      auto* object = static_cast<ScriptWrappable*>(JS_GetOpaque(val, JSValueGetClassId(val)));
      GCVisitor visitor{rt, mark_func};
      object->Trace(&visitor);
    };

    /// Define custom behavior when call GetProperty, SetProperty on object.
    if (wrapperTypeInfo->exoticMethods != nullptr) {
      def.exotic = wrapperTypeInfo->exoticMethods;
    }

    /// This callback will be called when QuickJS GC will release the `jsObject` object memory of this class.
    /// The deconstruct method of this class will be called and all memory about this class will be freed when finalize completed.
    def.finalizer = [](JSRuntime* rt, JSValue val) {
      auto* object = static_cast<ScriptWrappable*>(JS_GetOpaque(val, JSValueGetClassId(val)));
      object->Dispose();
      free(object);
    };

    JS_NewClass(runtime, wrapperTypeInfo->classId, &def);
  }

  /// The JavaScript object underline this class. This `jsObject` is the JavaScript object which can be directly access within JavaScript code.
  /// When the reference count of `jsObject` decrease to 0, QuickJS will trigger `finalizer` callback and free `jsObject` memory.
  /// When QuickJS GC found `jsObject` at marking stage, `gc_mark` callback will be triggered.
  jsObject_ = JS_NewObjectClass(ctx_, wrapperTypeInfo->classId);
  JS_SetOpaque(jsObject_, this);

  // Let instance inherit EventTarget prototype methods.
  JSValue prototype = context()->contextData()->prototypeForType(wrapperTypeInfo);
  JS_SetPrototype(ctx_, jsObject_, prototype);

  wrapped_ = true;
}

}  // namespace kraken
