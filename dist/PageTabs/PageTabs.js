"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
}
var PageTabs = function (_a) {
    var tabs = _a.tabs, rightHandButtons = _a.rightHandButtons;
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (react_1.default.createElement("div", { className: "mb-4" },
        react_1.default.createElement("div", { className: "sm:hidden" },
            react_1.default.createElement("label", { htmlFor: "tabs", className: "sr-only" }, "Select a tab"),
            react_1.default.createElement("select", { id: "tabs", name: "tabs", className: "block w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500", defaultValue: tabs.find(function (tab) { return tab.current; }).name, onChange: function (event) {
                    navigate(event.target.value);
                } }, tabs.map(function (tab) { return (react_1.default.createElement("option", { key: tab.name, value: tab.href }, tab.name)); })),
            (function () {
                if (!rightHandButtons) {
                    return null;
                }
                return (react_1.default.createElement("div", { className: "text-right mt-2" }, rightHandButtons.map(function (button) { return (react_1.default.createElement("button", { key: button.key, type: "button", className: "ml-2 my-1 inline-flex items-center block rounded-md bg-cyan-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600", onClick: button.onClick }, button.text)); })));
            })()),
        react_1.default.createElement("div", { className: "hidden sm:block" },
            react_1.default.createElement("div", { className: "border-b border-gray-200" },
                react_1.default.createElement("nav", { className: "-mb-px flex space-x-8", "aria-label": "Tabs" },
                    tabs.map(function (tab) { return (react_1.default.createElement(react_router_dom_1.Link, { key: tab.href, to: tab.href, className: classNames(tab.current
                            ? 'border-cyan-500 text-cyan-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium'), "aria-current": tab.current ? 'page' : undefined },
                        (function () {
                            if (!tab.icon) {
                                return null;
                            }
                            return (react_1.default.createElement(tab.icon, { className: classNames(tab.current ? 'text-cyan-500' : 'text-gray-400 group-hover:text-gray-500', '-ml-0.5 mr-2 h-5 w-5'), "aria-hidden": "true" }));
                        })(),
                        react_1.default.createElement("span", null, tab.name))); }),
                    (function () {
                        if (!rightHandButtons) {
                            return null;
                        }
                        return (react_1.default.createElement("div", { className: "my-auto ml-auto text-right", style: {
                                marginLeft: 'auto',
                            } }, rightHandButtons.map(function (button) { return (react_1.default.createElement("button", { key: button.key, type: "button", className: "ml-2 my-1 inline-flex items-center block rounded-md bg-cyan-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600", onClick: button.onClick }, button.text)); })));
                    })())))));
};
PageTabs.defaultProps = {
    rightHandButtons: undefined,
};
exports.default = PageTabs;
