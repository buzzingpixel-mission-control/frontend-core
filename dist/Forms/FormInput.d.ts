/// <reference types="react" />
import { UseFormSetValue } from 'react-hook-form';
import EditorParams from './EditorParams';
type FormInput = {
    title: string;
    type?: string;
    name: string;
    instructions?: string;
    placeholder?: string;
    required?: boolean;
    renderInput?: (editorParams: EditorParams) => JSX.Element;
    setValue?: UseFormSetValue<any>;
    initialValue?: never;
};
export default FormInput;
