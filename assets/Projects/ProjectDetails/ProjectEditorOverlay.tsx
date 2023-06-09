import React, { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Project } from '../Projects';
import EditorShellFloating from '../../Forms/EditorShellFloating';
import AddProjectFormValues from '../AddProjectFormValues';
import FormInputText from '../../Forms/FormInputText';
import FormInputTextarea from '../../Forms/FormInputTextarea';
import FormInput from '../../Forms/FormInput';
import { useEditProjectMutation } from '../ProjectsData';
import EditorShellForm from '../../Forms/EditorShellForm';

const ProjectEditorOverlay = (
    {
        project,
        setEditorIsOpen,
    }: {
        project: Project;
        setEditorIsOpen: Dispatch<SetStateAction<boolean>>;
    },
) => {
    const {
        getValues,
        register,
        setValue,
    } = useForm<AddProjectFormValues>({
        defaultValues: {
            title: project.title,
            slug: project.slug,
            description: project.description,
        },
    });

    const [
        isSaving,
        setIsSaving,
    ] = useState<boolean>(false);

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

    const mutation = useEditProjectMutation(
        project.id,
        project.slug,
    );

    const saveHandler: SubmitHandler<AddProjectFormValues> = (
        data,
    ) => {
        setIsSaving(true);

        if (errorMessage) {
            setErrorMessage('');
        }

        mutation.mutate(data, {
            onSuccess: () => setEditorIsOpen(false),
            onError: (error) => {
                setErrorMessage(error.message || 'Unable to edit project');

                setIsSaving(false);
            },
        });
    };

    return (
        <EditorShellFloating
            title="Edit Project"
            isSaving={isSaving}
            submitButtonText="Update"
            errorMessage={errorMessage}
            saveHandler={() => {
                saveHandler(getValues());
            }}
            setEditorIsOpen={setEditorIsOpen}
        >
            <EditorShellForm
                inputs={inputs}
                register={register}
                onSubmit={() => {
                    saveHandler(getValues());
                }}
            />
        </EditorShellFloating>
    );
};

export default ProjectEditorOverlay;
