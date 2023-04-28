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
var classNames = function () {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
};
var FormInputToggle = function (_a) {
    var input = _a.input;
    var _b = (0, react_1.useState)(input.initialValue || false), enabled = _b[0], setEnabled = _b[1];
    (0, react_1.useEffect)(function () {
        if (!input.setValue) {
            return;
        }
        input.setValue(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        input.name, enabled ? '1' : '0');
    }, [enabled]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700" },
            input.title,
            (function () {
                if (!input.instructions) {
                    return null;
                }
                return (react_1.default.createElement("span", { className: "block text-gray-400 text-xs -mt-0.5" }, input.instructions));
            })()),
        react_1.default.createElement("div", { className: "mt-1" },
            react_1.default.createElement(react_2.Switch, { checked: enabled, onChange: setEnabled, className: classNames(enabled ? 'bg-cyan-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2') },
                react_1.default.createElement("span", { className: "sr-only" }, input.title),
                react_1.default.createElement("span", { className: classNames(enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out') },
                    react_1.default.createElement("span", { className: classNames(enabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in', 'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'), "aria-hidden": "true" },
                        react_1.default.createElement("svg", { className: "h-3 w-3 text-gray-400", fill: "none", viewBox: "0 0 12 12" },
                            react_1.default.createElement("path", { d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }))),
                    react_1.default.createElement("span", { className: classNames(enabled ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out', 'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'), "aria-hidden": "true" },
                        react_1.default.createElement("svg", { className: "h-3 w-3 text-cyan-600", fill: "currentColor", viewBox: "0 0 12 12" },
                            react_1.default.createElement("path", { d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" }))))))));
};
exports.default = FormInputToggle;
