import { useQueryClient } from '@tanstack/react-query';
import useApiQueryWithSignInRedirect from '../Api/useApiQueryWithSignInRedirect';
import {
    ErrorLog,
    ErrorLogs, ErrorLogsSchema, ErrorLogsWithViewOptions, transformErrorLogs,
} from './ErrorLogs';
import useApiMutation from '../Api/useApiMutation';
import RequestMethod from '../Api/RequestMethod';

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

export const useDeleteErrorLogMutation = (errorLogId: string) => {
    const queryClient = useQueryClient();

    const invalidateQueryKeysOnSuccess = [
        '/error-logs/list',
        `/error-logs/${errorLogId}`,
    ];

    return useApiMutation({
        invalidateQueryKeysOnSuccess,
        prepareApiParams: () => ({
            uri: `/error-logs/${errorLogId}`,
            method: RequestMethod.DELETE,
        }),
        options: {
            onMutate: async () => {
                // eslint-disable-next-line no-restricted-syntax
                for (const queryKey of invalidateQueryKeysOnSuccess) {
                    // eslint-disable-next-line no-await-in-loop
                    await queryClient.cancelQueries({
                        queryKey: [[queryKey]],
                    });
                }

                const listQueryKey = '/error-logs/list';

                const previousList = queryClient.getQueryData(
                    [[listQueryKey]],
                ) as ErrorLogs;

                const newList = previousList.filter(
                    (errorLog) => errorLog.id !== errorLogId,
                );

                queryClient.setQueryData(
                    [[listQueryKey]],
                    newList,
                );

                return { previousList };
            },
        },
    });
};
