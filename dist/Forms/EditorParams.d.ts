import { UseFormRegister } from 'react-hook-form';
import FormInput from './FormInput';
type EditorParams = {
    input: FormInput;
    register: UseFormRegister<any>;
};
export default EditorParams;
