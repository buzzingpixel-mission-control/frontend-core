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
var react_2 = require("@headlessui/react");
var outline_1 = require("@heroicons/react/24/outline");
var react_router_dom_1 = require("react-router-dom");
var FullPageLoading_1 = __importDefault(require("./FullPageLoading"));
var useUserData_1 = __importDefault(require("./Auth/useUserData"));
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
}
var Shell = function (_a) {
    var pageName = _a.pageName, menuItems = _a.menuItems, children = _a.children;
    var location = (0, react_router_dom_1.useLocation)();
    var locationArray = location.pathname.split('/');
    var rootPath = "/".concat(locationArray[1]);
    menuItems = menuItems || [];
    var _b = (0, react_1.useState)(false), sidebarOpen = _b[0], setSidebarOpen = _b[1];
    var _c = (0, useUserData_1.default)(), status = _c.status, userData = _c.data;
    if (status === 'loading') {
        return react_1.default.createElement(FullPageLoading_1.default, null);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement(react_2.Transition.Root, { show: sidebarOpen, as: react_1.Fragment },
                react_1.default.createElement(react_2.Dialog, { as: "div", className: "relative z-50 lg:hidden", onClose: setSidebarOpen },
                    react_1.default.createElement(react_2.Transition.Child, { as: react_1.Fragment, enter: "transition-opacity ease-linear duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity ease-linear duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                        react_1.default.createElement("div", { className: "fixed inset-0 bg-gray-900/80" })),
                    react_1.default.createElement("div", { className: "fixed inset-0 flex" },
                        react_1.default.createElement(react_2.Transition.Child, { as: react_1.Fragment, enter: "transition ease-in-out duration-300 transform", enterFrom: "-translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "translate-x-0", leaveTo: "-translate-x-full" },
                            react_1.default.createElement(react_2.Dialog.Panel, { className: "relative mr-16 flex w-full max-w-xs flex-1" },
                                react_1.default.createElement(react_2.Transition.Child, { as: react_1.Fragment, enter: "ease-in-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                                    react_1.default.createElement("div", { className: "absolute left-full top-0 flex w-16 justify-center pt-5" },
                                        react_1.default.createElement("button", { type: "button", className: "-m-2.5 p-2.5", onClick: function () { return setSidebarOpen(false); } },
                                            react_1.default.createElement("span", { className: "sr-only" }, "Close sidebar"),
                                            react_1.default.createElement(outline_1.XMarkIcon, { className: "h-6 w-6 text-white", "aria-hidden": "true" })))),
                                react_1.default.createElement("div", { className: "flex grow flex-col gap-y-0 overflow-y-auto bg-white px-6 pb-4" },
                                    react_1.default.createElement("div", { className: "flex h-12 shrink-0 items-center font-bold text-lg" }, "Mission Control"),
                                    react_1.default.createElement("nav", { className: "flex flex-1 flex-col" },
                                        react_1.default.createElement("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7" },
                                            react_1.default.createElement("li", null,
                                                react_1.default.createElement("ul", { role: "list", className: "-mx-2 space-y-1" }, menuItems.map(function (item) {
                                                    if (item.requiresAdminPrivileges && !userData.isAdmin) {
                                                        return null;
                                                    }
                                                    var isCurrent = rootPath === item.href;
                                                    return (react_1.default.createElement("li", { key: item.name },
                                                        react_1.default.createElement(react_router_dom_1.Link, { to: item.href, onClick: function () {
                                                                setSidebarOpen(false);
                                                            }, className: classNames(isCurrent
                                                                ? 'bg-gray-200 text-cyan-600'
                                                                : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold') },
                                                            (function () {
                                                                if (!item.icon) {
                                                                    return null;
                                                                }
                                                                return react_1.default.createElement(item.icon, { className: classNames(isCurrent ? 'text-cyan-600' : 'text-gray-400 group-hover:text-cyan-600', 'h-6 w-6 shrink-0'), "aria-hidden": "true" });
                                                            })(),
                                                            item.name)));
                                                }))))))))))),
            react_1.default.createElement("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col" },
                react_1.default.createElement("div", { className: "flex grow flex-col gap-y-0 overflow-y-auto border-r border-gray-200 bg-white px-6 pt-2 pb-4" },
                    react_1.default.createElement("div", { className: "flex h-12 shrink-0 items-center font-bold text-lg" }, "Mission Control"),
                    react_1.default.createElement("nav", { className: "flex flex-1 flex-col" },
                        react_1.default.createElement("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7" },
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("ul", { role: "list", className: "-mx-2 space-y-1" }, menuItems.map(function (item) {
                                    if (item.requiresAdminPrivileges && !userData.isAdmin) {
                                        return null;
                                    }
                                    var isCurrent = rootPath === item.href;
                                    return (react_1.default.createElement("li", { key: item.name },
                                        react_1.default.createElement(react_router_dom_1.Link, { to: item.href, className: classNames(isCurrent
                                                ? 'bg-gray-200 text-cyan-600'
                                                : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold') },
                                            (function () {
                                                if (!item.icon) {
                                                    return null;
                                                }
                                                return react_1.default.createElement(item.icon, { className: classNames(isCurrent ? 'text-cyan-600' : 'text-gray-400 group-hover:text-cyan-600', 'h-6 w-6 shrink-0'), "aria-hidden": "true" });
                                            })(),
                                            item.name)));
                                }))),
                            react_1.default.createElement("li", { className: "-mx-6 mt-auto" },
                                react_1.default.createElement(react_router_dom_1.Link, { to: "/account", className: "flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50" },
                                    react_1.default.createElement(outline_1.UserCircleIcon, { className: "h-8 w-8 rounded-full bg-gray-50" }),
                                    react_1.default.createElement("span", { className: "sr-only" }, "Your profile"),
                                    react_1.default.createElement("span", { "aria-hidden": "true" }, userData.nameOrEmail))))))),
            react_1.default.createElement("div", { className: "sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden" },
                react_1.default.createElement("button", { type: "button", className: "-m-2.5 p-2.5 text-gray-700 lg:hidden", onClick: function () { return setSidebarOpen(true); } },
                    react_1.default.createElement("span", { className: "sr-only" }, "Open sidebar"),
                    react_1.default.createElement(outline_1.Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" })),
                react_1.default.createElement("div", { className: "flex-1 text-sm font-semibold leading-6 text-gray-900" }, pageName),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/account" },
                    react_1.default.createElement("span", { className: "sr-only" }, "Your profile"),
                    react_1.default.createElement(outline_1.UserCircleIcon, { className: "h-8 w-8 rounded-full bg-gray-50" }))),
            react_1.default.createElement("main", { className: "pt-4 pb-10 lg:pl-72" },
                react_1.default.createElement("h1", { className: "px-4 pb-6 sm:px-6 lg:px-8 text-2xl font-semibold leading-6 text-gray-900 hidden lg:block" }, pageName),
                react_1.default.createElement("div", { className: "px-4 sm:px-6 lg:px-8 relative" }, children)))));
};
exports.default = Shell;
