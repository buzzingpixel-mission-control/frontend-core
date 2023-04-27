import useApiQueryWithSignInRedirect from '../Api/useApiQueryWithSignInRedirect';
import MinutesToMilliseconds from '../MinutesToMilliseconds';
import { Projects, ProjectsSchema } from './Projects';
import useApiMutation from '../Api/useApiMutation';
import AddProjectFormValues from './AddProjectFormValues';
import RequestMethod from '../Api/RequestMethod';

const useProjectsData = () => useApiQueryWithSignInRedirect<Projects>(
    ['projects-list'],
    { uri: '/projects/list' },
    {
        staleTime: MinutesToMilliseconds(5),
        zodValidator: ProjectsSchema,
    },
);

const useProjectsMutation = (
    uri: string,
    method: RequestMethod = RequestMethod.POST,
) => useApiMutation<unknown, AddProjectFormValues|undefined>(
    {
        invalidateQueryKeysOnSuccess: ['projects-list'],
        prepareApiParams: (
            data,
        ) => ({
            uri,
            payload: data,
            method,
        }),
    },
);

export {
    useProjectsData,
    useProjectsMutation,
};
