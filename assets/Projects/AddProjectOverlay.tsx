import React, { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import AddProjectFormValues from './AddProjectFormValues';
import FormInput from '../Forms/FormInput';
import FormInputText from '../Forms/FormInputText';
import EditorShell from '../Forms/EditorShell';
import EditorShellForm from '../Forms/EditorShellForm';
import FormInputTextarea from '../Forms/FormInputTextarea';

const AddProjectOverlay = (
    {
        setIsOpen,
    }: {
        setIsOpen: Dispatch<SetStateAction<boolean>>;
    },
) => {
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

    const saveHandler = () => {
        console.log(getValues());
    };

    return <EditorShell
        title="Add New Project"
        isSaving={false}
        errorMessage=""
        saveHandler={() => {
            // saveHandler(getValues());
            saveHandler();
        }}
        setEditorIsOpen={setIsOpen}
    >
        <EditorShellForm
            inputs={inputs}
            register={register}
            onSubmit={() => {
                // saveHandler(getValues());
                saveHandler();
            }}
        />
    </EditorShell>;
};

export default AddProjectOverlay;
