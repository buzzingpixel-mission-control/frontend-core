"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var setPageName_1 = __importDefault(require("./PageName/setPageName"));
var AccessDeniedPage = function () {
    (0, setPageName_1.default)('Access Denied');
    return react_1.default.createElement("div", null,
        react_1.default.createElement("h1", { className: "mt-4 text-xl font-bold tracking-tight text-gray-900" }, "You do not have access to that page"),
        react_1.default.createElement("div", { className: "mt-10" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/projects", className: "text-sm font-semibold leading-7 text-cyan-600" },
                react_1.default.createElement("span", { "aria-hidden": "true" }, "\u2190"),
                " Go to projects")));
};
exports.default = AccessDeniedPage;
