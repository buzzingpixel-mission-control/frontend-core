"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var ProjectsPage_1 = __importDefault(require("./Projects/ProjectsPage"));
var NotFoundPage_1 = __importDefault(require("./NotFoundPage"));
var AccountPage_1 = __importDefault(require("./Account/AccountPage"));
var UserAdminPage_1 = __importDefault(require("./UserAdmin/UserAdminPage"));
var RequireAdmin_1 = __importDefault(require("./RequireAdmin"));
var ProjectDetailsPage_1 = __importDefault(require("./Projects/ProjectDetails/ProjectDetailsPage"));
var QueueAdminPage_1 = __importDefault(require("./QueueAdmin/QueueAdminPage"));
var QueueDetailsPage_1 = __importDefault(require("./QueueAdmin/QueueDetails/QueueDetailsPage"));
var ScheduleAdminPage_1 = __importDefault(require("./ScheduleAdmin/ScheduleAdminPage"));
var ErrorLogPage_1 = __importDefault(require("./ErrorLog/ErrorLogPage"));
var FrontEndCoreRoutes = function () { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/projects" }) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: "/projects", element: react_1.default.createElement(ProjectsPage_1.default, null) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: "/projects/archived", element: react_1.default.createElement(ProjectsPage_1.default, { isArchive: true }) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: "/projects/:slug", element: react_1.default.createElement(ProjectDetailsPage_1.default, null) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: "/user-admin", element: react_1.default.createElement(RequireAdmin_1.default, null,
            react_1.default.createElement(UserAdminPage_1.default, null)) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: "/queue-admin", element: react_1.default.createElement(RequireAdmin_1.default, null,
            react_1.default.createElement(QueueAdminPage_1.default, null)) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: "/queue-admin/:queueName", element: react_1.default.createElement(RequireAdmin_1.default, null,
            react_1.default.createElement(QueueDetailsPage_1.default, null)) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: "/schedule-admin", element: react_1.default.createElement(RequireAdmin_1.default, null,
            react_1.default.createElement(ScheduleAdminPage_1.default, null)) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: "/error-logs", element: react_1.default.createElement(RequireAdmin_1.default, null,
            react_1.default.createElement(ErrorLogPage_1.default, null)) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: "/account", element: react_1.default.createElement(AccountPage_1.default, null) }),
    react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(NotFoundPage_1.default, null) }))); };
exports.default = FrontEndCoreRoutes;
