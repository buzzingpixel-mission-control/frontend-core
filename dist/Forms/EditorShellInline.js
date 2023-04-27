"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var EditorShellInline = function (_a) {
    var children = _a.children, isSaving = _a.isSaving, saveHandler = _a.saveHandler, errorMessage = _a.errorMessage, setEditorIsOpen = _a.setEditorIsOpen, submitButtonText = _a.submitButtonText;
    var buttonBgClass = 'bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500';
    var spinnerSavingClass = 'opacity-0';
    if (isSaving) {
        buttonBgClass = 'bg-gray-600 focus:ring-gray-500';
        spinnerSavingClass = 'opacity-100';
    }
    return react_1.default.createElement("div", null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "text-center" },
                (function () {
                    if (!errorMessage) {
                        return null;
                    }
                    return react_1.default.createElement("div", { className: "rounded-md bg-red-50 p-4 mb-2" },
                        react_1.default.createElement("h3", { className: "text-sm font-medium text-red-800" }, errorMessage));
                })(),
                react_1.default.createElement("div", { className: "mt-2" }, children))),
        react_1.default.createElement("div", { className: "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3" },
            react_1.default.createElement("button", { type: "button", className: "inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:col-start-2 sm:text-sm ".concat(buttonBgClass), onClick: saveHandler },
                react_1.default.createElement("div", { className: "inline-block align-middle h-3 w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent text-info motion-reduce:animate-[spin_1.5s_linear_infinite] ".concat(spinnerSavingClass), style: { marginTop: '0.25rem' }, role: "status" },
                    react_1.default.createElement("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...")),
                react_1.default.createElement("span", { className: "ml-1 inline-block align-middle" }, submitButtonText || 'Update'),
                react_1.default.createElement("div", { className: "inline-block align-middle h-3 w-3", style: { marginTop: '0.25rem' }, role: "status" })),
            react_1.default.createElement("button", { type: "button", className: "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm", onClick: function () { return setEditorIsOpen(false); } }, "Cancel")));
};
exports.default = EditorShellInline;
