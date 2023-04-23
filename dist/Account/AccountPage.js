"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useUserData_1 = __importDefault(require("../Auth/useUserData"));
var PartialPageLoading_1 = __importDefault(require("../PartialPageLoading"));
var ListItemRenderer_1 = __importDefault(require("./ListItemRenderer"));
var SingleInputEditor_1 = __importDefault(require("./SingleInputEditor"));
var PasswordEditor_1 = __importDefault(require("./PasswordEditor"));
var TimezoneEditor_1 = __importDefault(require("./TimezoneEditor"));
var setPageName_1 = __importDefault(require("../PageName/setPageName"));
var AccountPage = function () {
    (0, setPageName_1.default)('Your Account');
    var _a = (0, useUserData_1.default)(), userData = _a.data, status = _a.status;
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
