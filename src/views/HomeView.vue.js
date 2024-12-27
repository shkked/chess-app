"use strict";
/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("text-3xl font-bold text-center text-white mt-10") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("grid grid-cols-8 mt-10 game-field border-2 border-gray-800") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((8)); _i < _a.length; _i++) {
        var _b = _a[_i], row = _b[0], rowIndex = _b[1];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: ((rowIndex)) }, { class: ("w-full h-full flex") }));
        for (var _c = 0, _d = __VLS_getVForSourceType((8)); _c < _d.length; _c++) {
            var _e = _d[_c], col = _e[0], colIndex = _e[1];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: ((colIndex)) }, { class: (([
                    'w-full h-full',
                    (rowIndex + colIndex) % 2 === 0 ? 'bg-black' : 'bg-white'
                ])) }));
        }
    }
    ['text-3xl', 'font-bold', 'text-center', 'text-white', 'mt-10', 'grid', 'grid-cols-8', 'mt-10', 'game-field', 'border-2', 'border-gray-800', 'w-full', 'h-full', 'flex', 'w-full', 'h-full',];
    var __VLS_slots;
    var $slots;
    var __VLS_inheritedAttrs;
    var $attrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
