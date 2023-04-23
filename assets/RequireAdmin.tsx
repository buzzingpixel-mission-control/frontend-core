import React, { Dispatch, SetStateAction } from 'react';
import useUserData from './Auth/useUserData';
import PartialPageLoading from './PartialPageLoading';
import AccessDeniedPage from './AccessDeniedPage';

const RequireAdmin = (
    {
        setPageName,
        children,
    }: {
        setPageName: Dispatch<SetStateAction<string>>;
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
        return <AccessDeniedPage setPageName={setPageName} />;
    }

    return <>{children}</>;
};

export default RequireAdmin;
