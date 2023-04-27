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
var SubmitNewUser_1 = __importDefault(require("./SubmitNewUser"));
var FormInputText_1 = __importDefault(require("../Forms/FormInputText"));
var FormInputToggle_1 = __importDefault(require("../Forms/FormInputToggle"));
var FormInputTimezone_1 = __importDefault(require("../Forms/FormInputTimezone"));
var EditorShellFloating_1 = __importDefault(require("../Forms/EditorShellFloating"));
var EditorShellForm_1 = __importDefault(require("../Forms/EditorShellForm"));
var AddUserOverlay = function (_a) {
    var setIsOpen = _a.setIsOpen;
    var queryClient = (0, react_query_1.useQueryClient)();
    var _b = (0, react_hook_form_1.useForm)(), getValues = _b.getValues, register = _b.register, setValue = _b.setValue;
    var _c = (0, react_1.useState)(false), isSaving = _c[0], setIsSaving = _c[1];
    var _d = (0, react_1.useState)(''), errorMessage = _d[0], setErrorMessage = _d[1];
    var saveHandler = function (data) {
        setIsSaving(true);
        if (errorMessage) {
            setErrorMessage('');
        }
        (0, SubmitNewUser_1.default)(data)
            .then(function () {
            setIsOpen(false);
            queryClient.invalidateQueries({ queryKey: [['admin-user-list']] });
        })
            .catch(function (error) {
            setErrorMessage(error.message || 'Unable to add user');
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
            renderInput: FormInputText_1.default,
        },
        {
            title: 'Name',
            name: 'name',
            placeholder: 'John Doe',
            required: false,
            instructions: 'optional',
            renderInput: FormInputText_1.default,
        },
        {
            title: 'Password',
            type: 'password',
            name: 'password',
            required: false,
            instructions: 'optional',
            renderInput: FormInputText_1.default,
        },
        {
            title: 'Is Admin?',
            name: 'is_admin',
            renderInput: FormInputToggle_1.default,
            setValue: setValue,
        },
        {
            title: 'Timezone',
            name: 'timezone',
            renderInput: FormInputTimezone_1.default,
            setValue: setValue,
        },
    ];
    return react_1.default.createElement(EditorShellFloating_1.default, { title: "Add New User", isSaving: isSaving, errorMessage: errorMessage, saveHandler: function () {
            saveHandler(getValues());
        }, setEditorIsOpen: setIsOpen, submitButtonText: "Add" },
        react_1.default.createElement(EditorShellForm_1.default, { inputs: inputs, register: register, onSubmit: function () {
                saveHandler(getValues());
            } }));
};
exports.default = AddUserOverlay;
