import React from 'react';
import { RegisterOptions } from 'react-hook-form';
import EditorParams from './EditorParams';
import FormValues from './FormValues';

const TextInput = (
    {
        input,
        register,
    }: EditorParams,
) => {
    const options = {} as RegisterOptions<FormValues>;

    if (input.required) {
        options.required = true;
    }

    if (input.type === 'email') {
        options.pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    }

    return <>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {input.title}
            {(() => {
                if (!input.instructions) {
                    return null;
                }

                return <span className="block text-gray-400 text-xs -mt-0.5">
                    {input.instructions}
                </span>;
            })()}
        </label>
        <div className="mt-1">
            <input
                {...register(
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    input.name,
                    options,
                )}
                type={input.type || 'text'}
                id={input.name}
                placeholder={input.placeholder || ''}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
            />
        </div>
    </>;
};

export default TextInput;
