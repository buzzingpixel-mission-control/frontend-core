import React, { MouseEventHandler } from 'react';
declare const NoResultsAddItem: {
    ({ icon, headline, content, actionText, actionUsesPlusIcon, actionButtonOnClick, }: {
        icon?: JSX.Element;
        headline?: string | JSX.Element;
        content?: string | JSX.Element;
        actionText?: string | JSX.Element;
        actionUsesPlusIcon?: boolean;
        actionButtonOnClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    }): React.JSX.Element;
    defaultProps: {
        icon: any;
        headline: any;
        content: any;
        actionText: any;
        actionUsesPlusIcon: any;
        actionButtonOnClick: any;
    };
};
export default NoResultsAddItem;
