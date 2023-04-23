import { Dispatch, SetStateAction } from 'react';
declare const RequireAdmin: ({ setPageName, children, }: {
    setPageName: Dispatch<SetStateAction<string>>;
    children: JSX.Element | JSX.Element[] | string | string[];
}) => JSX.Element;
export default RequireAdmin;
