"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ListItemRenderer = function (_a) {
    var item = _a.item;
    var _b = (0, react_1.useState)(false), editorIsOpen = _b[0], setEditorIsOpen = _b[1];
    var _c = (0, react_1.useState)(item.content), content = _c[0], setContent = _c[1];
    item.content = content;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        (function () {
            if (!editorIsOpen) {
                return null;
            }
            return (react_1.default.createElement(item.renderEditor, { setEditorIsOpen: setEditorIsOpen, item: item, setContent: setContent }));
        })(),
        react_1.default.createElement("div", { className: "py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6" },
            react_1.default.createElement("dt", { className: "text-sm font-bold text-gray-500" }, item.title),
            react_1.default.createElement("dd", { className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0" },
                content,
                (function () {
                    if (!item.renderEditor) {
                        return null;
                    }
                    return (react_1.default.createElement("button", { type: "button", className: "float-right text-cyan-600 hover:text-cyan-800 hover:underline", onClick: function () { return setEditorIsOpen(true); } }, item.editText || 'Edit'));
                })()))));
};
exports.default = ListItemRenderer;
