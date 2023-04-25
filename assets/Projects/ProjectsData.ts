import useApiQueryWithSignInRedirect from '../Api/useApiQueryWithSignInRedirect';
import MinutesToMilliseconds from '../MinutesToMilliseconds';
import { Projects, ProjectsSchema } from './Projects';

const useProjectsData = () => useApiQueryWithSignInRedirect<Projects>(
    ['projects-list'],
    { uri: '/projects/list' },
    {
        staleTime: MinutesToMilliseconds(5),
        zodValidator: ProjectsSchema,
    },
);

export {
    useProjectsData,
};
