/// <reference types="react" />
import { ProjectWithViewOptions } from './Projects';
declare const ProjectListItem: ({ isArchive, project, }: {
    isArchive: boolean;
    project: ProjectWithViewOptions;
}) => JSX.Element;
export default ProjectListItem;
