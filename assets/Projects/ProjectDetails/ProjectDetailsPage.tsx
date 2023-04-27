import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProjectDetailsData } from './ProjectDetailsData';
import PartialPageLoading from '../../PartialPageLoading';
import { transformProject } from '../Projects';
import { useBreadcrumbs, useHidePageTitle, usePageTitle } from '../../RouteContext/RouteContext';

const ProjectDetailsPage = () => {
    const { slug } = useParams();

    useHidePageTitle(true);

    const [
        pageNameState,
        setPageNameState,
    ] = useState(
        'Loading Project Details…',
    );

    const [
        isArchive,
        setIsArchive,
    ] = useState(false);

    usePageTitle(pageNameState);

    useBreadcrumbs([
        {
            name: 'Projects',
            href: isArchive ? '/projects/archived' : '/projects',
        },
        {
            name: pageNameState,
            href: `/projects/${slug}`,
        },
    ]);

    const {
        status,
        data,
    } = useProjectDetailsData(slug);

    if (status === 'loading') {
        return <>
            <PartialPageLoading />
        </>;
    }

    const project = transformProject(data);

    const pageName = `Project: ${project.title}`;

    if (pageNameState !== pageName) {
        setPageNameState(pageName);
    }

    if (isArchive !== !project.isActive) {
        setIsArchive(true);
    }

    // console.log(project);

    return <>
        ProjectDetailsPage
    </>;
};

export default ProjectDetailsPage;
