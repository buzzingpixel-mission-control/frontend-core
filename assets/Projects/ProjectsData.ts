import useApiQueryWithSignInRedirect from '../Api/useApiQueryWithSignInRedirect';
import MinutesToMilliseconds from '../MinutesToMilliseconds';
import { Projects, ProjectsSchema } from './Projects';
import useApiMutation from '../Api/useApiMutation';
import AddProjectFormValues from './AddProjectFormValues';
import RequestMethod from '../Api/RequestMethod';

const useProjectsData = (
    archive = false,
) => {
    let queryKey = ['projects-list'];

    let uri = '/projects/list';

    if (archive) {
        queryKey = ['projects-list-archived'];

        uri = '/projects/list/archived';
    }

    return useApiQueryWithSignInRedirect<Projects>(
        queryKey,
        { uri },
        {
            staleTime: MinutesToMilliseconds(5),
            zodValidator: ProjectsSchema,
        },
    );
};

const useProjectsMutation = (
    uri: string,
    method: RequestMethod = RequestMethod.POST,
) => useApiMutation<unknown, AddProjectFormValues|undefined>(
    {
        invalidateQueryKeysOnSuccess: [
            'projects-list',
            'projects-list-archived',
        ],
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
