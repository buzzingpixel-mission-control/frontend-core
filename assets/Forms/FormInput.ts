import { UseFormSetValue } from 'react-hook-form';

// eslint-disable-next-line import/no-cycle
import EditorParams from './EditorParams';

type FormInput = {
    title: string;
    type?: string;
    name: string;
    instructions?: string;
    placeholder?: string;
    required?: boolean;
    renderInput?: (editorParams: EditorParams) => JSX.Element;
    // eslint-disable-next-line eslint-comments/disable-enable-pair
    /* eslint-disable @typescript-eslint/no-explicit-any */
    setValue?: UseFormSetValue<any>;
    initialValue?: never;
};

export default FormInput;
