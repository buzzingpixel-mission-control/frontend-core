import { useQueryClient } from '@tanstack/react-query';
import useApiQueryWithSignInRedirect from '../Api/useApiQueryWithSignInRedirect';
import MinutesToMilliseconds from '../MinutesToMilliseconds';
import {
    Project, Projects, ProjectsSchema, ProjectsWithViewOptions, transformProjects,
} from './Projects';
import useApiMutation from '../Api/useApiMutation';
import AddProjectFormValues from './AddProjectFormValues';
import RequestMethod from '../Api/RequestMethod';

export const useProjectsData = (
    archive = false,
) => {
    let uri = '/projects/list';

    if (archive) {
        uri = '/projects/list/archived';
    }

    const response = useApiQueryWithSignInRedirect<ProjectsWithViewOptions>(
        [uri],
        { uri },
        {
            staleTime: MinutesToMilliseconds(5),
            zodValidator: ProjectsSchema,
        },
    );

    if (response.status === 'success') {
        response.data = transformProjects(response.data);
    }

    return response;
};

export const useAllProjectsData = (): {
    status: 'loading' | 'error' | 'success';
    data: ProjectsWithViewOptions;
} => {
    const {
        data: projectsData,
        status: projectsStatus,
    } = useProjectsData();

    const {
        data: projectsDataArchived,
        status: projectsDataStatus,
    } = useProjectsData(true);

    if (projectsStatus === 'loading' || projectsDataStatus === 'loading') {
        return {
            status: 'loading',
            data: [],
        };
    }

    if (projectsStatus === 'error' || projectsDataStatus === 'error') {
        return {
            status: 'error',
            data: [],
        };
    }

    return {
        status: 'success',
        data: [
            ...projectsData,
            ...projectsDataArchived,
        ],
    };
};

export const useAddProjectMutation = () => useApiMutation<unknown, AddProjectFormValues>(
    {
        invalidateQueryKeysOnSuccess: [
            '/projects/list',
            '/projects/list/archived',
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

export const useEditProjectMutation = (projectId: string) => {
    const queryClient = useQueryClient();

    return useApiMutation<unknown, AddProjectFormValues>(
        {
            invalidateQueryKeysOnSuccess: [
                '/projects/list',
                '/projects/list/archived',
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
                        queryKey: [['/projects/list']],
                    });

                    await queryClient.cancelQueries({
                        queryKey: [['/projects/list/archived']],
                    });

                    const previousProjects = queryClient.getQueryData(
                        [['/projects/list']],
                    ) as Projects;

                    const previousProjectsArchived = queryClient.getQueryData(
                        [['/projects/list/archived']],
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

                        queryClient.setQueryData([['/projects/list']], newProjects);
                    }

                    if (previousProjectsArchived) {
                        const newProjectsArchive = previousProjectsArchived.map(
                            projectMapper,
                        );

                        queryClient.setQueryData([['/projects/list/archived']], newProjectsArchive);
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

export const useArchiveProjectMutation = (
    projectId: string,
    isArchive: boolean,
) => {
    const queryClient = useQueryClient();

    return useApiMutation(
        {
            invalidateQueryKeysOnSuccess: [
                '/projects/list',
                '/projects/list/archived',
            ],
            prepareApiParams: () => ({
                uri: `/projects/${isArchive ? 'un-archive' : 'archive'}/${projectId}`,
                method: RequestMethod.PATCH,
            }),
            options: {
                onMutate: async () => {
                    await queryClient.cancelQueries({
                        queryKey: [['/projects/list']],
                    });

                    await queryClient.cancelQueries({
                        queryKey: [['/projects/list/archived']],
                    });

                    const previousProjects = queryClient.getQueryData(
                        [['/projects/list']],
                    ) as Projects;

                    const previousProjectsArchived = queryClient.getQueryData(
                        [['/projects/list/archived']],
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

                        queryClient.setQueryData([['/projects/list']], newProjects);
                    }

                    if (previousProjectsArchived) {
                        const newProjectsArchive = previousProjectsArchived.map(
                            projectMapper,
                        );

                        queryClient.setQueryData([['/projects/list/archived']], newProjectsArchive);
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
