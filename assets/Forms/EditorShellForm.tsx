import React, { FormEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import FormInput from './FormInput';

const EditorShellForm = (
    {
        inputs,
        onSubmit,
        register,
    }: {
        inputs: Array<FormInput>;
        onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
        // eslint-disable-next-line
        register: UseFormRegister<any>;
    },
) => <div className="text-left">
    <form onSubmit={(e) => {
        e.preventDefault();

        onSubmit(e);
    }}>
        {inputs.map((input, i) => {
            const divClass = i === 0 ? '' : 'mt-4';

            return <div
                className={divClass}
                key={input.name}
            >
                <input.renderInput
                    input={input}
                    register={register}
                />
            </div>;
        })}
        <button type="submit" className="hidden"></button>
    </form>
</div>;

export default EditorShellForm;
