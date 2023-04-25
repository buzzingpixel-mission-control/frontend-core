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
var useProjectsData = function () { return (0, useApiQueryWithSignInRedirect_1.default)(['projects-list'], { uri: '/projects/list' }, {
    staleTime: (0, MinutesToMilliseconds_1.default)(5),
    zodValidator: Projects_1.ProjectsSchema,
}); };
exports.useProjectsData = useProjectsData;
var useProjectsMutation = function () { return (0, useApiMutation_1.default)({
    invalidateQueryKeysOnSuccess: ['projects-list'],
    prepareApiParams: function (data) { return ({
        uri: '/projects/add',
        payload: data,
    }); },
}); };
exports.useProjectsMutation = useProjectsMutation;
