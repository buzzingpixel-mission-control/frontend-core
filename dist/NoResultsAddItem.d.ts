import { MouseEventHandler } from 'react';
declare const NoResultsAddItem: ({ icon, headline, content, actionText, actionUsesPlusIcon, actionButtonOnClick, }: {
    icon?: JSX.Element;
    headline?: string | JSX.Element;
    content?: string | JSX.Element;
    actionText?: string | JSX.Element;
    actionUsesPlusIcon?: boolean;
    actionButtonOnClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) => JSX.Element;
export default NoResultsAddItem;
