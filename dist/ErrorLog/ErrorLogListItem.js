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
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("@headlessui/react");
var date_1 = __importDefault(require("locutus/php/datetime/date"));
var solid_1 = require("@heroicons/react/20/solid");
var ErrorLogData_1 = require("./ErrorLogData");
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
}
var ErrorLogListItem = function (_a) {
    var item = _a.item, selectedItemsManager = _a.selectedItemsManager;
    var deleteMutation = (0, ErrorLogData_1.useDeleteErrorLogMutation)(item.id);
    var isSelected = false;
    if ((selectedItemsManager === null || selectedItemsManager === void 0 ? void 0 : selectedItemsManager.selectedItems.indexOf(item.id)) > -1) {
        isSelected = true;
    }
    var selectedClasses = '';
    if (isSelected) {
        selectedClasses = ' bg-green-50 shadow-lg';
    }
    return (react_1.default.createElement("li", { className: "px-4".concat(selectedClasses) },
        react_1.default.createElement("div", { className: "sm:flex items-center justify-between gap-x-6 py-5" },
            react_1.default.createElement("div", { className: "min-w-0" },
                react_1.default.createElement("div", { className: "flex items-start gap-x-3" },
                    react_1.default.createElement("p", { className: "text-sm font-semibold leading-6 text-gray-900" }, item.message)),
                react_1.default.createElement("div", { className: "mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 truncate" },
                    react_1.default.createElement("p", null,
                        item.file,
                        ":",
                        item.line),
                    react_1.default.createElement("svg", { viewBox: "0 0 2 2", className: "h-0.5 w-0.5 fill-current" },
                        react_1.default.createElement("circle", { cx: 1, cy: 1, r: 1 })),
                    react_1.default.createElement("p", null,
                        "Last Error:",
                        ' ',
                        react_1.default.createElement("strong", null, item.lastErrorAtDate
                            ? "".concat((0, date_1.default)('Y-m-d g:i A', item.lastErrorAtDate))
                            : 'N/A')))),
            react_1.default.createElement("div", { className: "mt-2 sm:mt-0 flex flex-none items-center gap-x-4" },
                react_1.default.createElement(react_router_dom_1.Link, { to: item.href, className: "block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" }, "View Details"),
                react_1.default.createElement(react_2.Menu, { as: "div", className: "relative flex-none" },
                    react_1.default.createElement(react_2.Menu.Button, { className: "-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900" },
                        react_1.default.createElement("span", { className: "sr-only" }, "Open options"),
                        react_1.default.createElement(solid_1.EllipsisVerticalIcon, { className: "h-5 w-5", "aria-hidden": "true" })),
                    react_1.default.createElement(react_2.Transition, { as: react_1.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" },
                        react_1.default.createElement(react_2.Menu.Items, { className: "absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none" },
                            react_1.default.createElement(react_2.Menu.Item, null, function (_a) {
                                var active = _a.active;
                                return (react_1.default.createElement("span", { className: classNames(active ? 'bg-gray-50' : '', 'cursor-pointer block px-3 py-1 text-sm leading-6 text-gray-900'), onClick: function () {
                                        deleteMutation.mutate(undefined);
                                    } }, "Delete"));
                            })))),
                (function () {
                    if (!selectedItemsManager) {
                        return null;
                    }
                    return (react_1.default.createElement("input", { id: "select_".concat(item.id), name: "ping_select[]", type: "checkbox", className: "h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-600", checked: isSelected, onChange: function (e) {
                            if (e.currentTarget.checked) {
                                selectedItemsManager.addSelectedItem(item.id);
                                return;
                            }
                            selectedItemsManager.removeSelectedItem(item.id);
                        } }));
                })()))));
};
ErrorLogListItem.defaultProps = {
    selectedItemsManager: undefined,
};
exports.default = ErrorLogListItem;
