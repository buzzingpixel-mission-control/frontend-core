"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var ProjectsPage_1 = __importDefault(require("./Projects/ProjectsPage"));
var FrontEndCoreRoutes = function (setPageName) { return react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(react_router_dom_1.Route, { path: "/projects", element: react_1.default.createElement(ProjectsPage_1.default, { setPageName: setPageName }) })); };
exports.default = FrontEndCoreRoutes;
