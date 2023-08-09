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
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformErrorLogs = exports.transformErrorLog = exports.ErrorLogsSchema = exports.ErrorLogSchema = void 0;
var zod_1 = require("zod");
exports.ErrorLogSchema = zod_1.z.object({
    id: zod_1.z.string(),
    hash: zod_1.z.string(),
    message: zod_1.z.string(),
    file: zod_1.z.string(),
    line: zod_1.z.number(),
    trace: zod_1.z.string(),
    lastErrorAt: zod_1.z.string(),
});
exports.ErrorLogsSchema = zod_1.z.array(exports.ErrorLogSchema);
var transformErrorLog = function (errorLog) { return (__assign(__assign({}, errorLog), { href: "/error-logs/".concat(errorLog.id), lastErrorAtDate: new Date(errorLog.lastErrorAt) })); };
exports.transformErrorLog = transformErrorLog;
var transformErrorLogs = function (errorLogs) { return errorLogs.map(function (errorLog) { return (0, exports.transformErrorLog)(errorLog); }); };
exports.transformErrorLogs = transformErrorLogs;
