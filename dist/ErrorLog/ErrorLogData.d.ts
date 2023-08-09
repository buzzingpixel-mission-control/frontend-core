import { ErrorLogsWithViewOptions } from './ErrorLogs';
export declare const useErrorLogData: () => {
    status: 'loading' | 'error' | 'success';
    data: ErrorLogsWithViewOptions;
};
export declare const useDeleteErrorLogMutation: (errorLogId: string) => import("@tanstack/react-query/src/types").UseMutationResult<unknown, import("../Api/ApiError").default, unknown>;
export declare const useDeleteSelectedErrorLogsMutation: (errorLogs: {
    id?: string;
    hash?: string;
    message?: string;
    file?: string;
    line?: number;
    trace?: string;
    lastErrorAt?: string;
}[]) => import("@tanstack/react-query/src/types").UseMutationResult<unknown, import("../Api/ApiError").default, unknown>;
