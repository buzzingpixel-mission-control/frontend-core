import { z } from 'zod';
import useApiQueryWithSignInRedirect from '../Api/useApiQueryWithSignInRedirect';

const UserDataSchema = z.object({
    emailAddress: z.string().min(1).email(),
    name: z.string(),
    nameOrEmail: z.string().min(1),
    isAdmin: z.boolean(),
    timezone: z.string(),
});

type UserData = z.infer<typeof UserDataSchema>;

const useUserData = () => useApiQueryWithSignInRedirect<UserData>(
    ['user-info'],
    { uri: '/user-info' },
    {
        staleTime: Infinity,
        zodValidator: UserDataSchema,
    },
);

export default useUserData;
