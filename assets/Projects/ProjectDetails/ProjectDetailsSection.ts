import { ProjectWithViewOptions } from '../Projects';

export type ProjectDetailsSection = {
    uniqueKey: string;
    render: ({ project }: { project: ProjectWithViewOptions }) => JSX.Element;
};
