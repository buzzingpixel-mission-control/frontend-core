import { Dispatch, SetStateAction } from 'react';
import { Project } from '../Projects';
declare const ProjectEditorOverlay: ({ project, setEditorIsOpen, }: {
    project: Project;
    setEditorIsOpen: Dispatch<SetStateAction<boolean>>;
}) => JSX.Element;
export default ProjectEditorOverlay;
