import React, { useEffect } from 'react';

import { useCookies } from 'react-cookie';
import FullPageLoading from '../FullPageLoading';

const Auth = (
    {
        children,
    }: {
        children: | JSX.Element | JSX.Element[] | string | string[];
    },
) => {
    const [cookies] = useCookies(
        ['auth_token'],
    );

    if (!cookies.auth_token) {
        const query = new URLSearchParams({
            authReturn: encodeURI(window.location.href),
        });

        useEffect(() => {
            window.location.href = `/oauth2/authorize?${query.toString()}`;
        }, []);

        return <FullPageLoading />;
    }

    return <>{children}</>;
};
export default Auth;
