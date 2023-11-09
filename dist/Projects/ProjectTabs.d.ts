import React, { MouseEventHandler } from 'react';
declare const ProjectTabs: {
    ({ activeHref, addProjectOnClick, }: {
        activeHref?: string;
        addProjectOnClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    }): React.JSX.Element;
    defaultProps: {
        activeHref: any;
        addProjectOnClick: any;
    };
};
export default ProjectTabs;
