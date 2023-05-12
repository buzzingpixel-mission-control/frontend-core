import useApiQueryWithSignInRedirect from '../Api/useApiQueryWithSignInRedirect';
import { Queues, QueuesSchema } from './Queues';

// eslint-disable-next-line import/prefer-default-export
export const useQueueAdminData = () => {
    const uri = '/queue/list';

    return useApiQueryWithSignInRedirect<Queues>(
        [uri],
        { uri },
        {
            staleTime: Infinity,
            zodValidator: QueuesSchema,
            refetchInterval: 1000, // Refetch every second
        },
    );
};
