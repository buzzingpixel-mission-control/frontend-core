import { z } from 'zod';

export const SchedulesSchema = z.array(
    z.object({
        key: z.string(),
        runEvery: z.string(),
        class: z.string(),
        method: z.string(),
        lastRunStartAt: z.string(),
        lastRunEndAt: z.string(),
    }),
);

export type Schedules = z.infer<typeof SchedulesSchema>;

export type SchedulesWithDates = Schedules & {
    lastRunStartAtDate: Date | null;
    lastRunEndAtDate: Date | null;
};
