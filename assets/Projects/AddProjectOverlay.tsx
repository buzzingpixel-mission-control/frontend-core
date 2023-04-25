import React, { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AddProjectFormValues from './AddProjectFormValues';
import FormInput from '../Forms/FormInput';
import FormInputText from '../Forms/FormInputText';
import EditorShell from '../Forms/EditorShell';
import EditorShellForm from '../Forms/EditorShellForm';
import FormInputTextarea from '../Forms/FormInputTextarea';
import { useProjectsMutation } from './ProjectsData';

const AddProjectOverlay = (
    {
        setIsOpen,
    }: {
        setIsOpen: Dispatch<SetStateAction<boolean>>;
    },
) => {
    const [
        isSaving,
        setIsSaving,
    ] = useState<boolean>(false);

    const {
        getValues,
        register,
        setValue,
    } = useForm<AddProjectFormValues>();

    const inputs = [
        {
            title: 'Title',
            name: 'title',
            placeholder: 'Cool Happenings',
            required: true,
            renderInput: FormInputText,
            setValue,
        },
        {
            title: 'Slug',
            name: 'slug',
            placeholder: 'cool-happenings',
            required: true,
            renderInput: FormInputText,
            setValue,
        },
        {
            title: 'Description',
            name: 'description',
            placeholder: 'It was the best of times it was the worst of times',
            required: true,
            renderInput: FormInputTextarea,
            setValue,
        },
    ] as Array<FormInput>;

    const [
        errorMessage,
        setErrorMessage,
    ] = useState<string>('');

    const mutation = useProjectsMutation();

    const saveHandler: SubmitHandler<AddProjectFormValues> = (
        data,
    ) => {
        setIsSaving(true);

        if (errorMessage) {
            setErrorMessage('');
        }

        mutation.mutate(data, {
            onSuccess: () => setIsOpen(false),
            onError: (error) => {
                setErrorMessage(error.message || 'Unable to add project');

                setIsSaving(false);
            },
        });
    };

    return <EditorShell
        title="Add New Project"
        isSaving={isSaving}
        submitButtonText="Add"
        errorMessage={errorMessage}
        saveHandler={() => {
            saveHandler(getValues());
        }}
        setEditorIsOpen={setIsOpen}
    >
        <EditorShellForm
            inputs={inputs}
            register={register}
            onSubmit={() => {
                saveHandler(getValues());
            }}
        />
    </EditorShell>;
};

export default AddProjectOverlay;
