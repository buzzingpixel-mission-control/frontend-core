import React from 'react';
import { ClipboardDocumentListIcon } from '@heroicons/react/20/solid';
import { ProjectsWithViewOptions } from './Projects';
import NoResultsAddItem from '../NoResultsAddItem';
import ProjectListItem from './ProjectListItem';

const ProjectsList = (
    {
        projects,
    }: {
        projects: ProjectsWithViewOptions
    },
) => {
    if (projects.length < 1) {
        return <NoResultsAddItem
            icon={<ClipboardDocumentListIcon />}
            headline="No projects match your filters"
        />;
    }

    return <div className="bg-white rounded-md shadow-sm px-4">
        <ul role="list" className="divide-y divide-gray-100">
            {projects.map((project) => (
                <ProjectListItem key={project.id} project={project} />
            ))}
        </ul>
    </div>;
};

export default ProjectsList;
