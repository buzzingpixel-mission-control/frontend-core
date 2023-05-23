import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectDetailsSections, useProjectDetailsData } from './ProjectDetailsData';
import PartialPageLoading from '../../PartialPageLoading';
import { useBreadcrumbs, useHidePageTitle, usePageTitle } from '../../RouteContext/RouteContext';
import createPortal from '../../createPortal';
import ProjectEditorOverlay from './ProjectEditorOverlay';

const statuses = {
    Active: 'text-green-700 bg-green-50 ring-green-600/20',
    Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
};

function classNames (...classes) {
    return classes.filter(Boolean).join(' ');
}

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

    const [
        editProjectIsOpen,
        setEditProjectIsOpen,
    ] = useState<boolean>(false);

    const {
        status,
        data,
    } = useProjectDetailsData(slug);

    if (status === 'loading') {
        return <PartialPageLoading />;
    }

    const project = data;

    const pageName = `Project: ${project.title}`;

    if (pageNameState !== pageName) {
        setPageNameState(pageName);
    }

    if (isArchive !== !project.isActive) {
        setIsArchive(true);
    }

    const portals = () => {
        if (editProjectIsOpen) {
            return createPortal(<ProjectEditorOverlay project={project} setEditorIsOpen={setEditProjectIsOpen} />);
        }

        return null;
    };

    return (
        <>
            {portals()}
            <div className="border-b border-gray-200 pb-4">
                <div className="md:flex md:items-center md:justify-between md:space-x-5">
                    <div className="flex items-start space-x-5">
                        {/*
                          Use vertical padding to simulate center alignment when both lines of text are one line,
                          but preserve the same layout if the text wraps without making the image jump around.
                        */}
                        <div className="pt-1.5">
                            <h1 className="text-2xl font-bold text-gray-900">
                                {project.title}
                                <svg viewBox="0 0 2 2" className="h-6 w-10 fill-current inline px-4">
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <code className="font-light">
                                    {project.slug}
                                </code>
                                <svg viewBox="0 0 2 2" className="h-6 w-10 fill-current inline px-4">
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <div className="inline-block pb-1 align-bottom">
                                    <p
                                        className={classNames(
                                            statuses[project.status.toString()],
                                            'rounded-md whitespace-nowrap px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset inline-block',
                                        )}
                                    >
                                        {project.status.toString()}
                                    </p>
                                </div>
                            </h1>
                            {(() => {
                                if (!project.description) {
                                    return null;
                                }

                                return (
                                    <p className="text-sm font-medium text-gray-500">
                                        {project.description}
                                    </p>
                                );
                            })()}
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                            onClick={() => { setEditProjectIsOpen(true); }}
                        >
                            Edit Project
                        </button>
                    </div>
                </div>
            </div>
            {getProjectDetailsSections().map((section) => (
                <div className="py-6" key={section.uniqueKey}>
                    <section.render project={project} />
                </div>
            ))}
        </>
    );
};

export default ProjectDetailsPage;
