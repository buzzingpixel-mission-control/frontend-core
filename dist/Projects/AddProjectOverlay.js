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
var FormInputText_1 = __importDefault(require("../Forms/FormInputText"));
var EditorShellFloating_1 = __importDefault(require("../Forms/EditorShellFloating"));
var EditorShellForm_1 = __importDefault(require("../Forms/EditorShellForm"));
var FormInputTextarea_1 = __importDefault(require("../Forms/FormInputTextarea"));
var ProjectsData_1 = require("./ProjectsData");
var AddProjectOverlay = function (_a) {
    var setIsOpen = _a.setIsOpen;
    var _b = (0, react_1.useState)(false), isSaving = _b[0], setIsSaving = _b[1];
    var _c = (0, react_hook_form_1.useForm)(), getValues = _c.getValues, register = _c.register, setValue = _c.setValue;
    var inputs = [
        {
            title: 'Title',
            name: 'title',
            placeholder: 'Cool Happenings',
            required: true,
            renderInput: FormInputText_1.default,
            setValue: setValue,
        },
        {
            title: 'Slug',
            name: 'slug',
            placeholder: 'cool-happenings',
            required: true,
            renderInput: FormInputText_1.default,
            setValue: setValue,
        },
        {
            title: 'Description',
            name: 'description',
            placeholder: 'It was the best of times it was the worst of times',
            required: true,
            renderInput: FormInputTextarea_1.default,
            setValue: setValue,
        },
    ];
    var _d = (0, react_1.useState)(''), errorMessage = _d[0], setErrorMessage = _d[1];
    var mutation = (0, ProjectsData_1.useAddProjectMutation)();
    var saveHandler = function (data) {
        setIsSaving(true);
        if (errorMessage) {
            setErrorMessage('');
        }
        mutation.mutate(data, {
            onSuccess: function () { return setIsOpen(false); },
            onError: function (error) {
                setErrorMessage(error.message || 'Unable to add project');
                setIsSaving(false);
            },
        });
    };
    return react_1.default.createElement(EditorShellFloating_1.default, { title: "Add New Project", isSaving: isSaving, submitButtonText: "Add", errorMessage: errorMessage, saveHandler: function () {
            saveHandler(getValues());
        }, setEditorIsOpen: setIsOpen },
        react_1.default.createElement(EditorShellForm_1.default, { inputs: inputs, register: register, onSubmit: function () {
                saveHandler(getValues());
            } }));
};
exports.default = AddProjectOverlay;
