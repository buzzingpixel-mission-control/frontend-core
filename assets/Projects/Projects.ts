import { z } from 'zod';

export const ProjectSchema = z.object({
    id: z.string().min(1),
    isActive: z.boolean(),
    title: z.string().min(1),
    slug: z.string().min(1),
    description: z.string(),
    createdAt: z.string(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const ProjectsSchema = z.array(
    ProjectSchema,
);

export type Projects = z.infer<typeof ProjectsSchema>;

export enum ProjectViewOptionsStatus {
    Active = 'Active',
    Archived = 'Archived',
}

export type ProjectWithViewOptions = Project & {
    href: string;
    status: ProjectViewOptionsStatus;
    createdAtDate: Date;
};

export type ProjectsWithViewOptions = Array<ProjectWithViewOptions>;

export const transformProject = (project: Project): ProjectWithViewOptions => ({
    ...project,
    href: `/projects/${project.slug}`,
    status: project.isActive
        ? ProjectViewOptionsStatus.Active
        : ProjectViewOptionsStatus.Archived,
    createdAtDate: new Date(project.createdAt),
});

export const transformProjects = (
    projects: Projects,
): ProjectsWithViewOptions => projects.map((
    project,
) => transformProject(project));
