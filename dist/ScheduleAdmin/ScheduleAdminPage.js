"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var solid_1 = require("@heroicons/react/20/solid");
var date_1 = __importDefault(require("locutus/php/datetime/date"));
var RouteContext_1 = require("../RouteContext/RouteContext");
var ScheduleAdminData_1 = require("./ScheduleAdminData");
var PartialPageLoading_1 = __importDefault(require("../PartialPageLoading"));
var NoResultsAddItem_1 = __importDefault(require("../NoResultsAddItem"));
var ScheduleAdminPage = function () {
    (0, RouteContext_1.usePageTitle)('Schedule Admin');
    var _a = (0, ScheduleAdminData_1.useScheduleAdminData)(), status = _a.status, data = _a.data;
    if (status === 'loading') {
        return react_1.default.createElement(PartialPageLoading_1.default, null);
    }
    if (data.length < 1) {
        return (react_1.default.createElement(NoResultsAddItem_1.default, { icon: react_1.default.createElement(solid_1.StopCircleIcon, null), headline: "There are no scheduled items" }));
    }
    return (react_1.default.createElement("div", { className: "bg-white rounded-md shadow-sm px-4" },
        react_1.default.createElement("ul", { className: "divide-y divide-gray-100" }, data.map(function (item) { return (react_1.default.createElement("li", { key: item.key },
            react_1.default.createElement("div", { className: "sm:flex items-center justify-between gap-x-6 py-5" },
                react_1.default.createElement("div", { className: "min-w-0" },
                    react_1.default.createElement("div", { className: "flex items-start gap-x-3" },
                        item.class,
                        ":",
                        item.method),
                    react_1.default.createElement("div", { className: "mt-1 items-center gap-x-2 text-xs leading-5 text-gray-500 font-light truncate" },
                        react_1.default.createElement("p", null,
                            "Last run start:",
                            ' ',
                            react_1.default.createElement("span", { className: "font-bold" }, item.lastRunStartAtDate ? "".concat((0, date_1.default)('Y-m-d h:i:s', item.lastRunStartAtDate), " (").concat(Intl.DateTimeFormat().resolvedOptions().timeZone, ")") : '')),
                        react_1.default.createElement("p", null,
                            "Last run end:",
                            ' ',
                            react_1.default.createElement("span", { className: "font-bold" }, item.lastRunEndAtDate ? "".concat((0, date_1.default)('Y-m-d h:i:s', item.lastRunEndAtDate.timestamp), " (").concat(Intl.DateTimeFormat().resolvedOptions().timeZone, ")") : ''))))))); }))));
};
exports.default = ScheduleAdminPage;
