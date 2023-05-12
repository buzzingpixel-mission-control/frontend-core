import useApiQueryWithSignInRedirect from '../../Api/useApiQueryWithSignInRedirect';
import { QueueDetails, QueueDetailsSchema } from './QueueDetails';
import useApiMutation from '../../Api/useApiMutation';
import RequestMethod from '../../Api/RequestMethod';

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

export const useCancelItemMutation = (
    queueName: string,
) => useApiMutation<unknown, string>({
    invalidateQueryKeysOnSuccess: [`/queue/${queueName}`],
    prepareApiParams: (key) => ({
        uri: `/queue/dequeue/${key}`,
        method: RequestMethod.DELETE,
    }),
});

export const useCancelAllMutation = (
    queueName: string,
) => useApiMutation({
    invalidateQueryKeysOnSuccess: [`/queue/${queueName}`],
    prepareApiParams: () => ({
        uri: `/queue/dequeue/all/${queueName}`,
        method: RequestMethod.DELETE,
    }),
});
