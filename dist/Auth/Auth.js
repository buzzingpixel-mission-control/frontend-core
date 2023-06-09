"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_cookie_1 = require("react-cookie");
var FullPageLoading_1 = __importDefault(require("../FullPageLoading"));
var redirectToSignIn_1 = __importDefault(require("./redirectToSignIn"));
var Auth = function (_a) {
    var children = _a.children;
    var cookies = (0, react_cookie_1.useCookies)(['auth_token'])[0];
    if (!cookies.auth_token) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, react_1.useEffect)(function () {
            (0, redirectToSignIn_1.default)();
        }, []);
        return react_1.default.createElement(FullPageLoading_1.default, null);
    }
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.default = Auth;
