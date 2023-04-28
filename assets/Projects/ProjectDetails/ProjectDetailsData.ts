import useApiQueryWithSignInRedirect from '../../Api/useApiQueryWithSignInRedirect';
import MinutesToMilliseconds from '../../MinutesToMilliseconds';
import { Project, ProjectSchema } from '../Projects';
import { ProjectDetailsSection } from './ProjectDetailsSection';

declare global {
    interface Window { projectDetailsSections: Array<ProjectDetailsSection> }
}

export const getProjectDetailsSections = () => {
    const { projectDetailsSections } = window;

    if (Array.isArray(projectDetailsSections)) {
        return projectDetailsSections;
    }

    return [] as Array<ProjectDetailsSection>;
};

export const addProjectDetailsSection = (section: ProjectDetailsSection) => {
    const projectDetailsSections = getProjectDetailsSections();

    projectDetailsSections.push(section);

    window.projectDetailsSections = projectDetailsSections;
};

export const useProjectDetailsData = (
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
