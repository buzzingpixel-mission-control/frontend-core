import { z } from 'zod';

export const QueueDetailsSchema = z.object({
    queue: z.string(),
    totalItemsInQueue: z.number(),
    items: z.array(z.object({
        handle: z.string(),
        name: z.string(),
        jobs: z.array(z.object({
            class: z.string(),
            method: z.string(),
            context: z.record(z.any()).or(z.array(z.any())),
        })),
    })),
});

export type QueueDetails = z.infer<typeof QueueDetailsSchema>;
