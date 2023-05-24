"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_error_boundary_1 = require("react-error-boundary");
var ts_md5_1 = require("ts-md5");
var ErrorBoundaryPage_1 = __importDefault(require("./ErrorBoundaryPage"));
var MissionControlErrorBoundary = function (_a) {
    var children = _a.children;
    var location = (0, react_router_dom_1.useLocation)();
    return (react_1.default.createElement(react_error_boundary_1.ErrorBoundary, { key: ts_md5_1.Md5.hashStr(JSON.stringify(location)), FallbackComponent: ErrorBoundaryPage_1.default }, children));
};
exports.default = MissionControlErrorBoundary;
