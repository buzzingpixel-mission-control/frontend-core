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
        // eslint-disable-next-line eslint-comments/disable-enable-pair
        /* eslint-disable @typescript-eslint/no-explicit-any */
        register: UseFormRegister<any>;
    },
) => (
    <div className="text-left">
        <form onSubmit={(e) => {
            e.preventDefault();

            onSubmit(e);
        }}
        >
            {inputs.map((input, i) => {
                const divClass = i === 0 ? '' : 'mt-4';

                return (
                    <div
                        className={divClass}
                        key={input.name}
                    >
                        <input.renderInput
                            input={input}
                            register={register}
                        />
                    </div>
                );
            })}
            <button type="submit" className="hidden" />
        </form>
    </div>
);

EditorShellForm.defaultProps = {
    onSubmit: undefined,
};

export default EditorShellForm;
