import useApiQueryWithSignInRedirect from '../../Api/useApiQueryWithSignInRedirect';
import { QueueDetails, QueueDetailsSchema } from './QueueDetails';

// eslint-disable-next-line import/prefer-default-export
export const useQueueDetailsData = (queueName: string) => {
    const uri = `/queue/${queueName}`;

    return useApiQueryWithSignInRedirect<QueueDetails>(
        [uri],
        { uri },
        {
            staleTime: Infinity,
            zodValidator: QueueDetailsSchema,
            refetchInterval: 5000, // Refetch every 5 seconds
        },
    );
};
