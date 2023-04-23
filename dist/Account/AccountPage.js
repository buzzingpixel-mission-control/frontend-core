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
var useUserData_1 = __importDefault(require("../Auth/useUserData"));
var PartialPageLoading_1 = __importDefault(require("../PartialPageLoading"));
var ListItemRenderer_1 = __importDefault(require("./ListItemRenderer"));
var SingleInputEditor_1 = __importDefault(require("./SingleInputEditor"));
var PasswordEditor_1 = __importDefault(require("./PasswordEditor"));
var TimezoneEditor_1 = __importDefault(require("./TimezoneEditor"));
var AccountPage = function (_a) {
    var setPageName = _a.setPageName;
    (0, react_1.useEffect)(function () { return setPageName('Your Account'); }, []);
    var _b = (0, useUserData_1.default)(), userData = _b.data, status = _b.status;
    if (status === 'loading') {
        return react_1.default.createElement(PartialPageLoading_1.default, null);
    }
    var list = [
        {
            title: 'Name',
            content: userData.name,
            renderEditor: SingleInputEditor_1.default,
            editAction: '/api/request/user-info/edit/name',
        },
        {
            title: 'Email Address',
            content: userData.emailAddress,
            renderEditor: SingleInputEditor_1.default,
            editAction: '/api/request/user-info/edit/email',
            editorInputType: 'email',
        },
        {
            title: 'Timezone',
            content: userData.timezone,
            renderEditor: TimezoneEditor_1.default,
            editAction: '/api/request/user-info/edit/timezone',
        },
        {
            title: 'Password',
            content: '****',
            renderEditor: PasswordEditor_1.default,
            editText: 'Update Password',
            editAction: '/api/request/user-info/edit/password',
        },
    ];
    return react_1.default.createElement("div", { className: "max-w-4xl" },
        react_1.default.createElement("div", { className: "overflow-hidden bg-white shadow sm:rounded-lg" },
            react_1.default.createElement("div", { className: "px-4 py-5 sm:p-0" },
                react_1.default.createElement("dl", { className: "sm:divide-y sm:divide-gray-200" }, list.map(function (item) { return react_1.default.createElement(ListItemRenderer_1.default, { key: item.title, item: item }); })))));
};
exports.default = AccountPage;
