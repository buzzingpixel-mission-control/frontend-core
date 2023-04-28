"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var PartialPageLoading = function () { return (react_1.default.createElement("div", { className: "w-full overflow-hidden opacity-75 flex flex-col items-center justify-center", style: {
        height: 'calc(100vh - 130px)',
    } },
    react_1.default.createElement("div", { className: "loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4" }))); };
exports.default = PartialPageLoading;
