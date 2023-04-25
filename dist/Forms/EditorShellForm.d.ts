import { FormEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import FormInput from './FormInput';
declare const EditorShellForm: ({ inputs, onSubmit, register, }: {
    inputs: Array<FormInput>;
    onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
    register: UseFormRegister<any>;
}) => JSX.Element;
export default EditorShellForm;
