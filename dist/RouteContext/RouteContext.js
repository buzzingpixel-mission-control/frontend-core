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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteContextProvider = exports.useBreadcrumbs = exports.useSetBreadcrumbs = exports.useHidePageTitle = exports.useSetHidePageTitle = exports.usePageTitle = exports.useSetPageTitle = exports.useRouteLocationContext = exports.useRouteContext = exports.RouteContext = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
exports.RouteContext = (0, react_1.createContext)(null);
var createDefaultRouteContextData = function () { return ({
    pageTitle: '',
    hidePageTitle: false,
    breadcrumbs: [],
}); };
var useRouteContext = function () {
    var context = (0, react_1.useContext)(exports.RouteContext);
    if (!context) {
        throw new Error('useRouteContext must be used within a RouteContextProvider');
    }
    return context;
};
exports.useRouteContext = useRouteContext;
var useRouteLocationContext = function () {
    var location = (0, react_router_dom_1.useLocation)();
    var loc = location.pathname;
    var routeData = (0, exports.useRouteContext)().routeData;
    return routeData[loc] || createDefaultRouteContextData();
};
exports.useRouteLocationContext = useRouteLocationContext;
var useSetPageTitle = function () {
    var pathname = (0, react_router_dom_1.useLocation)().pathname;
    var setPageTitle = (0, exports.useRouteContext)().setPageTitle;
    return function (title) { setPageTitle(pathname, title); };
};
exports.useSetPageTitle = useSetPageTitle;
var usePageTitle = function (pageTitle) {
    var setPageTitle = (0, exports.useSetPageTitle)();
    (0, react_1.useEffect)(function () {
        setPageTitle(pageTitle);
    }, [pageTitle]);
};
exports.usePageTitle = usePageTitle;
var useSetHidePageTitle = function () {
    var pathname = (0, react_router_dom_1.useLocation)().pathname;
    var setHidePageTitle = (0, exports.useRouteContext)().setHidePageTitle;
    return function (hide) { setHidePageTitle(pathname, hide); };
};
exports.useSetHidePageTitle = useSetHidePageTitle;
var useHidePageTitle = function (hide) {
    var setHidePageTitle = (0, exports.useSetHidePageTitle)();
    (0, react_1.useEffect)(function () {
        setHidePageTitle(hide);
    }, [hide]);
};
exports.useHidePageTitle = useHidePageTitle;
var useSetBreadcrumbs = function () {
    var pathname = (0, react_router_dom_1.useLocation)().pathname;
    var setBreadcrumbs = (0, exports.useRouteContext)().setBreadcrumbs;
    return function (breadcrumbs) {
        setBreadcrumbs(pathname, breadcrumbs);
    };
};
exports.useSetBreadcrumbs = useSetBreadcrumbs;
var useBreadcrumbs = function (breadcrumbs) {
    var setBreadcrumbs = (0, exports.useSetBreadcrumbs)();
    (0, react_1.useEffect)(function () {
        setBreadcrumbs(breadcrumbs);
    }, [breadcrumbs]);
};
exports.useBreadcrumbs = useBreadcrumbs;
var RouteContextProvider = function (props) {
    var _a = (0, react_1.useState)({}), routeData = _a[0], setRouteData = _a[1];
    var setPageTitle = function (pathname, title) {
        var newRouteData = routeData;
        newRouteData[pathname] = newRouteData[pathname] || createDefaultRouteContextData();
        if (newRouteData[pathname].pageTitle === title) {
            return;
        }
        newRouteData[pathname].pageTitle = title;
        setRouteData(__assign({}, newRouteData));
    };
    var setHidePageTitle = function (pathname, hide) {
        var newRouteData = routeData;
        newRouteData[pathname] = newRouteData[pathname] || createDefaultRouteContextData();
        if (newRouteData[pathname].hidePageTitle === hide) {
            return;
        }
        newRouteData[pathname].hidePageTitle = hide;
        setRouteData(__assign({}, newRouteData));
    };
    var setBreadcrumbs = function (pathname, breadcrumbs) {
        var newRouteData = routeData;
        newRouteData[pathname] = newRouteData[pathname] || createDefaultRouteContextData();
        var isEqual = true;
        var newCrumbs = newRouteData[pathname].breadcrumbs;
        breadcrumbs.forEach(function (crumb, index) {
            var _a, _b;
            if (crumb.name !== ((_a = newCrumbs[index]) === null || _a === void 0 ? void 0 : _a.name)
                || crumb.href !== ((_b = newCrumbs[index]) === null || _b === void 0 ? void 0 : _b.href)) {
                isEqual = false;
            }
        });
        if (isEqual) {
            return;
        }
        newRouteData[pathname].breadcrumbs = breadcrumbs;
        setRouteData(__assign({}, newRouteData));
    };
    var value = (0, react_1.useMemo)(function () { return ({
        routeData: routeData,
        setPageTitle: setPageTitle,
        setHidePageTitle: setHidePageTitle,
        setBreadcrumbs: setBreadcrumbs,
    }); }, [routeData]);
    return react_1.default.createElement(exports.RouteContext.Provider, { value: value, children: props.children });
};
exports.RouteContextProvider = RouteContextProvider;
