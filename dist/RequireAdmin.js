"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useUserData_1 = __importDefault(require("./Auth/useUserData"));
var PartialPageLoading_1 = __importDefault(require("./PartialPageLoading"));
var AccessDeniedPage_1 = __importDefault(require("./AccessDeniedPage"));
var RequireAdmin = function (_a) {
    var children = _a.children;
    var _b = (0, useUserData_1.default)(), userData = _b.data, status = _b.status;
    if (status === 'loading') {
        return react_1.default.createElement(PartialPageLoading_1.default, null);
    }
    if (!userData.isAdmin) {
        return react_1.default.createElement(AccessDeniedPage_1.default, null);
    }
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.default = RequireAdmin;
