import useApiQueryWithSignInRedirect from '../Api/useApiQueryWithSignInRedirect';
import { SchedulesSchema, SchedulesWithDates } from './Schedules';

// eslint-disable-next-line import/prefer-default-export
export const useScheduleAdminData = () => {
    const uri = '/schedule';

    const result = useApiQueryWithSignInRedirect<SchedulesWithDates>(
        [uri],
        { uri },
        {
            staleTime: Infinity,
            zodValidator: SchedulesSchema,
            refetchInterval: 30000, // Refetch every 30 seconds
        },
    );

    const returnObject = {
        ...result,
        data: null,
    };

    if (result.data) {
        // Typescript is drunk
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        returnObject.data = result.data.map((item) => {
            const lastRunStartAtDate = item.lastRunStartAt
                ? new Date(item.lastRunStartAt)
                : null;

            const lastRunEndAtDate = item.lastRunEndAt
                ? new Date(item.lastRunEndAt)
                : null;

            return {
                ...item,
                lastRunStartAtDate,
                lastRunEndAtDate,
            };
        });
    }

    return returnObject;
};
