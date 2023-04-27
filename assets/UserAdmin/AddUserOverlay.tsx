import React, {
    Dispatch, SetStateAction, useState,
} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import FormValues from './FormValues';
import SubmitNewUser from './SubmitNewUser';
import FormInput from '../Forms/FormInput';
import FormInputText from '../Forms/FormInputText';
import FormInputToggle from '../Forms/FormInputToggle';
import FormInputTimezone from '../Forms/FormInputTimezone';
import EditorShellFloating from '../Forms/EditorShellFloating';
import EditorShellForm from '../Forms/EditorShellForm';

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
            renderInput: FormInputText,
        },
        {
            title: 'Name',
            name: 'name',
            placeholder: 'John Doe',
            required: false,
            instructions: 'optional',
            renderInput: FormInputText,
        },
        {
            title: 'Password',
            type: 'password',
            name: 'password',
            required: false,
            instructions: 'optional',
            renderInput: FormInputText,
        },
        {
            title: 'Is Admin?',
            name: 'is_admin',
            renderInput: FormInputToggle,
            setValue,
        },
        {
            title: 'Timezone',
            name: 'timezone',
            renderInput: FormInputTimezone,
            setValue,
        },
    ] as Array<FormInput>;

    return <EditorShellFloating
        title="Add New User"
        isSaving={isSaving}
        errorMessage={errorMessage}
        saveHandler={() => {
            saveHandler(getValues());
        }}
        setEditorIsOpen={setIsOpen}
        submitButtonText="Add"
    >
        <EditorShellForm
            inputs={inputs}
            register={register}
            onSubmit={() => {
                saveHandler(getValues());
            }}
        />
    </EditorShellFloating>;
};

export default AddUserOverlay;
