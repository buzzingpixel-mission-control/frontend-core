import { Dispatch, SetStateAction } from 'react';
declare const EditorShellFloating: ({ title, children, isSaving, saveHandler, errorMessage, setEditorIsOpen, submitButtonText, }: {
    title: string;
    isSaving: boolean;
    errorMessage: string;
    saveHandler: () => void;
    setEditorIsOpen: Dispatch<SetStateAction<boolean>>;
    submitButtonText?: string;
    children: JSX.Element | JSX.Element[] | string | string[];
}) => JSX.Element;
export default EditorShellFloating;
