import { z } from 'zod';
export declare const QueuesSchema: z.ZodArray<z.ZodObject<{
    queue: z.ZodString;
    totalItemsInQueue: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    queue?: string;
    totalItemsInQueue?: number;
}, {
    queue?: string;
    totalItemsInQueue?: number;
}>, "many">;
export type Queues = z.infer<typeof QueuesSchema>;
