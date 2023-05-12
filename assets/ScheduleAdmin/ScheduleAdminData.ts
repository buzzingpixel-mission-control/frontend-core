import useApiQueryWithSignInRedirect from '../Api/useApiQueryWithSignInRedirect';
import { Schedules, SchedulesSchema, SchedulesWithDates } from './Schedules';

// eslint-disable-next-line import/prefer-default-export
export const useScheduleAdminData = () => {
    const uri = '/schedule';

    const result = useApiQueryWithSignInRedirect<Schedules>(
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
        data: null as SchedulesWithDates,
    };

    if (result.data) {
        // Typescript is drunk
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        returnObject.data = result.data.map((item) => {
            const lastRunStartAt = item.lastRunStartAt
                ? new Date(item.lastRunStartAt)
                : null;

            const lastRunEndAt = item.lastRunEndAt
                ? new Date(item.lastRunEndAt)
                : null;

            return {
                ...item,
                lastRunStartAt,
                lastRunEndAt,
            };
        });
    }

    return returnObject;
};
