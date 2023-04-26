import { z } from 'zod';
export declare const ProjectSchema: z.ZodObject<{
    id: z.ZodString;
    isActive: z.ZodBoolean;
    title: z.ZodString;
    slug: z.ZodString;
    description: z.ZodString;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    isActive?: boolean;
    title?: string;
    slug?: string;
    description?: string;
    createdAt?: string;
}, {
    id?: string;
    isActive?: boolean;
    title?: string;
    slug?: string;
    description?: string;
    createdAt?: string;
}>;
export type Project = z.infer<typeof ProjectSchema>;
export declare const ProjectsSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    isActive: z.ZodBoolean;
    title: z.ZodString;
    slug: z.ZodString;
    description: z.ZodString;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    isActive?: boolean;
    title?: string;
    slug?: string;
    description?: string;
    createdAt?: string;
}, {
    id?: string;
    isActive?: boolean;
    title?: string;
    slug?: string;
    description?: string;
    createdAt?: string;
}>, "many">;
export type Projects = z.infer<typeof ProjectsSchema>;
export declare enum ProjectViewOptionsStatus {
    Active = "Active",
    Archived = "Archived"
}
export type ProjectWithViewOptions = Project & {
    href: string;
    status: ProjectViewOptionsStatus;
    createdAtDate: Date;
};
export type ProjectsWithViewOptions = Array<ProjectWithViewOptions>;
export declare const transformProject: (project: Project) => ProjectWithViewOptions;
export declare const transformProjects: (projects: {
    id?: string;
    isActive?: boolean;
    title?: string;
    slug?: string;
    description?: string;
    createdAt?: string;
}[]) => ProjectsWithViewOptions;
