import React, { useState } from 'react';
import { ClipboardDocumentListIcon } from '@heroicons/react/20/solid';
import { useProjectsData } from './ProjectsData';
import PartialPageLoading from '../PartialPageLoading';
import NoResultsAddItem from '../NoResultsAddItem';
import createPortal from '../createPortal';
import AddProjectOverlay from './AddProjectOverlay';
import ProjectTabs from './ProjectTabs';
import { transformProjects } from './Projects';
import ProjectsList from './ProjectsList';
import { usePageTitle } from '../RouteContext/RouteContext';
import useFilterText from './useFilterText';

const ProjectsPage = (
    {
        isArchive = false,
    }: {
        isArchive?: boolean;
    },
) => {
    const [
        pageNameState,
        setPageNameState,
    ] = useState('');

    if (isArchive && pageNameState !== 'Archived Projects') {
        setPageNameState('Archived Projects');
    } else if (!isArchive && pageNameState !== 'Projects') {
        setPageNameState('Projects');
    }

    usePageTitle(pageNameState);

    const [
        filterText,
        setFilterText,
    ] = useFilterText();

    const [
        addProjectIsOpen,
        setAddProjectIsOpen,
    ] = useState<boolean>(false);

    const {
        status,
        data,
    } = useProjectsData(isArchive);

    const Tabs = (
        <ProjectTabs
            activeHref={isArchive ? '/projects/archived' : '/projects'}
            addProjectOnClick={() => { setAddProjectIsOpen(true); }}
        />
    );

    if (status === 'loading') {
        return (
            <>
                {Tabs}
                <PartialPageLoading />
            </>
        );
    }

    const portals = () => {
        if (addProjectIsOpen) {
            return createPortal(<AddProjectOverlay setIsOpen={setAddProjectIsOpen} />);
        }

        return null;
    };

    let projects = data;

    if (projects.length < 1) {
        if (isArchive) {
            return (
                <>
                    {portals()}
                    {Tabs}
                    <NoResultsAddItem
                        icon={<ClipboardDocumentListIcon />}
                        headline="No archived projects"
                    />
                </>
            );
        }

        return (
            <>
                {portals()}
                {Tabs}
                <NoResultsAddItem
                    icon={<ClipboardDocumentListIcon />}
                    headline="No projects"
                    content="Would you like to create a project?"
                    actionText="Add New Project"
                    actionUsesPlusIcon
                    actionButtonOnClick={() => { setAddProjectIsOpen(true); }}
                />
            </>
        );
    }

    if (filterText !== '') {
        projects = projects.filter((project) => project.title.toLowerCase().indexOf(filterText.toLowerCase()) > -1
            || project.slug.toLowerCase().indexOf(filterText.toLowerCase()) > -1
            || project.description.toLowerCase().indexOf(filterText.toLowerCase()) > -1);
    }

    return (
        <>
            {portals()}
            {Tabs}
            <div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="filter"
                        id="filter"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                        placeholder="Filter results"
                        value={filterText}
                        onChange={(e) => {
                            setFilterText(e.target.value);
                        }}
                    />
                </div>
                <ProjectsList
                    isArchive={isArchive}
                    projects={projects}
                />
            </div>
        </>
    );
};

ProjectsPage.defaultProps = {
    isArchive: false,
};

export default ProjectsPage;
