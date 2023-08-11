import { ErrorLogWithViewOptions } from '../ErrorLogs';
export declare const useErrorLogDetailsData: (id: string) => {
    status: 'loading' | 'error' | 'success';
    data: ErrorLogWithViewOptions;
};
