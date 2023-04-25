"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_hook_form_1 = require("react-hook-form");
var FormInputText_1 = __importDefault(require("../Forms/FormInputText"));
var EditorShell_1 = __importDefault(require("../Forms/EditorShell"));
var EditorShellForm_1 = __importDefault(require("../Forms/EditorShellForm"));
var FormInputTextarea_1 = __importDefault(require("../Forms/FormInputTextarea"));
var AddProjectOverlay = function (_a) {
    var setIsOpen = _a.setIsOpen;
    var _b = (0, react_hook_form_1.useForm)(), getValues = _b.getValues, register = _b.register, setValue = _b.setValue;
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
    var saveHandler = function () {
        console.log(getValues());
    };
    return react_1.default.createElement(EditorShell_1.default, { title: "Add New Project", isSaving: false, errorMessage: "", saveHandler: function () {
            // saveHandler(getValues());
            saveHandler();
        }, setEditorIsOpen: setIsOpen },
        react_1.default.createElement(EditorShellForm_1.default, { inputs: inputs, register: register, onSubmit: function () {
                // saveHandler(getValues());
                saveHandler();
            } }));
};
exports.default = AddProjectOverlay;
