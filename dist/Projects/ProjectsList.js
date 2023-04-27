"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var solid_1 = require("@heroicons/react/20/solid");
var NoResultsAddItem_1 = __importDefault(require("../NoResultsAddItem"));
var ProjectListItem_1 = __importDefault(require("./ProjectListItem"));
var ProjectsList = function (_a) {
    var projects = _a.projects;
    if (projects.length < 1) {
        return react_1.default.createElement(NoResultsAddItem_1.default, { icon: react_1.default.createElement(solid_1.ClipboardDocumentListIcon, null), headline: "No projects match your filters" });
    }
    return react_1.default.createElement("div", { className: "bg-white rounded-md shadow-sm px-4" },
        react_1.default.createElement("ul", { role: "list", className: "divide-y divide-gray-100" }, projects.map(function (project) { return (react_1.default.createElement(ProjectListItem_1.default, { key: project.id, project: project })); })));
};
exports.default = ProjectsList;
