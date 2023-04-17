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
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Shell_1 = __importDefault(require("./Shell"));
var NotFoundPage_1 = __importDefault(require("./NotFound/NotFoundPage"));
var App = function (_a) {
    var appConfig = _a.appConfig;
    var _b = (0, react_1.useState)(''), pageName = _b[0], setPageName = _b[1];
    (0, react_1.useEffect)(function () {
        var documentTitle = 'Mission Control';
        if (pageName) {
            documentTitle = "".concat(pageName, " | ").concat(documentTitle);
        }
        document.title = documentTitle;
    }, [pageName]);
    return react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Shell_1.default, { menuItems: appConfig.menuItems(), pageName: pageName },
            react_1.default.createElement(react_router_dom_1.Routes, null,
                appConfig.routes(setPageName),
                react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(NotFoundPage_1.default, { setPageName: setPageName }) }))));
};
exports.default = App;
