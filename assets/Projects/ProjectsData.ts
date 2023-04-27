import { useQueryClient } from '@tanstack/react-query';
import useApiQueryWithSignInRedirect from '../Api/useApiQueryWithSignInRedirect';
import MinutesToMilliseconds from '../MinutesToMilliseconds';
import {
    Project, Projects, ProjectsSchema,
} from './Projects';
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

const useAddProjectMutation = () => useApiMutation<unknown, AddProjectFormValues>(
    {
        invalidateQueryKeysOnSuccess: [
            'projects-list',
            'projects-list-archived',
        ],
        prepareApiParams: (
            data,
        ) => ({
            uri: '/projects/add',
            payload: data,
            method: RequestMethod.POST,
        }),
    },
);

const useEditProjectMutation = (projectId: string) => {
    const queryClient = useQueryClient();

    return useApiMutation<unknown, AddProjectFormValues>(
        {
            invalidateQueryKeysOnSuccess: [
                'projects-list',
                'projects-list-archived',
            ],
            prepareApiParams: (
                data,
            ) => ({
                uri: `/projects/edit/${projectId}`,
                payload: data,
                method: RequestMethod.PATCH,
            }),
            options: {
                onMutate: async (data) => {
                    const formValues = data as unknown as AddProjectFormValues;

                    await queryClient.cancelQueries({
                        queryKey: [['projects-list']],
                    });

                    await queryClient.cancelQueries({
                        queryKey: [['projects-list-archived']],
                    });

                    const previousProjects = queryClient.getQueryData(
                        [['projects-list']],
                    ) as Projects;

                    const previousProjectsArchived = queryClient.getQueryData(
                        [['projects-list-archived']],
                    ) as Projects;

                    const projectMapper = (project: Project) => {
                        if (project.id === projectId) {
                            project.title = formValues.title;
                            project.slug = formValues.slug;
                            project.description = formValues.description;
                        }

                        return project;
                    };

                    if (previousProjects) {
                        const newProjects = previousProjects.map(
                            projectMapper,
                        );

                        queryClient.setQueryData([['projects-list']], newProjects);
                    }

                    if (previousProjectsArchived) {
                        const newProjectsArchive = previousProjectsArchived.map(
                            projectMapper,
                        );

                        queryClient.setQueryData([['projects-list-archived']], newProjectsArchive);
                    }

                    return {
                        previousProjects,
                        previousProjectsArchived,
                    };
                },
            },
        },
    );
};

const useArchiveProjectMutation = (
    projectId: string,
    isArchive: boolean,
) => {
    const queryClient = useQueryClient();

    return useApiMutation(
        {
            invalidateQueryKeysOnSuccess: [
                'projects-list',
                'projects-list-archived',
            ],
            prepareApiParams: () => ({
                uri: `/projects/${isArchive ? 'un-archive' : 'archive'}/${projectId}`,
                method: RequestMethod.PATCH,
            }),
            options: {
                onMutate: async () => {
                    await queryClient.cancelQueries({
                        queryKey: [['projects-list']],
                    });

                    await queryClient.cancelQueries({
                        queryKey: [['projects-list-archived']],
                    });

                    const previousProjects = queryClient.getQueryData(
                        [['projects-list']],
                    ) as Projects;

                    const previousProjectsArchived = queryClient.getQueryData(
                        [['projects-list-archived']],
                    ) as Projects;

                    const projectMapper = (project: Project) => {
                        if (project.id === projectId) {
                            project.isActive = isArchive;
                        }

                        return project;
                    };

                    if (previousProjects) {
                        const newProjects = previousProjects.map(
                            projectMapper,
                        );

                        queryClient.setQueryData([['projects-list']], newProjects);
                    }

                    if (previousProjectsArchived) {
                        const newProjectsArchive = previousProjectsArchived.map(
                            projectMapper,
                        );

                        queryClient.setQueryData([['projects-list-archived']], newProjectsArchive);
                    }

                    return {
                        previousProjects,
                        previousProjectsArchived,
                    };
                },
            },
        },
    );
};

export {
    useProjectsData,
    useAddProjectMutation,
    useEditProjectMutation,
    useArchiveProjectMutation,
};
