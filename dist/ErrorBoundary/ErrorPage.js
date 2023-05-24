"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var RouteContext_1 = require("../RouteContext/RouteContext");
var ErrorPage = function () {
    (0, RouteContext_1.usePageTitle)('Internal Server Error');
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", { className: "mt-4 text-orange-700 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl" }, "Internal Server Error"),
        react_1.default.createElement("p", { className: "mt-6 text-base leading-7 text-gray-600" }, "Something seems to be wrong on our end, but we\u2019re not sure what."),
        react_1.default.createElement("div", { className: "mt-10" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/projects", className: "text-sm font-semibold leading-7 text-cyan-600" },
                react_1.default.createElement("span", { "aria-hidden": "true" }, "\u2190"),
                ' ',
                "Trying going to projects"))));
};
exports.default = ErrorPage;
