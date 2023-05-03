import useApiQueryWithSignInRedirect from '../../Api/useApiQueryWithSignInRedirect';
import MinutesToMilliseconds from '../../MinutesToMilliseconds';
import {
    Project, ProjectSchema, ProjectWithViewOptions, transformProject,
} from '../Projects';
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

export const useProjectDetailsData = (slug: string): {
    status: 'loading' | 'error' | 'success';
    data?: ProjectWithViewOptions;
} => {
    const uri = `/projects/${slug}`;

    const response = useApiQueryWithSignInRedirect<Project>(
        [uri],
        { uri },
        {
            staleTime: MinutesToMilliseconds(5),
            zodValidator: ProjectSchema,
        },
    );

    if (response.status === 'loading') {
        return {
            status: 'loading',
        };
    }

    if (response.status === 'error') {
        return {
            status: 'error',
        };
    }

    return {
        status: 'success',
        data: transformProject(response.data),
    };
};
