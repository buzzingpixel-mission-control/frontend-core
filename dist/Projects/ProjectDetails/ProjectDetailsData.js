"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProjectDetailsData = void 0;
var useApiQueryWithSignInRedirect_1 = __importDefault(require("../../Api/useApiQueryWithSignInRedirect"));
var MinutesToMilliseconds_1 = __importDefault(require("../../MinutesToMilliseconds"));
var Projects_1 = require("../Projects");
var useProjectDetailsData = function (slug) {
    var uri = "/projects/".concat(slug);
    return (0, useApiQueryWithSignInRedirect_1.default)([uri], { uri: uri }, {
        staleTime: (0, MinutesToMilliseconds_1.default)(5),
        zodValidator: Projects_1.ProjectSchema,
    });
};
exports.useProjectDetailsData = useProjectDetailsData;
