"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var query_core_1 = require("@tanstack/query-core");
var react_query_1 = require("@tanstack/react-query");
var react_query_devtools_1 = require("@tanstack/react-query-devtools");
var Shell_1 = __importDefault(require("./Shell"));
var Auth_1 = __importDefault(require("./Auth/Auth"));
var RuntimeContext_1 = __importDefault(require("./RuntimeContext"));
var FrontEndCoreRoutes_1 = __importDefault(require("./FrontEndCoreRoutes"));
var FrontEndCoreMenuItems_1 = __importDefault(require("./FrontEndCoreMenuItems"));
var RouteContext_1 = require("./RouteContext/RouteContext");
var queryClient = new query_core_1.QueryClient();
var App = function (_a) {
    var appConfig = _a.appConfig;
    var todo = appConfig.appContainer.dataset.todo;
    return react_1.default.createElement(RuntimeContext_1.default.Provider, { value: {
            todo: todo,
        } },
        react_1.default.createElement(react_query_1.QueryClientProvider, { client: queryClient },
            react_1.default.createElement(Auth_1.default, null,
                react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                    react_1.default.createElement(RouteContext_1.RouteContextProvider, null,
                        react_1.default.createElement(Shell_1.default, { menuItems: __spreadArray(__spreadArray([], (0, FrontEndCoreMenuItems_1.default)(), true), appConfig.menuItems(), true) },
                            react_1.default.createElement(react_router_dom_1.Routes, null,
                                appConfig.routes(),
                                (0, FrontEndCoreRoutes_1.default)()))))),
            react_1.default.createElement(react_query_devtools_1.ReactQueryDevtools, null)));
};
exports.default = App;
