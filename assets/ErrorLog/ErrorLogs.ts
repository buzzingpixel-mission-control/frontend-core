import { z } from 'zod';

export const ErrorLogSchema = z.object({
    id: z.string(),
    hash: z.string(),
    message: z.string(),
    file: z.string(),
    line: z.number(),
    trace: z.string(),
    lastErrorAt: z.string(),
});

export type ErrorLog = z.infer<typeof ErrorLogSchema>;

export const ErrorLogsSchema = z.array(ErrorLogSchema);

export type ErrorLogs = z.infer<typeof ErrorLogsSchema>;

export type ErrorLogWithViewOptions = ErrorLog & {
    href: string;
    lastErrorAtDate: Date;
};

export type ErrorLogsWithViewOptions = Array<ErrorLogWithViewOptions>;

export const transformErrorLog = (
    errorLog: ErrorLog,
): ErrorLogWithViewOptions => ({
    ...errorLog,
    href: `/error-logs/${errorLog.id}`,
    lastErrorAtDate: new Date(errorLog.lastErrorAt),
});

export const transformErrorLogs = (
    errorLogs: ErrorLogs,
): ErrorLogsWithViewOptions => errorLogs.map((errorLog) => transformErrorLog(errorLog));
