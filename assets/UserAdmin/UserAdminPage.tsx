import React, { useState } from 'react';
import { PlusIcon, UserIcon } from '@heroicons/react/20/solid';
import useApiQueryWithSignInRedirect from '../Api/useApiQueryWithSignInRedirect';
import User from './User';
import PartialPageLoading from '../PartialPageLoading';
import Users, { UsersSchema } from './Users';
import AddUserOverlay from './AddUserOverlay';
import MinutesToMilliseconds from '../MinutesToMilliseconds';
import EditUserOverlay from './EditUserOverlay';
import NoResultsAddItem from '../NoResultsAddItem';
import createPortal from '../createPortal';
import { usePageTitle } from '../RouteContext/RouteContext';

const UserAdminPage = () => {
    usePageTitle('Users');

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
    } = useApiQueryWithSignInRedirect<Users>(
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
            return createPortal(<AddUserOverlay setIsOpen={setAddUserIsOpen} />);
        }

        if (editUser) {
            return createPortal(
                <EditUserOverlay
                    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                    // @ts-ignore
                    user={editUser}
                    setEditUser={setEditUser}
                />,
            );
        }

        return null;
    };

    if (users.length < 1) {
        return <>
            {portals()}
            <NoResultsAddItem
                icon={<UserIcon />}
                headline="No users (except yourself)"
                content="Would you like to create a user?"
                actionText="Add New User"
                actionUsesPlusIcon={true}
                actionButtonOnClick={() => { setAddUserIsOpen(true); }}
            />
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
