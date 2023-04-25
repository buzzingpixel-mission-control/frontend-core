import { z } from 'zod';
export declare const ProjectAttributeSchema: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key?: string;
    value?: string;
}, {
    key?: string;
    value?: string;
}>;
export type ProjectAttribute = z.infer<typeof ProjectAttributeSchema>;
export declare const ProjectAttributesSchema: z.ZodArray<z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key?: string;
    value?: string;
}, {
    key?: string;
    value?: string;
}>, "many">;
export type ProjectAttributes = z.infer<typeof ProjectAttributesSchema>;
