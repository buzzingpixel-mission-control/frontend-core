import { Dispatch, SetStateAction } from 'react';
import User from './User';
declare const EditUserOverlay: ({ user, setEditUser, }: {
    user: User;
    setEditUser: Dispatch<SetStateAction<boolean>>;
}) => JSX.Element;
export default EditUserOverlay;
