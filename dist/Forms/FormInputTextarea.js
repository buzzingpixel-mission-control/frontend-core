"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FormInputText = function (_a) {
    var input = _a.input, register = _a.register;
    var options = {};
    if (input.required) {
        options.required = true;
    }
    if (input.type === 'email') {
        options.pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    }
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
            react_1.default.createElement("textarea", __assign({}, register(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            input.name, options), { id: input.name, placeholder: input.placeholder || '', className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm h-20" })))));
};
exports.default = FormInputText;
