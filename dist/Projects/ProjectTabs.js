"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var solid_1 = require("@heroicons/react/20/solid");
var PageTabs_1 = __importDefault(require("../PageTabs/PageTabs"));
var tabs = [
    {
        name: 'Active Projects',
        href: '/projects',
        icon: solid_1.FolderIcon,
    },
    {
        name: 'Archived Projects',
        href: '/projects/archived',
        icon: solid_1.ArchiveBoxIcon,
    },
];
var ProjectTabs = function (_a) {
    var activeHref = _a.activeHref;
    activeHref = activeHref || '/projects';
    return react_1.default.createElement(PageTabs_1.default, { tabs: tabs.map(function (tab) { return (__assign(__assign({}, tab), { current: tab.href === activeHref })); }) });
};
exports.default = ProjectTabs;
