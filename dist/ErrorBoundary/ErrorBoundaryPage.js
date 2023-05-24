"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var NotFoundPage_1 = __importDefault(require("../NotFoundPage"));
var RouteContext_1 = require("../RouteContext/RouteContext");
var ErrorPage_1 = __importDefault(require("./ErrorPage"));
// eslint-disable-next-line react/prop-types
var ErrorBoundaryPage = function (_a) {
    var _b, _c;
    var error = _a.error;
    (0, RouteContext_1.useBreadcrumbs)([{
            name: 'Error',
            href: '#',
        }]);
    // eslint-disable-next-line react/prop-types
    if (error.statusCode === 404 || ((_c = (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.code) === 404) {
        return react_1.default.createElement(NotFoundPage_1.default, null);
    }
    return react_1.default.createElement(ErrorPage_1.default, null);
};
exports.default = ErrorBoundaryPage;
