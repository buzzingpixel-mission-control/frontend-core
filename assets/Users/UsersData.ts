import useApiQueryWithSignInRedirect from '../Api/useApiQueryWithSignInRedirect';
import Users, { UsersSchema } from '../UserAdmin/Users';
import MinutesToMilliseconds from '../MinutesToMilliseconds';
import QueryParams from '../QueryParams';
import EncodeQueryParamsFromObject from '../EncodeQueryParamsFromObject';

export enum ActiveStatus {
    ALL = 'all',
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

export enum AdminStatus {
    ALL = 'all',
    IS_ADMIN = 'is_admin',
    IS_NOT_ADMIN = 'is_not_admin',
}

export const useUsersData = (
    active_status: ActiveStatus = ActiveStatus.ALL,
    admin_status: AdminStatus = AdminStatus.ALL,
) => {
    const uri = '/users/list';

    const queryParams = {
        active_status,
        admin_status,
    } as QueryParams;

    return useApiQueryWithSignInRedirect<Users>(
        [`${uri}?${EncodeQueryParamsFromObject(queryParams)}`],
        {
            uri,
            queryParams,
        },
        {
            staleTime: MinutesToMilliseconds(5),
            zodValidator: UsersSchema,
        },
    );
};
