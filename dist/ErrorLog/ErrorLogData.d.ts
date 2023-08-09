import { ErrorLogsWithViewOptions } from './ErrorLogs';
export declare const useErrorLogData: () => {
    status: 'loading' | 'error' | 'success';
    data: ErrorLogsWithViewOptions;
};
export declare const useDeleteErrorLogMutation: (errorLogId: string) => import("@tanstack/react-query/src/types").UseMutationResult<unknown, import("../Api/ApiError").default, unknown>;
