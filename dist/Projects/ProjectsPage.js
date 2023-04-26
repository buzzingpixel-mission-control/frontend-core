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
var react_2 = require("@headlessui/react");
var react_router_dom_1 = require("react-router-dom");
var setPageName_1 = __importDefault(require("../PageName/setPageName"));
var ProjectsData_1 = require("./ProjectsData");
var PartialPageLoading_1 = __importDefault(require("../PartialPageLoading"));
var NoResultsAddItem_1 = __importDefault(require("../NoResultsAddItem"));
var createPortal_1 = __importDefault(require("../createPortal"));
var AddProjectOverlay_1 = __importDefault(require("./AddProjectOverlay"));
var ProjectTabs_1 = __importDefault(require("./ProjectTabs"));
var Projects_1 = require("./Projects");
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
    var FilterInput = react_1.default.createElement("div", { className: "mb-4" },
        react_1.default.createElement("input", { type: "text", name: "filter", id: "filter", className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6", placeholder: "Filter results", value: filterText, onChange: function (e) {
                setFilterText(e.target.value);
            } }));
    if (filterText !== '') {
        projects = projects.filter(function (project) { return project.title.toLowerCase().indexOf(filterText.toLowerCase()) > -1
            || project.slug.toLowerCase().indexOf(filterText.toLowerCase()) > -1
            || project.description.toLowerCase().indexOf(filterText.toLowerCase()) > -1; });
    }
    return react_1.default.createElement(react_1.default.Fragment, null,
        portals(),
        Tabs,
        react_1.default.createElement("div", null,
            FilterInput,
            (function () {
                if (projects.length < 1) {
                    return react_1.default.createElement(NoResultsAddItem_1.default, { icon: react_1.default.createElement(solid_1.ClipboardDocumentListIcon, null), headline: "No projects match your filters" });
                }
                return react_1.default.createElement("div", { className: "bg-white rounded-xl px-4" },
                    react_1.default.createElement("ul", { role: "list", className: "divide-y divide-gray-100" }, projects.map(function (project) { return (react_1.default.createElement("li", { key: project.id, className: "flex items-center justify-between gap-x-6 py-5" },
                        react_1.default.createElement("div", { className: "min-w-0" },
                            react_1.default.createElement("div", { className: "flex items-start gap-x-3" },
                                react_1.default.createElement("p", { className: "text-sm font-semibold leading-6 text-gray-900" }, project.title),
                                react_1.default.createElement("p", { className: classNames(statuses[project.status.toString()], 'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset') }, project.status.toString())),
                            react_1.default.createElement("div", { className: "mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500" },
                                react_1.default.createElement("p", { className: "whitespace-nowrap" }, project.slug),
                                react_1.default.createElement("svg", { viewBox: "0 0 2 2", className: "h-0.5 w-0.5 fill-current" },
                                    react_1.default.createElement("circle", { cx: 1, cy: 1, r: 1 })),
                                react_1.default.createElement("p", { className: "truncate" },
                                    "Created ",
                                    project.createdAtDate.toLocaleDateString()))),
                        react_1.default.createElement("div", { className: "flex flex-none items-center gap-x-4" },
                            react_1.default.createElement(react_router_dom_1.Link, { to: project.href, className: "block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" },
                                "View project",
                                react_1.default.createElement("span", { className: "sr-only" },
                                    ", ",
                                    project.title)),
                            react_1.default.createElement(react_2.Menu, { as: "div", className: "relative flex-none" },
                                react_1.default.createElement(react_2.Menu.Button, { className: "-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900" },
                                    react_1.default.createElement("span", { className: "sr-only" }, "Open options"),
                                    react_1.default.createElement(solid_1.EllipsisVerticalIcon, { className: "h-5 w-5", "aria-hidden": "true" })),
                                react_1.default.createElement(react_2.Transition, { as: react_1.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" },
                                    react_1.default.createElement(react_2.Menu.Items, { className: "absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none" },
                                        react_1.default.createElement(react_2.Menu.Item, null, function (_a) {
                                            var active = _a.active;
                                            return (react_1.default.createElement("span", { className: classNames(active ? 'bg-gray-50' : '', 'cursor-pointer block px-3 py-1 text-sm leading-6 text-gray-900') },
                                                "Edit",
                                                react_1.default.createElement("span", { className: "sr-only" },
                                                    ", ",
                                                    project.title)));
                                        }),
                                        react_1.default.createElement(react_2.Menu.Item, null, function (_a) {
                                            var active = _a.active;
                                            return (react_1.default.createElement("span", { className: classNames(active ? 'bg-gray-50' : '', 'cursor-pointer block px-3 py-1 text-sm leading-6 text-gray-900') },
                                                "Archive",
                                                react_1.default.createElement("span", { className: "sr-only" },
                                                    ", ",
                                                    project.title)));
                                        }))))))); })));
            })()));
};
exports.default = ProjectsPage;
