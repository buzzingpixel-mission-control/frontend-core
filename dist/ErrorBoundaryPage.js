"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var NotFoundPage_1 = __importDefault(require("./NotFoundPage"));
// eslint-disable-next-line react/prop-types
var ErrorBoundaryPage = function (_a) {
    var error = _a.error;
    console.log(error.statusCode);
    // eslint-disable-next-line react/prop-types
    if (error.statusCode === 404) {
        return react_1.default.createElement(NotFoundPage_1.default, null);
    }
    return react_1.default.createElement(react_1.default.Fragment, null, "Foo");
};
exports.default = ErrorBoundaryPage;
