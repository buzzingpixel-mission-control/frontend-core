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
    // console.log(project);
    return react_1.default.createElement(react_1.default.Fragment, null, "ProjectDetailsPage");
};
exports.default = ProjectDetailsPage;
