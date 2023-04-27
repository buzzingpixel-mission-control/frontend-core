import React, { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import FormValues from './FormValues';
import SubmitExistingUser from './SubmitExistingUser';
import User from './User';
import FormInput from '../Forms/FormInput';
import FormInputText from '../Forms/FormInputText';
import FormInputToggle from '../Forms/FormInputToggle';
import FormInputTimezone from '../Forms/FormInputTimezone';
import EditorShellFloating from '../Forms/EditorShellFloating';

const EditUserOverlay = (
    {
        user,
        setEditUser,
    }: {
        user: User;
        setEditUser: Dispatch<SetStateAction<boolean>>;
    },
) => {
    const queryClient = useQueryClient();

    const {
        getValues,
        register,
        setValue,
    } = useForm<FormValues>({
        defaultValues: {
            user_id: user.id,
            email: user.emailAddress,
            name: user.name,
            is_admin: user.isAdmin ? '1' : '0',
            is_active: user.isActive ? '1' : '0',
            timezone: user.timezone,
        },
    });

    const [
        isSaving,
        setIsSaving,
    ] = useState<boolean>(false);

    const [
        errorMessage,
        setErrorMessage,
    ] = useState<string>('');

    const saveHandler: SubmitHandler<FormValues> = (data) => {
        setIsSaving(true);

        if (errorMessage) {
            setErrorMessage('');
        }

        SubmitExistingUser(data)
            .then(() => {
                setEditUser(false);

                queryClient.invalidateQueries(
                    { queryKey: [['admin-user-list']] },
                );
            })
            .catch((error) => {
                setErrorMessage(
                    error.message || 'Unable to save user',
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
            title: 'Is Admin?',
            name: 'is_admin',
            renderInput: FormInputToggle,
            setValue,
            initialValue: user.isAdmin,
        },
        {
            title: 'Is Active?',
            name: 'is_active',
            renderInput: FormInputToggle,
            setValue,
            initialValue: user.isActive,
        },
        {
            title: 'Timezone',
            name: 'timezone',
            instructions: 'optional',
            renderInput: FormInputTimezone,
            setValue,
            initialValue: user.timezone,
        },
    ] as Array<FormInput>;

    return <EditorShellFloating
        title="Edit User"
        isSaving={isSaving}
        errorMessage={errorMessage}
        saveHandler={() => {
            saveHandler(getValues());
        }}
        setEditorIsOpen={setEditUser}
        submitButtonText="Submit"
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
    </EditorShellFloating>;
};

export default EditUserOverlay;
