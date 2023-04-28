"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var solid_1 = require("@heroicons/react/20/solid");
var NoResultsAddItem = function (_a) {
    var icon = _a.icon, headline = _a.headline, content = _a.content, actionText = _a.actionText, actionUsesPlusIcon = _a.actionUsesPlusIcon, actionButtonOnClick = _a.actionButtonOnClick;
    return (react_1.default.createElement("div", { className: "text-center rounded-lg border-2 border-dashed border-gray-300 p-6" },
        (function () {
            if (!icon) {
                return null;
            }
            return (react_1.default.createElement("div", { className: "mx-auto h-12 w-12 text-gray-400" }, icon));
        })(),
        (function () {
            if (!headline) {
                return null;
            }
            return (react_1.default.createElement("h3", { className: "mt-2 text-sm font-semibold text-gray-900" }, headline));
        })(),
        (function () {
            if (!content) {
                return null;
            }
            return (react_1.default.createElement("p", { className: "mt-1 text-sm text-gray-500" }, content));
        })(),
        (function () {
            if (!actionText) {
                return null;
            }
            return (react_1.default.createElement("div", { className: "mt-6" },
                react_1.default.createElement("button", { type: "button", className: "inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2", onClick: actionButtonOnClick },
                    (function () {
                        if (!actionUsesPlusIcon) {
                            return null;
                        }
                        return react_1.default.createElement(solid_1.PlusIcon, { className: "-ml-1 mr-2 h-5 w-5", "aria-hidden": "true" });
                    })(),
                    actionText)));
        })()));
};
NoResultsAddItem.defaultProps = {
    icon: undefined,
    headline: undefined,
    content: undefined,
    actionText: undefined,
    actionUsesPlusIcon: undefined,
    actionButtonOnClick: undefined,
};
exports.default = NoResultsAddItem;
