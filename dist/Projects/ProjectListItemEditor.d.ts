import React, { Dispatch, SetStateAction } from 'react';
import { Project } from './Projects';
declare const ProjectListItemEditor: ({ project, setEditorIsOpen, }: {
    project: Project;
    setEditorIsOpen: Dispatch<SetStateAction<boolean>>;
}) => React.JSX.Element;
export default ProjectListItemEditor;
