import React, { useEffect, useState } from 'react';
import EditorParams from './EditorParams';
import EditorShell from '../EditorShell';
import FetchOptionsBuilder from '../FetchOptionsBuilder';

const PasswordEditor = (
    {
        setEditorIsOpen,
        item,
    }: EditorParams,
) => {
    const [
        password,
        setPassword,
    ] = useState<string>('');

    const [
        passwordConfirm,
        setPasswordConfirm,
    ] = useState<string>('');

    const [
        isSaving,
        setIsSaving,
    ] = useState<boolean>(false);

    const [
        errorMessage,
        setErrorMessage,
    ] = useState<string>('');

    const saveHandler = () => {
        if (isSaving) {
            return;
        }

        setIsSaving(true);

        if (!password) {
            setIsSaving(false);

            setErrorMessage('Password is required');

            return;
        }

        if (password !== passwordConfirm) {
            setIsSaving(false);

            setErrorMessage('Your password confirmation did not match');

            return;
        }

        fetch(item.editAction, FetchOptionsBuilder({
            password,
            passwordConfirm,
        }))
            .then(async (res) => {
                const json = await res.json();

                if (!res.ok) {
                    setIsSaving(false);

                    setErrorMessage(
                        json.message
                        || json.error.message
                        || 'An unknown error occurred',
                    );

                    return;
                }

                setEditorIsOpen(false);
            })
            .catch(() => {
                setIsSaving(false);

                setErrorMessage('An unknown error occurred');
            });
    };

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Enter':
                    e.preventDefault();
                    saveHandler();
                    break;
                case 'Escape':
                    e.preventDefault();
                    setEditorIsOpen(false);
                    break;
                default:
            }
        };

        window.addEventListener('keydown', handler);

        return () => window.removeEventListener('keydown', handler);
    });

    return <EditorShell
        title={`Edit ${item.title}`}
        isSaving={isSaving}
        errorMessage={errorMessage}
        saveHandler={saveHandler}
        setEditorIsOpen={setEditorIsOpen}
    >
        <div className="text-left">
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    New Password
                </label>
                <div className="mt-0.5">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                </label>
                <div className="mt-0.5">
                    <input
                        type="password"
                        name="password-confirm"
                        id="password-confirm"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                        onChange={(e) => {
                            setPasswordConfirm(e.target.value);
                        }}
                    />
                </div>
            </div>
        </div>
    </EditorShell>;
};

export default PasswordEditor;
