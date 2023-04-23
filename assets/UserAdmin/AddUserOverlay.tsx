import React, {
    Dispatch, SetStateAction, useState,
} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import EditorShell from '../EditorShell';
import Input from './Input';
import TextInput from './TextInput';
import FormValues from './FormValues';
import ToggleInput from './ToggleInput';
import TimezoneInput from './TimezoneInput';
import SubmitNewUser from './SubmitNewUser';

const AddUserOverlay = (
    {
        setIsOpen,
    }: {
        setIsOpen: Dispatch<SetStateAction<boolean>>;
    },
) => {
    const queryClient = useQueryClient();

    const {
        getValues,
        register,
        setValue,
    } = useForm<FormValues>();

    const [
        isSaving,
        setIsSaving,
    ] = useState<boolean>(false);

    const [
        errorMessage,
        setErrorMessage,
    ] = useState<string>('');

    const saveHandler: SubmitHandler<FormValues> = (
        data,
    ) => {
        setIsSaving(true);

        if (errorMessage) {
            setErrorMessage('');
        }

        SubmitNewUser(data)
            .then(() => {
                setIsOpen(false);

                queryClient.invalidateQueries(
                    { queryKey: [['admin-user-list']] },
                );
            })
            .catch((error) => {
                setErrorMessage(
                    error.message || 'Unable to add user',
                );

                setIsSaving(false);
            });
    };

    const inputs = [
        {
            title: 'Email',
            type: 'email',
            name: 'email',
            placeholder: 'johndoe@domain.com',
            required: true,
            renderInput: TextInput,
        },
        {
            title: 'Name',
            name: 'name',
            placeholder: 'John Doe',
            required: false,
            instructions: 'optional',
            renderInput: TextInput,
        },
        {
            title: 'Password',
            type: 'password',
            name: 'password',
            required: false,
            instructions: 'optional',
            renderInput: TextInput,
        },
        {
            title: 'Is Admin?',
            name: 'is_admin',
            renderInput: ToggleInput,
            setValue,
        },
        {
            title: 'Timezone',
            name: 'timezone',
            renderInput: TimezoneInput,
            setValue,
        },
    ] as Array<Input>;

    return <EditorShell
        title="Add New User"
        isSaving={isSaving}
        errorMessage={errorMessage}
        saveHandler={() => {
            saveHandler(getValues());
        }}
        setEditorIsOpen={setIsOpen}
        submitButtonText="Add"
    >
        <div className="text-left">
            <form onSubmit={() => {
                saveHandler(getValues());
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
            </form>
        </div>
    </EditorShell>;
};

export default AddUserOverlay;
