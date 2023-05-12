import { z } from 'zod';
export declare const QueueDetailsSchema: z.ZodObject<{
    queue: z.ZodString;
    totalItemsInQueue: z.ZodNumber;
    items: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        handle: z.ZodString;
        name: z.ZodString;
        jobs: z.ZodArray<z.ZodObject<{
            class: z.ZodString;
            method: z.ZodString;
            context: z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny, "many">]>;
        }, "strip", z.ZodTypeAny, {
            class?: string;
            method?: string;
            context?: any[] | Record<string, any>;
        }, {
            class?: string;
            method?: string;
            context?: any[] | Record<string, any>;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        key?: string;
        handle?: string;
        name?: string;
        jobs?: {
            class?: string;
            method?: string;
            context?: any[] | Record<string, any>;
        }[];
    }, {
        key?: string;
        handle?: string;
        name?: string;
        jobs?: {
            class?: string;
            method?: string;
            context?: any[] | Record<string, any>;
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    queue?: string;
    totalItemsInQueue?: number;
    items?: {
        key?: string;
        handle?: string;
        name?: string;
        jobs?: {
            class?: string;
            method?: string;
            context?: any[] | Record<string, any>;
        }[];
    }[];
}, {
    queue?: string;
    totalItemsInQueue?: number;
    items?: {
        key?: string;
        handle?: string;
        name?: string;
        jobs?: {
            class?: string;
            method?: string;
            context?: any[] | Record<string, any>;
        }[];
    }[];
}>;
export type QueueDetails = z.infer<typeof QueueDetailsSchema>;
