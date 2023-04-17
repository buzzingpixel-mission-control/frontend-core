"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Shell_1 = __importDefault(require("./Shell"));
var App = function (_a) {
    var appConfig = _a.appConfig;
    return react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Shell_1.default, { menuItems: appConfig.menuItems() },
            react_1.default.createElement(react_router_dom_1.Routes, null, appConfig.routes())));
};
exports.default = App;
