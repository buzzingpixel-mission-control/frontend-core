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
    <form onSubmit={onSubmit}>
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
    </form>
</div>;

export default EditorShellForm;
