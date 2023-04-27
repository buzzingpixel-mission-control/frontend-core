import useApiQueryWithSignInRedirect from '../../Api/useApiQueryWithSignInRedirect';
import MinutesToMilliseconds from '../../MinutesToMilliseconds';
import { Project, ProjectSchema } from '../Projects';

const useProjectDetailsData = (
    slug: string,
) => {
    const uri = `/projects/${slug}`;

    return useApiQueryWithSignInRedirect<Project>(
        [uri],
        { uri },
        {
            staleTime: MinutesToMilliseconds(5),
            zodValidator: ProjectSchema,
        },
    );
};

export {
    useProjectDetailsData,
};
