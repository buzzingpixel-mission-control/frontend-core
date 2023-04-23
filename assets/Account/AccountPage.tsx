import React, { Dispatch, SetStateAction, useEffect } from 'react';
import useUserData from '../Auth/useUserData';
import PartialPageLoading from '../PartialPageLoading';
import ListItemRenderer from './ListItemRenderer';
import ListItem from './ListItem';
import SingleInputEditor from './SingleInputEditor';
import PasswordEditor from './PasswordEditor';
import TimezoneEditor from './TimezoneEditor';

const AccountPage = (
    {
        setPageName,
    }:{
        setPageName: Dispatch<SetStateAction<string>>
    },
) => {
    useEffect(() => setPageName('Your Account'), []);

    const {
        data: userData,
        status,
    } = useUserData();

    if (status === 'loading') {
        return <PartialPageLoading />;
    }

    const list = [
        {
            title: 'Name',
            content: userData.name,
            renderEditor: SingleInputEditor,
            editAction: '/api/request/user-info/edit/name',
        },
        {
            title: 'Email Address',
            content: userData.emailAddress,
            renderEditor: SingleInputEditor,
            editAction: '/api/request/user-info/edit/email',
            editorInputType: 'email',
        },
        {
            title: 'Timezone',
            content: userData.timezone,
            renderEditor: TimezoneEditor,
            editAction: '/api/request/user-info/edit/timezone',
        },
        {
            title: 'Password',
            content: '****',
            renderEditor: PasswordEditor,
            editText: 'Update Password',
            editAction: '/api/request/user-info/edit/password',
        },
    ] as Array<ListItem>;

    return <div className="max-w-4xl">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    {list.map((item) => <ListItemRenderer
                        key={item.title}
                        item={item}
                    />)}
                </dl>
            </div>
        </div>
    </div>;
};

export default AccountPage;
