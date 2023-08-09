import { ErrorLogsWithViewOptions } from './ErrorLogs';
export declare const useErrorLogData: () => {
    status: 'loading' | 'error' | 'success';
    data: ErrorLogsWithViewOptions;
};
