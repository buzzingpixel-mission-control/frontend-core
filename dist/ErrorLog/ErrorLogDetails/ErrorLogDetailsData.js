"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useErrorLogDetailsData = void 0;
var ErrorLogs_1 = require("../ErrorLogs");
var useApiQueryWithSignInRedirect_1 = __importDefault(require("../../Api/useApiQueryWithSignInRedirect"));
// eslint-disable-next-line import/prefer-default-export
var useErrorLogDetailsData = function (id) {
    var uri = "/error-logs/".concat(id);
    var response = (0, useApiQueryWithSignInRedirect_1.default)([uri], { uri: uri }, {
        zodValidator: ErrorLogs_1.ErrorLogSchema,
        staleTime: Infinity,
    });
    return {
        status: response.status,
        data: (0, ErrorLogs_1.transformErrorLog)(response.data || {}),
    };
};
exports.useErrorLogDetailsData = useErrorLogDetailsData;
