import { z } from 'zod';

export const QueuesSchema = z.array(
    z.object({
        queue: z.string(),
        totalItemsInQueue: z.number(),
    }),
);

export type Queues = z.infer<typeof QueuesSchema>;
