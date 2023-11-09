import React from 'react';
import { ProjectsWithViewOptions } from './Projects';
declare const ProjectsList: ({ isArchive, projects, }: {
    isArchive: boolean;
    projects: ProjectsWithViewOptions;
}) => React.JSX.Element;
export default ProjectsList;
