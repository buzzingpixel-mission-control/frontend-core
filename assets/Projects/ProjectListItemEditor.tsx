import { SubmitHandler, useForm } from 'react-hook-form';
import React, { Dispatch, SetStateAction, useState } from 'react';
import FormInput from '../Forms/FormInput';
import EditorShellInline from '../Forms/EditorShellInline';
import EditorShellForm from '../Forms/EditorShellForm';
import FormInputText from '../Forms/FormInputText';
import { Project } from './Projects';
import AddProjectFormValues from './AddProjectFormValues';
import FormInputTextarea from '../Forms/FormInputTextarea';
import { useEditProjectMutation } from './ProjectsData';

const ProjectListItemEditor = (
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
        <div style={{ paddingBottom: '1.5rem' }}>
            <div
                className="border border-gray-300 rounded-md shadow-md mx-auto p-4"
                style={{ maxWidth: '600px' }}
            >
                <EditorShellInline
                    isSaving={isSaving}
                    setEditorIsOpen={setEditorIsOpen}
                    errorMessage={errorMessage}
                    saveHandler={() => {
                        saveHandler(getValues());
                    }}
                >
                    <EditorShellForm
                        inputs={inputs}
                        register={register}
                        onSubmit={() => {
                            saveHandler(getValues());
                        }}
                    />
                </EditorShellInline>
            </div>
        </div>
    );
};

export default ProjectListItemEditor;
