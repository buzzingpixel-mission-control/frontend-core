import { z } from 'zod';
export declare const ErrorLogSchema: z.ZodObject<{
    id: z.ZodString;
    hash: z.ZodString;
    message: z.ZodString;
    file: z.ZodString;
    line: z.ZodNumber;
    trace: z.ZodString;
    lastErrorAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    hash?: string;
    message?: string;
    file?: string;
    line?: number;
    trace?: string;
    lastErrorAt?: string;
}, {
    id?: string;
    hash?: string;
    message?: string;
    file?: string;
    line?: number;
    trace?: string;
    lastErrorAt?: string;
}>;
export type ErrorLog = z.infer<typeof ErrorLogSchema>;
export declare const ErrorLogsSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    hash: z.ZodString;
    message: z.ZodString;
    file: z.ZodString;
    line: z.ZodNumber;
    trace: z.ZodString;
    lastErrorAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    hash?: string;
    message?: string;
    file?: string;
    line?: number;
    trace?: string;
    lastErrorAt?: string;
}, {
    id?: string;
    hash?: string;
    message?: string;
    file?: string;
    line?: number;
    trace?: string;
    lastErrorAt?: string;
}>, "many">;
export type ErrorLogs = z.infer<typeof ErrorLogsSchema>;
export type ErrorLogWithViewOptions = ErrorLog & {
    href: string;
    lastErrorAtDate: Date;
};
export type ErrorLogsWithViewOptions = Array<ErrorLogWithViewOptions>;
export declare const transformErrorLog: (errorLog: ErrorLog) => ErrorLogWithViewOptions;
export declare const transformErrorLogs: (errorLogs: {
    id?: string;
    hash?: string;
    message?: string;
    file?: string;
    line?: number;
    trace?: string;
    lastErrorAt?: string;
}[]) => ErrorLogsWithViewOptions;
