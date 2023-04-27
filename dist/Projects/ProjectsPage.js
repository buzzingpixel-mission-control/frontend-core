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
var solid_1 = require("@heroicons/react/20/solid");
var setPageName_1 = __importDefault(require("../PageName/setPageName"));
var ProjectsData_1 = require("./ProjectsData");
var PartialPageLoading_1 = __importDefault(require("../PartialPageLoading"));
var NoResultsAddItem_1 = __importDefault(require("../NoResultsAddItem"));
var createPortal_1 = __importDefault(require("../createPortal"));
var AddProjectOverlay_1 = __importDefault(require("./AddProjectOverlay"));
var ProjectTabs_1 = __importDefault(require("./ProjectTabs"));
var Projects_1 = require("./Projects");
var ProjectsList_1 = __importDefault(require("./ProjectsList"));
var ProjectsPage = function () {
    (0, setPageName_1.default)('Projects');
    var _a = (0, react_1.useState)(''), filterText = _a[0], setFilterText = _a[1];
    var _b = (0, react_1.useState)(false), addProjectIsOpen = _b[0], setAddProjectIsOpen = _b[1];
    var _c = (0, ProjectsData_1.useProjectsData)(), status = _c.status, data = _c.data;
    var Tabs = react_1.default.createElement(ProjectTabs_1.default, { addProjectOnClick: function () { setAddProjectIsOpen(true); } });
    if (status === 'loading') {
        return react_1.default.createElement(react_1.default.Fragment, null,
            Tabs,
            react_1.default.createElement(PartialPageLoading_1.default, null));
    }
    var portals = function () {
        if (addProjectIsOpen) {
            return (0, createPortal_1.default)(react_1.default.createElement(AddProjectOverlay_1.default, { setIsOpen: setAddProjectIsOpen }));
        }
        return null;
    };
    var projects = (0, Projects_1.transformProjects)(data);
    if (projects.length < 1) {
        return react_1.default.createElement(react_1.default.Fragment, null,
            portals(),
            Tabs,
            react_1.default.createElement(NoResultsAddItem_1.default, { icon: react_1.default.createElement(solid_1.ClipboardDocumentListIcon, null), headline: "No projects", content: "Would you like to create a project?", actionText: "Add New Project", actionUsesPlusIcon: true, actionButtonOnClick: function () { setAddProjectIsOpen(true); } }));
    }
    if (filterText !== '') {
        projects = projects.filter(function (project) { return project.title.toLowerCase().indexOf(filterText.toLowerCase()) > -1
            || project.slug.toLowerCase().indexOf(filterText.toLowerCase()) > -1
            || project.description.toLowerCase().indexOf(filterText.toLowerCase()) > -1; });
    }
    return react_1.default.createElement(react_1.default.Fragment, null,
        portals(),
        Tabs,
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "mb-4" },
                react_1.default.createElement("input", { type: "text", name: "filter", id: "filter", className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6", placeholder: "Filter results", value: filterText, onChange: function (e) {
                        setFilterText(e.target.value);
                    } })),
            react_1.default.createElement(ProjectsList_1.default, { projects: projects })));
};
exports.default = ProjectsPage;
