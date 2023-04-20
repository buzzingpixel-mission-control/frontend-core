import React, { useEffect } from 'react';

import { useCookies } from 'react-cookie';
import FullPageLoading from '../FullPageLoading';
import redirectToSignIn from '../redirectToSignIn';

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
        useEffect(() => {
            redirectToSignIn();
        }, []);

        return <FullPageLoading />;
    }

    return <>{children}</>;
};
export default Auth;
