import { Dispatch, SetStateAction } from 'react';
declare const EditorShellInline: {
    ({ children, isSaving, saveHandler, errorMessage, setEditorIsOpen, submitButtonText, }: {
        isSaving: boolean;
        errorMessage?: string;
        saveHandler: () => void;
        setEditorIsOpen: Dispatch<SetStateAction<boolean>>;
        submitButtonText?: string;
        children: JSX.Element | JSX.Element[] | string | string[];
    }): JSX.Element;
    defaultProps: {
        errorMessage: any;
        submitButtonText: any;
    };
};
export default EditorShellInline;
