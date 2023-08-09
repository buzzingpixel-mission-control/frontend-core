"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useErrorLogData = void 0;
var useApiQueryWithSignInRedirect_1 = __importDefault(require("../Api/useApiQueryWithSignInRedirect"));
var ErrorLogs_1 = require("./ErrorLogs");
// eslint-disable-next-line import/prefer-default-export
var useErrorLogData = function () {
    var uri = '/error-logs/list';
    var response = (0, useApiQueryWithSignInRedirect_1.default)([uri], { uri: uri }, {
        zodValidator: ErrorLogs_1.ErrorLogsSchema,
        staleTime: Infinity,
    });
    return {
        status: response.status,
        data: (0, ErrorLogs_1.transformErrorLogs)(response.data || []),
    };
};
exports.useErrorLogData = useErrorLogData;
