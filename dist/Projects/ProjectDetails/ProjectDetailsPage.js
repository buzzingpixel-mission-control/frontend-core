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
var ProjectDetailsData_1 = require("./ProjectDetailsData");
var PartialPageLoading_1 = __importDefault(require("../../PartialPageLoading"));
var Projects_1 = require("../Projects");
var RouteContext_1 = require("../../RouteContext/RouteContext");
var statuses = {
    Active: 'text-green-700 bg-green-50 ring-green-600/20',
    Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
};
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
}
var ProjectDetailsPage = function () {
    var slug = (0, react_router_dom_1.useParams)().slug;
    (0, RouteContext_1.useHidePageTitle)(true);
    var _a = (0, react_1.useState)('Loading Project Details…'), pageNameState = _a[0], setPageNameState = _a[1];
    var _b = (0, react_1.useState)(false), isArchive = _b[0], setIsArchive = _b[1];
    (0, RouteContext_1.usePageTitle)(pageNameState);
    (0, RouteContext_1.useBreadcrumbs)([
        {
            name: 'Projects',
            href: isArchive ? '/projects/archived' : '/projects',
        },
        {
            name: pageNameState,
            href: "/projects/".concat(slug),
        },
    ]);
    var _c = (0, ProjectDetailsData_1.useProjectDetailsData)(slug), status = _c.status, data = _c.data;
    if (status === 'loading') {
        return react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(PartialPageLoading_1.default, null));
    }
    var project = (0, Projects_1.transformProject)(data);
    var pageName = "Project: ".concat(project.title);
    if (pageNameState !== pageName) {
        setPageNameState(pageName);
    }
    if (isArchive !== !project.isActive) {
        setIsArchive(true);
    }
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "border-b border-gray-200 pb-4" },
            react_1.default.createElement("div", { className: "md:flex md:items-center md:justify-between md:space-x-5" },
                react_1.default.createElement("div", { className: "flex items-start space-x-5" },
                    react_1.default.createElement("div", { className: "pt-1.5" },
                        react_1.default.createElement("h1", { className: "text-2xl font-bold text-gray-900" },
                            project.title,
                            react_1.default.createElement("svg", { viewBox: "0 0 2 2", className: "h-6 w-10 fill-current inline px-4" },
                                react_1.default.createElement("circle", { cx: 1, cy: 1, r: 1 })),
                            react_1.default.createElement("code", { className: "font-light" }, project.slug),
                            react_1.default.createElement("code", { className: "font-light" }, project.slug),
                            react_1.default.createElement("svg", { viewBox: "0 0 2 2", className: "h-6 w-10 fill-current inline px-4" },
                                react_1.default.createElement("circle", { cx: 1, cy: 1, r: 1 })),
                            react_1.default.createElement("div", { className: "inline-block pb-1 align-bottom" },
                                react_1.default.createElement("p", { className: classNames(statuses[project.status.toString()], 'rounded-md whitespace-nowrap px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset inline-block') }, project.status.toString()))),
                        (function () {
                            if (!project.description) {
                                return null;
                            }
                            return react_1.default.createElement("p", { className: "text-sm font-medium text-gray-500" }, project.description);
                        })())),
                react_1.default.createElement("div", { className: "mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3" },
                    react_1.default.createElement("button", { type: "button", className: "inline-flex items-center justify-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600" }, "Edit Project")))),
        (0, ProjectDetailsData_1.getProjectDetailsSections)().map(function (section) { return react_1.default.createElement(section.render, { key: section.uniqueKey, project: project }); }));
};
exports.default = ProjectDetailsPage;
