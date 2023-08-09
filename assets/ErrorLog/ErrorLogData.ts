import useApiQueryWithSignInRedirect from '../Api/useApiQueryWithSignInRedirect';
import {
    ErrorLogs, ErrorLogsSchema, ErrorLogsWithViewOptions, transformErrorLogs,
} from './ErrorLogs';

// eslint-disable-next-line import/prefer-default-export
export const useErrorLogData = (): {
    status: 'loading' | 'error' | 'success';
    data: ErrorLogsWithViewOptions;
} => {
    const uri = '/error-logs/list';

    const response = useApiQueryWithSignInRedirect<ErrorLogs>(
        [uri],
        { uri },
        {
            zodValidator: ErrorLogsSchema,
            staleTime: Infinity,
        },
    );

    return {
        status: response.status,
        data: transformErrorLogs(response.data || []),
    };
};
