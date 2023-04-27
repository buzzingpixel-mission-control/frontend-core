"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProjectsMutation = exports.useProjectsData = void 0;
var useApiQueryWithSignInRedirect_1 = __importDefault(require("../Api/useApiQueryWithSignInRedirect"));
var MinutesToMilliseconds_1 = __importDefault(require("../MinutesToMilliseconds"));
var Projects_1 = require("./Projects");
var useApiMutation_1 = __importDefault(require("../Api/useApiMutation"));
var RequestMethod_1 = __importDefault(require("../Api/RequestMethod"));
var useProjectsData = function () { return (0, useApiQueryWithSignInRedirect_1.default)(['projects-list'], { uri: '/projects/list' }, {
    staleTime: (0, MinutesToMilliseconds_1.default)(5),
    zodValidator: Projects_1.ProjectsSchema,
}); };
exports.useProjectsData = useProjectsData;
var useProjectsMutation = function (uri, method) {
    if (method === void 0) { method = RequestMethod_1.default.POST; }
    return (0, useApiMutation_1.default)({
        invalidateQueryKeysOnSuccess: ['projects-list'],
        prepareApiParams: function (data) { return ({
            uri: uri,
            payload: data,
            method: method,
        }); },
    });
};
exports.useProjectsMutation = useProjectsMutation;
