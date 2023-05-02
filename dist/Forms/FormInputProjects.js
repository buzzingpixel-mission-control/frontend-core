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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_select_1 = __importDefault(require("react-select"));
var react_1 = __importStar(require("react"));
var ProjectsData_1 = require("../Projects/ProjectsData");
var FormInputProjects = function (_a) {
    var input = _a.input;
    var initialValue = input.initialValue || '';
    var _b = (0, react_1.useState)(initialValue), value = _b[0], setValue = _b[1];
    var _c = (0, ProjectsData_1.useProjectsData)(), status = _c.status, data = _c.data;
    var options = [];
    if (status === 'success') {
        data.forEach(function (project) {
            options.push({
                value: project.id,
                label: project.title,
            });
        });
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
        react_1.default.createElement("div", { className: "mt-1" }, (function () {
            if (status === 'loading') {
                return (react_1.default.createElement("div", { className: "inline-block align-middle h-3 w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent text-info motion-reduce:animate-[spin_1.5s_linear_infinite] opacity-100 text-cyan-600", role: "status" },
                    react_1.default.createElement("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...")));
            }
            return (react_1.default.createElement(react_select_1.default, { onChange: function (selected) {
                    setValue(selected.value || null);
                    if (!input.setValue) {
                        return;
                    }
                    input.setValue(
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    input.name, selected.value);
                }, value: options.filter(function (option) { return option.value === value; }), options: options, className: "react-select-control" }));
        })())));
};
exports.default = FormInputProjects;
