"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var solid_1 = require("@heroicons/react/20/solid");
var react_router_dom_1 = require("react-router-dom");
var Breadcrumbs = function (_a) {
    var breadcrumbs = _a.breadcrumbs;
    return (react_1.default.createElement("nav", { className: "flex border-b border-gray-200 bg-white", "aria-label": "Breadcrumb" },
        react_1.default.createElement("ol", { role: "list", className: "mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8" },
            react_1.default.createElement("li", { className: "flex" },
                react_1.default.createElement("div", { className: "flex items-center" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "text-gray-400 hover:text-gray-500" },
                        react_1.default.createElement(solid_1.HomeIcon, { className: "h-5 w-5 flex-shrink-0", "aria-hidden": "true" }),
                        react_1.default.createElement("span", { className: "sr-only" }, "Home")))),
            breadcrumbs.map(function (page) { return (react_1.default.createElement("li", { key: page.name, className: "flex" },
                react_1.default.createElement("div", { className: "flex items-center" },
                    react_1.default.createElement("svg", { className: "h-full w-6 flex-shrink-0 text-gray-200", viewBox: "0 0 24 44", preserveAspectRatio: "none", fill: "currentColor", "aria-hidden": "true" },
                        react_1.default.createElement("path", { d: "M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" })),
                    react_1.default.createElement(react_router_dom_1.Link, { to: page.href, className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" }, page.name)))); }))));
};
exports.default = Breadcrumbs;
