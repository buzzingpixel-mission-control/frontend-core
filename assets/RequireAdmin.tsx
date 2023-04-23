import React from 'react';
import useUserData from './Auth/useUserData';
import PartialPageLoading from './PartialPageLoading';
import AccessDeniedPage from './AccessDeniedPage';

const RequireAdmin = (
    {
        children,
    }: {
        children: | JSX.Element | JSX.Element[] | string | string[];
    },
) => {
    const {
        data: userData,
        status,
    } = useUserData();

    if (status === 'loading') {
        return <PartialPageLoading />;
    }

    if (!userData.isAdmin) {
        return <AccessDeniedPage />;
    }

    return <>{children}</>;
};

export default RequireAdmin;
