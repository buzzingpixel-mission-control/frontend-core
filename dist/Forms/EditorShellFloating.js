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
var react_2 = require("@headlessui/react");
var EditorShellFloating = function (_a) {
    var title = _a.title, children = _a.children, isSaving = _a.isSaving, saveHandler = _a.saveHandler, errorMessage = _a.errorMessage, setEditorIsOpen = _a.setEditorIsOpen, submitButtonText = _a.submitButtonText;
    (0, react_1.useEffect)(function () {
        var handler = function (e) {
            switch (e.key) {
                case 'Escape':
                    e.preventDefault();
                    setEditorIsOpen(false);
                    break;
                default:
            }
        };
        window.addEventListener('keydown', handler);
        return function () { return window.removeEventListener('keydown', handler); };
    });
    var buttonBgClass = 'bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500';
    var spinnerSavingClass = 'opacity-0';
    if (isSaving) {
        buttonBgClass = 'bg-gray-600 focus:ring-gray-500';
        spinnerSavingClass = 'opacity-100';
    }
    return react_1.default.createElement("div", { className: "relative z-50" },
        react_1.default.createElement(react_2.Dialog, { as: "div", className: "relative z-50", open: true, onClose: function () { return null; } },
            react_1.default.createElement("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }),
            react_1.default.createElement("div", { className: "fixed inset-0 z-10 overflow-y-auto" },
                react_1.default.createElement("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" },
                    react_1.default.createElement(react_2.Dialog.Panel, { className: "relative transform rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg sm:p-6" },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("div", { className: "text-center" },
                                (function () {
                                    if (!errorMessage) {
                                        return null;
                                    }
                                    return react_1.default.createElement("div", { className: "rounded-md bg-red-50 p-4 mb-2" },
                                        react_1.default.createElement("h3", { className: "text-sm font-medium text-red-800" }, errorMessage));
                                })(),
                                react_1.default.createElement(react_2.Dialog.Title, { as: "h3", className: "text-base font-semibold leading-6 text-gray-900" }, title),
                                react_1.default.createElement("div", { className: "mt-2" }, children))),
                        react_1.default.createElement("div", { className: "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3" },
                            react_1.default.createElement("button", { type: "button", className: "inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:col-start-2 sm:text-sm ".concat(buttonBgClass), onClick: saveHandler },
                                react_1.default.createElement("div", { className: "inline-block align-middle h-3 w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent text-info motion-reduce:animate-[spin_1.5s_linear_infinite] ".concat(spinnerSavingClass), style: { marginTop: '0.25rem' }, role: "status" },
                                    react_1.default.createElement("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...")),
                                react_1.default.createElement("span", { className: "ml-1 inline-block align-middle" }, submitButtonText || 'Update'),
                                react_1.default.createElement("div", { className: "inline-block align-middle h-3 w-3", style: { marginTop: '0.25rem' }, role: "status" })),
                            react_1.default.createElement("button", { type: "button", className: "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm", onClick: function () { return setEditorIsOpen(false); } }, "Cancel")))))));
};
exports.default = EditorShellFloating;
