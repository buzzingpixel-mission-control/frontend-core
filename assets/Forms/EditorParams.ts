import { UseFormRegister } from 'react-hook-form';
import FormInput from './FormInput';

type EditorParams = {
    input: FormInput;
    // eslint-disable-next-line
    register: UseFormRegister<any>,
};
export default EditorParams;
