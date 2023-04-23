import React, { Dispatch, SetStateAction, useEffect } from 'react';

const UserAdminPage = (
    {
        setPageName,
    }:{
        setPageName: Dispatch<SetStateAction<string>>
    },
) => {
    useEffect(() => setPageName('User Admin'), []);

    return <>UserAdminPage</>;
};

export default UserAdminPage;
