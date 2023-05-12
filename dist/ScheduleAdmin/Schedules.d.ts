import { z } from 'zod';
export declare const SchedulesSchema: z.ZodArray<z.ZodObject<{
    key: z.ZodString;
    runEvery: z.ZodString;
    class: z.ZodString;
    method: z.ZodString;
    lastRunStartAt: z.ZodString;
    lastRunEndAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key?: string;
    runEvery?: string;
    class?: string;
    method?: string;
    lastRunStartAt?: string;
    lastRunEndAt?: string;
}, {
    key?: string;
    runEvery?: string;
    class?: string;
    method?: string;
    lastRunStartAt?: string;
    lastRunEndAt?: string;
}>, "many">;
export type Schedules = z.infer<typeof SchedulesSchema>;
export type SchedulesWithDates = Schedules & {
    lastRunStartAt: Date | null;
    lastRunEndAt: Date | null;
};
