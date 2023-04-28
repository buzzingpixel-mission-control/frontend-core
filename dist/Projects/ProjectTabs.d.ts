import { MouseEventHandler } from 'react';
declare const ProjectTabs: {
    ({ activeHref, addProjectOnClick, }: {
        activeHref?: string;
        addProjectOnClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    }): JSX.Element;
    defaultProps: {
        activeHref: any;
        addProjectOnClick: any;
    };
};
export default ProjectTabs;
