import { UseFormRegister } from 'react-hook-form';

// eslint-disable-next-line import/no-cycle
import FormInput from './FormInput';

type EditorParams = {
    input: FormInput;
    // eslint-disable-next-line eslint-comments/disable-enable-pair
    /* eslint-disable @typescript-eslint/no-explicit-any */
    register: UseFormRegister<any>;
};
export default EditorParams;
