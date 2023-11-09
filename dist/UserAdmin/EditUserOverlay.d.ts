import React, { Dispatch, SetStateAction } from 'react';
import User from './User';
declare const EditUserOverlay: ({ user, setEditUser, }: {
    user: User;
    setEditUser: Dispatch<SetStateAction<boolean>>;
}) => React.JSX.Element;
export default EditUserOverlay;
