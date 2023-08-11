import {
    ErrorLog,
    ErrorLogSchema,
    ErrorLogWithViewOptions,
    transformErrorLog,
} from '../ErrorLogs';
import useApiQueryWithSignInRedirect from '../../Api/useApiQueryWithSignInRedirect';

// eslint-disable-next-line import/prefer-default-export
export const useErrorLogDetailsData = (id: string): {
    status: 'loading' | 'error' | 'success';
    data: ErrorLogWithViewOptions;
} => {
    const uri = `/error-logs/${id}`;

    const response = useApiQueryWithSignInRedirect<ErrorLog>(
        [uri],
        { uri },
        {
            zodValidator: ErrorLogSchema,
            staleTime: Infinity,
        },
    );

    return {
        status: response.status,
        data: transformErrorLog(response.data || {}),
    };
};
