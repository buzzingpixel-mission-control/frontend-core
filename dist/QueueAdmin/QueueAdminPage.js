"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var RouteContext_1 = require("../RouteContext/RouteContext");
var QueueAdminData_1 = require("./QueueAdminData");
var PartialPageLoading_1 = __importDefault(require("../PartialPageLoading"));
var QueueAdminPage = function () {
    (0, RouteContext_1.usePageTitle)('Queue Admin');
    var _a = (0, QueueAdminData_1.useQueueAdminData)(), data = _a.data, status = _a.status;
    if (status === 'loading') {
        return react_1.default.createElement(PartialPageLoading_1.default, null);
    }
    return (react_1.default.createElement("div", { className: "bg-white rounded-md shadow-sm px-4" },
        react_1.default.createElement("ul", { className: "divide-y divide-gray-100" }, data.map(function (queue) { return (react_1.default.createElement("li", { key: queue.queue },
            react_1.default.createElement("div", { className: "sm:flex items-center justify-between gap-x-6 py-5" },
                react_1.default.createElement("div", { className: "min-w-0" },
                    react_1.default.createElement("div", { className: "flex items-start gap-x-3" }, queue.queue),
                    react_1.default.createElement("div", { className: "mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 truncate" },
                        react_1.default.createElement("p", null,
                            "Total items in queue:",
                            ' ',
                            queue.totalItemsInQueue))),
                react_1.default.createElement("div", { className: "mt-2 sm:mt-0 flex flex-none items-center gap-x-4" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/queue-admin/".concat(queue.queue), className: "block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" },
                        "Manage Queue",
                        react_1.default.createElement("span", { className: "sr-only" },
                            ",",
                            queue.queue)))))); }))));
};
exports.default = QueueAdminPage;
