import React, { useState } from 'react';
import { PlusIcon, UserIcon } from '@heroicons/react/20/solid';
import { createPortal } from 'react-dom';
import setPageName from '../PageName/setPageName';
import useApiQueryWithSignInRedirect from '../Api/useApiQueryWithSignInRedirect';
import User from './User';
import PartialPageLoading from '../PartialPageLoading';
import { UsersSchema } from './Users';
import AddUserOverlay from './AddUserOverlay';
import MinutesToMilliseconds from '../MinutesToMilliseconds';
import EditUserOverlay from './EditUserOverlay';

const UserAdminPage = () => {
    setPageName('Users');

    const [
        addUserIsOpen,
        setAddUserIsOpen,
    ] = useState<boolean>(false);

    const [
        editUser,
        setEditUser,
    ] = useState<boolean|User>(false);

    const {
        status,
        data: users,
    } = useApiQueryWithSignInRedirect<Array<User>>(
        ['admin-user-list'],
        { uri: '/user-admin/all-users' },
        {
            staleTime: MinutesToMilliseconds(5),
            zodValidator: UsersSchema,
        },
    );

    if (status === 'loading') {
        return <PartialPageLoading />;
    }

    const portals = () => {
        if (addUserIsOpen) {
            return createPortal(
                <AddUserOverlay setIsOpen={setAddUserIsOpen} />,
                document.body,
            );
        }

        if (editUser) {
            return createPortal(
                <EditUserOverlay
                    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                    // @ts-ignore
                    user={editUser}
                    setEditUser={setEditUser}
                />,
                document.body,
            );
        }

        return null;
    };

    if (users.length < 1) {
        return <>
            {portals()}
            <div className="text-center rounded-lg border-2 border-dashed border-gray-300 p-6">
                <div className="mx-auto h-12 w-12 text-gray-400">
                    <UserIcon />
                </div>
                <h3 className="mt-2 text-sm font-semibold text-gray-900">No users (except yourself)</h3>
                <p className="mt-1 text-sm text-gray-500">Would you like to create a user?</p>
                <div className="mt-6">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                        onClick={() => { setAddUserIsOpen(true); }}
                    >
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        Add New User
                    </button>
                </div>
            </div>
        </>;
    }

    return <>
        {portals()}
        <div>
            <div className="flex items-center">
                <div className="flex-auto"></div>
                <div className="mt-4 sm:mt-0 sm:ml-16">
                    <button
                        type="button"
                        className="inline-flex items-center block rounded-md bg-cyan-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                        onClick={() => { setAddUserIsOpen(true); }}
                    >
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        Add New User
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Email
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Is Admin?
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Is Active?
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Timezone
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {user.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.emailAddress}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.isAdmin ? 'Yes' : 'No'}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.isActive ? 'Yes' : 'No'}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.timezone}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a
                                                href="#"
                                                className="text-cyan-600 hover:text-cyan-900"
                                                onClick={() => {
                                                    setEditUser(user);
                                                }}
                                            >
                                                Edit<span className="sr-only">, {user.name || user.emailAddress}</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default UserAdminPage;
