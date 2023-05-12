"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var QueueDetailsData_1 = require("./QueueDetailsData");
var PartialPageLoading_1 = __importDefault(require("../../PartialPageLoading"));
var RouteContext_1 = require("../../RouteContext/RouteContext");
var QueueDetailsPage = function () {
    var queueName = (0, react_router_dom_1.useParams)().queueName;
    var pageTitle = "Queue: ".concat(queueName);
    (0, RouteContext_1.useHidePageTitle)(true);
    (0, RouteContext_1.usePageTitle)(pageTitle);
    (0, RouteContext_1.useBreadcrumbs)([
        {
            name: 'Queue Admin',
            href: '/queue-admin',
        },
        {
            name: pageTitle,
            href: "/queue-admin/".concat(queueName),
        },
    ]);
    var _a = (0, QueueDetailsData_1.useQueueDetailsData)(queueName), data = _a.data, status = _a.status;
    var cancelAll = (0, QueueDetailsData_1.useCancelAllMutation)(queueName);
    var cancelItem = (0, QueueDetailsData_1.useCancelItemMutation)(queueName);
    if (status === 'loading') {
        return react_1.default.createElement(PartialPageLoading_1.default, null);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "border-b border-gray-200 pb-4" },
            react_1.default.createElement("div", { className: "md:flex md:items-center md:justify-between md:space-x-5" },
                react_1.default.createElement("div", { className: "flex items-start space-x-5" },
                    react_1.default.createElement("div", { className: "pt-1.5" },
                        react_1.default.createElement("h1", { className: "text-2xl font-normal text-gray-900" },
                            "Queue:",
                            ' ',
                            react_1.default.createElement("span", { className: "font-bold" }, queueName)),
                        react_1.default.createElement("p", { className: "text-sm font-light text-gray-500" },
                            "Total items in queue:",
                            ' ',
                            react_1.default.createElement("span", { className: "font-medium" }, data.totalItemsInQueue)))),
                react_1.default.createElement("div", { className: "mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3" },
                    react_1.default.createElement("button", { type: "button", className: "inline-flex items-center justify-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600", onClick: function () {
                            cancelAll.mutate(undefined);
                        } }, "Cancel All Items")))),
        react_1.default.createElement("div", { className: "bg-white rounded-md shadow-sm px-4 mt-4" },
            react_1.default.createElement("ul", { className: "divide-y divide-gray-100" }, data.items.map(function (item, i) { return (
            // eslint-disable-next-line react/no-array-index-key
            react_1.default.createElement("li", { key: "".concat(item.handle, "_").concat(i) },
                react_1.default.createElement("div", { className: "sm:flex items-center justify-between gap-x-6 py-5" },
                    react_1.default.createElement("div", { className: "min-w-0" },
                        react_1.default.createElement("div", { className: "flex items-start gap-x-3" },
                            react_1.default.createElement("p", { className: "text-sm font-semibold leading-6 text-gray-900" }, item.name)),
                        react_1.default.createElement("div", { className: "mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 truncate" },
                            react_1.default.createElement("p", null, item.handle)),
                        react_1.default.createElement("div", { className: "mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 truncate font-bold" }, "Jobs:"),
                        react_1.default.createElement("div", { className: "mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 truncate" }, item.jobs.map(function (job, jobI) { return (
                        // eslint-disable-next-line react/no-array-index-key
                        react_1.default.createElement("code", { key: "".concat(job.class, "_").concat(job.method, "_").concat(jobI) },
                            job.class,
                            ":",
                            job.method)); }))),
                    react_1.default.createElement("div", { className: "mt-2 sm:mt-0 flex flex-none items-center gap-x-4" },
                        react_1.default.createElement("div", { className: "mt-2 sm:mt-0 flex flex-none items-center gap-x-4" },
                            react_1.default.createElement("button", { type: "button", className: "block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50", onClick: function () {
                                    cancelItem.mutate(item.key);
                                } }, "Cancel Item")))))); })))));
};
exports.default = QueueDetailsPage;
