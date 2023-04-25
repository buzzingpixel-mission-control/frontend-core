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
