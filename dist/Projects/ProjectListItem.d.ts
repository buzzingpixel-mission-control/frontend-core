import React from 'react';
import { ProjectWithViewOptions } from './Projects';
declare const ProjectListItem: ({ isArchive, project, }: {
    isArchive: boolean;
    project: ProjectWithViewOptions;
}) => React.JSX.Element;
export default ProjectListItem;
