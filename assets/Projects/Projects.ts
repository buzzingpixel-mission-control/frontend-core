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
