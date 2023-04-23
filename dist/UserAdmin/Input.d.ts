/// <reference types="react" />
import { UseFormSetValue } from 'react-hook-form';
import EditorParams from './EditorParams';
import FormValues from './FormValues';
type Input = {
    title: string;
    type?: string;
    name: string;
    instructions?: string;
    placeholder?: string;
    required?: boolean;
    renderInput?: (editorParams: EditorParams) => JSX.Element;
    setValue?: UseFormSetValue<FormValues>;
    initialValue?: never;
};
export default Input;
