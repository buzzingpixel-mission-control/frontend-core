import useApiQueryWithSignInRedirect from '../Api/useApiQueryWithSignInRedirect';
import MinutesToMilliseconds from '../MinutesToMilliseconds';
import { Projects, ProjectsSchema } from './Projects';
import useApiMutation from '../Api/useApiMutation';
import AddProjectFormValues from './AddProjectFormValues';

const useProjectsData = () => useApiQueryWithSignInRedirect<Projects>(
    ['projects-list'],
    { uri: '/projects/list' },
    {
        staleTime: MinutesToMilliseconds(5),
        zodValidator: ProjectsSchema,
    },
);

const useProjectsMutation = () => useApiMutation<unknown, AddProjectFormValues>(
    {
        invalidateQueryKeysOnSuccess: ['projects-list'],
        prepareApiParams: (
            data,
        ) => ({
            uri: '/projects/add',
            payload: data,
        }),
    },
);

export {
    useProjectsData,
    useProjectsMutation,
};
