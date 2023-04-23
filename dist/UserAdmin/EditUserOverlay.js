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
var react_hook_form_1 = require("react-hook-form");
var react_query_1 = require("@tanstack/react-query");
var SubmitExistingUser_1 = __importDefault(require("./SubmitExistingUser"));
var TextInput_1 = __importDefault(require("./TextInput"));
var ToggleInput_1 = __importDefault(require("./ToggleInput"));
var TimezoneInput_1 = __importDefault(require("./TimezoneInput"));
var EditorShell_1 = __importDefault(require("../EditorShell"));
var EditUserOverlay = function (_a) {
    var user = _a.user, setEditUser = _a.setEditUser;
    var queryClient = (0, react_query_1.useQueryClient)();
    var _b = (0, react_hook_form_1.useForm)({
        defaultValues: {
            user_id: user.id,
            email: user.emailAddress,
            name: user.name,
            is_admin: user.isAdmin ? '1' : '0',
            is_active: user.isActive ? '1' : '0',
            timezone: user.timezone,
        },
    }), getValues = _b.getValues, register = _b.register, setValue = _b.setValue;
    var _c = (0, react_1.useState)(false), isSaving = _c[0], setIsSaving = _c[1];
    var _d = (0, react_1.useState)(''), errorMessage = _d[0], setErrorMessage = _d[1];
    var saveHandler = function (data) {
        setIsSaving(true);
        if (errorMessage) {
            setErrorMessage('');
        }
        (0, SubmitExistingUser_1.default)(data)
            .then(function () {
            setEditUser(false);
            queryClient.invalidateQueries({ queryKey: [['admin-user-list']] });
        })
            .catch(function (error) {
            setErrorMessage(error.message || 'Unable to save user');
            setIsSaving(false);
        });
    };
    var inputs = [
        {
            title: 'Email',
            type: 'email',
            name: 'email',
            placeholder: 'johndoe@domain.com',
            required: true,
            renderInput: TextInput_1.default,
        },
        {
            title: 'Name',
            name: 'name',
            placeholder: 'John Doe',
            required: false,
            instructions: 'optional',
            renderInput: TextInput_1.default,
        },
        {
            title: 'Is Admin?',
            name: 'is_admin',
            renderInput: ToggleInput_1.default,
            setValue: setValue,
            initialValue: user.isAdmin,
        },
        {
            title: 'Is Active?',
            name: 'is_active',
            renderInput: ToggleInput_1.default,
            setValue: setValue,
            initialValue: user.isActive,
        },
        {
            title: 'Timezone',
            name: 'timezone',
            instructions: 'optional',
            renderInput: TimezoneInput_1.default,
            setValue: setValue,
            initialValue: user.timezone,
        },
    ];
    return react_1.default.createElement(EditorShell_1.default, { title: "Edit User", isSaving: isSaving, errorMessage: errorMessage, saveHandler: function () {
            saveHandler(getValues());
        }, setEditorIsOpen: setEditUser, submitButtonText: "Submit" },
        react_1.default.createElement("div", { className: "text-left" },
            react_1.default.createElement("form", { onSubmit: function () {
                    saveHandler(getValues());
                } }, inputs.map(function (input, i) {
                var divClass = i === 0 ? '' : 'mt-4';
                return react_1.default.createElement("div", { className: divClass, key: input.name },
                    react_1.default.createElement(input.renderInput, { input: input, register: register }));
            }))));
};
exports.default = EditUserOverlay;
