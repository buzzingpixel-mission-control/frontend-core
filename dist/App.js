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
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var query_core_1 = require("@tanstack/query-core");
var react_query_1 = require("@tanstack/react-query");
var react_query_devtools_1 = require("@tanstack/react-query-devtools");
var Shell_1 = __importDefault(require("./Shell"));
var Auth_1 = __importDefault(require("./Auth/Auth"));
var FrontEndCoreRoutes_1 = __importDefault(require("./FrontEndCoreRoutes"));
var FrontEndCoreMenuItems_1 = __importDefault(require("./FrontEndCoreMenuItems"));
var RouteContext_1 = require("./RouteContext/RouteContext");
var FullPageLoading_1 = __importDefault(require("./FullPageLoading"));
var MissionControlErrorBoundary_1 = __importDefault(require("./ErrorBoundary/MissionControlErrorBoundary"));
var queryClient = new query_core_1.QueryClient();
var App = function (_a) {
    var appConfig = _a.appConfig;
    var _b = (0, react_1.useState)(false), bootHasRun = _b[0], setBootHasRun = _b[1];
    (0, react_1.useEffect)(function () {
        if (!appConfig.boot) {
            setBootHasRun(true);
            return;
        }
        appConfig.boot();
        setBootHasRun(true);
    }, []);
    if (!bootHasRun) {
        return react_1.default.createElement(FullPageLoading_1.default, null);
    }
    return (react_1.default.createElement(react_query_1.QueryClientProvider, { client: queryClient },
        react_1.default.createElement(Auth_1.default, null,
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(RouteContext_1.RouteContextProvider, null,
                    react_1.default.createElement(Shell_1.default, { menuItems: __spreadArray(__spreadArray([], (0, FrontEndCoreMenuItems_1.default)(), true), appConfig.menuItems(), true) },
                        react_1.default.createElement(MissionControlErrorBoundary_1.default, null,
                            react_1.default.createElement(react_router_dom_1.Routes, null,
                                appConfig.routes(),
                                (0, FrontEndCoreRoutes_1.default)())))))),
        react_1.default.createElement(react_query_devtools_1.ReactQueryDevtools, null)));
};
exports.default = App;
