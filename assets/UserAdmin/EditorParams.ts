import { UseFormRegister } from 'react-hook-form';
import Input from './Input';
import FormValues from './FormValues';

type EditorParams = {
    input: Input;
    register: UseFormRegister<FormValues>,
};

export default EditorParams;
