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
var date_1 = __importDefault(require("locutus/php/datetime/date"));
var RouteContext_1 = require("../../RouteContext/RouteContext");
var ErrorLogDetailsData_1 = require("./ErrorLogDetailsData");
var PartialPageLoading_1 = __importDefault(require("../../PartialPageLoading"));
var ErrorLogDetailsPage = function () {
    var id = (0, react_router_dom_1.useParams)().id;
    (0, RouteContext_1.useHidePageTitle)(true);
    var _a = (0, react_1.useState)('Loading Error Log Item Details…'), pageNameState = _a[0], setPageNameState = _a[1];
    (0, RouteContext_1.usePageTitle)(pageNameState);
    (0, RouteContext_1.useBreadcrumbs)([
        {
            name: 'Error Logs',
            href: '/error-logs',
        },
        {
            name: pageNameState,
            href: "/error-logs/".concat(id),
        },
    ]);
    var _b = (0, ErrorLogDetailsData_1.useErrorLogDetailsData)(id), status = _b.status, data = _b.data;
    if (status === 'loading') {
        return react_1.default.createElement(PartialPageLoading_1.default, null);
    }
    var pageName = "Error Log: ".concat(data.id);
    if (pageNameState !== pageName) {
        setPageNameState(pageName);
    }
    return (react_1.default.createElement("div", { className: "max-w-6xl" },
        react_1.default.createElement("div", { className: "overflow-hidden bg-white shadow sm:rounded-lg" },
            react_1.default.createElement("div", { className: "border-t border-gray-100" },
                react_1.default.createElement("dl", { className: "divide-y divide-gray-100" },
                    react_1.default.createElement("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" },
                        react_1.default.createElement("dt", { className: "text-sm font-medium text-gray-900" }, "ID"),
                        react_1.default.createElement("dd", { className: "mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, data.id)),
                    react_1.default.createElement("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" },
                        react_1.default.createElement("dt", { className: "text-sm font-medium text-gray-900" }, "Last Error At"),
                        react_1.default.createElement("dd", { className: "mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, data.lastErrorAtDate
                            ? "".concat((0, date_1.default)('Y-m-d g:i A', data.lastErrorAtDate))
                            : 'N/A')),
                    react_1.default.createElement("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" },
                        react_1.default.createElement("dt", { className: "text-sm font-medium text-gray-900" }, "Message"),
                        react_1.default.createElement("dd", { className: "mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, data.message)),
                    react_1.default.createElement("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" },
                        react_1.default.createElement("dt", { className: "text-sm font-medium text-gray-900" }, "File"),
                        react_1.default.createElement("dd", { className: "mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, data.file)),
                    react_1.default.createElement("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" },
                        react_1.default.createElement("dt", { className: "text-sm font-medium text-gray-900" }, "Line"),
                        react_1.default.createElement("dd", { className: "mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, data.line))))),
        react_1.default.createElement("div", { className: "mt-10" },
            react_1.default.createElement("h2", { className: "text-xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight mb-2" }, "Trace"),
            react_1.default.createElement("div", { className: "bg-slate-700 p-10 text-slate-100 sm:rounded-lg overflow-auto" },
                react_1.default.createElement("pre", null,
                    react_1.default.createElement("code", null, data.trace))))));
};
exports.default = ErrorLogDetailsPage;
