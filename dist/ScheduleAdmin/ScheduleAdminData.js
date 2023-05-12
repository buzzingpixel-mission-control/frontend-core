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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScheduleAdminData = void 0;
var useApiQueryWithSignInRedirect_1 = __importDefault(require("../Api/useApiQueryWithSignInRedirect"));
var Schedules_1 = require("./Schedules");
// eslint-disable-next-line import/prefer-default-export
var useScheduleAdminData = function () {
    var uri = '/schedule';
    var result = (0, useApiQueryWithSignInRedirect_1.default)([uri], { uri: uri }, {
        staleTime: Infinity,
        zodValidator: Schedules_1.SchedulesSchema,
        refetchInterval: 30000, // Refetch every 30 seconds
    });
    var returnObject = __assign(__assign({}, result), { data: null });
    if (result.data) {
        // Typescript is drunk
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        returnObject.data = result.data.map(function (item) {
            var lastRunStartAt = item.lastRunStartAt
                ? new Date(item.lastRunStartAt)
                : null;
            var lastRunEndAt = item.lastRunEndAt
                ? new Date(item.lastRunEndAt)
                : null;
            return __assign(__assign({}, item), { lastRunStartAt: lastRunStartAt, lastRunEndAt: lastRunEndAt });
        });
    }
    return returnObject;
};
exports.useScheduleAdminData = useScheduleAdminData;
