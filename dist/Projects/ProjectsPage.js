"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var setPageName_1 = __importDefault(require("../PageName/setPageName"));
var ProjectsPage = function () {
    (0, setPageName_1.default)('Projects');
    return react_1.default.createElement(react_1.default.Fragment, null, "Projects Page Content");
};
exports.default = ProjectsPage;
