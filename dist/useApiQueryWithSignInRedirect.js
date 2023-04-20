"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useApiQuery_1 = __importDefault(require("./useApiQuery"));
var redirectToSignIn_1 = __importDefault(require("./redirectToSignIn"));
var useApiQueryWithSignInRedirect = function (queryKey, apiParams, options) {
    var queryResult = (0, useApiQuery_1.default)(queryKey, apiParams, options);
    (0, react_1.useEffect)(function () {
        if (queryResult.accessDenied) {
            (0, redirectToSignIn_1.default)();
        }
    }, [queryResult]);
    if (queryResult.accessDenied) {
        queryResult.status = 'loading';
    }
    return queryResult;
};
exports.default = useApiQueryWithSignInRedirect;
