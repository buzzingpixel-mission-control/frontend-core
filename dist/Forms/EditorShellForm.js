"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var EditorShellForm = function (_a) {
    var inputs = _a.inputs, onSubmit = _a.onSubmit, register = _a.register;
    return react_1.default.createElement("div", { className: "text-left" },
        react_1.default.createElement("form", { onSubmit: onSubmit }, inputs.map(function (input, i) {
            var divClass = i === 0 ? '' : 'mt-4';
            return react_1.default.createElement("div", { className: divClass, key: input.name },
                react_1.default.createElement(input.renderInput, { input: input, register: register }));
        })));
};
exports.default = EditorShellForm;
