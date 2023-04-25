import React, { useState } from 'react';
import {
    PlusIcon,
    ClipboardDocumentListIcon,
} from '@heroicons/react/20/solid';
import setPageName from '../PageName/setPageName';
import { useProjectsData } from './ProjectsData';
import PartialPageLoading from '../PartialPageLoading';
import NoResultsAddItem from '../NoResultsAddItem';
import createPortal from '../createPortal';
import AddProjectOverlay from './AddProjectOverlay';

const ProjectsPage = () => {
    setPageName('Projects');

    const [
        addProjectIsOpen,
        setAddProjectIsOpen,
    ] = useState<boolean>(false);

    const {
        status,
        data,
    } = useProjectsData();

    if (status === 'loading') {
        return <PartialPageLoading />;
    }

    const portals = () => {
        if (addProjectIsOpen) {
            return createPortal(<AddProjectOverlay setIsOpen={setAddProjectIsOpen} />);
        }

        return null;
    };

    if (data.length < 1) {
        return <>
            {portals()}
            <NoResultsAddItem
                icon={<ClipboardDocumentListIcon />}
                headline="No projects"
                content="Would you like to create a project?"
                actionText="Add New Project"
                actionUsesPlusIcon={true}
                actionButtonOnClick={() => { setAddProjectIsOpen(true); }}
            />
        </>;
    }

    return <>Projects Page Content</>;
};

export default ProjectsPage;
