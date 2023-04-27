import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { ProjectWithViewOptions } from './Projects';
import ProjectListItemEditor from './ProjectListItemEditor';
import { useArchiveProjectMutation } from './ProjectsData';

const statuses = {
    Active: 'text-green-700 bg-green-50 ring-green-600/20',
    Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
};

function classNames (...classes) {
    return classes.filter(Boolean).join(' ');
}

const ProjectListItem = (
    {
        isArchive,
        project,
    }: {
        isArchive: boolean,
        project: ProjectWithViewOptions,
    },
) => {
    const [
        editProjectIsOpen,
        setEditProjectIsOpen,
    ] = useState<boolean>(false);

    const archiveMutation = useArchiveProjectMutation(
        project.id,
        isArchive,
    );

    return <li>
        <div className="flex items-center justify-between gap-x-6 py-5">
            <div className="min-w-0">
                <div className="flex items-start gap-x-3">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{project.title}</p>
                    <p
                        className={classNames(
                            statuses[project.status.toString()],
                            'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset',
                        )}
                    >
                        {project.status.toString()}
                    </p>
                </div>
                <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                    <p className="whitespace-nowrap">
                        {project.slug}
                    </p>
                    <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                        <circle cx={1} cy={1} r={1}/>
                    </svg>
                    <p className="truncate">Created {project.createdAtDate.toLocaleDateString()}</p>
                </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
                <Link
                    to={project.href}
                    className="block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    View project<span className="sr-only">, {project.title}</span>
                </Link>
                <Menu as="div" className="relative flex-none">
                    <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                        <span className="sr-only">Open options</span>
                        <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true"/>
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <span
                                        className={classNames(
                                            active ? 'bg-gray-50' : '',
                                            'cursor-pointer block px-3 py-1 text-sm leading-6 text-gray-900',
                                        )}
                                        onClick={() => {
                                            setEditProjectIsOpen(true);
                                        }}
                                    >
                                        Edit<span className="sr-only">, {project.title}</span>
                                    </span>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <span
                                        className={classNames(
                                            active ? 'bg-gray-50' : '',
                                            'cursor-pointer block px-3 py-1 text-sm leading-6 text-gray-900',
                                        )}
                                        onClick={() => {
                                            archiveMutation.mutate(undefined);
                                        }}
                                    >
                                        {isArchive ? 'Un-archive' : 'Archive'}<span className="sr-only">, {project.title}</span>
                                    </span>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
        {(() => {
            if (!editProjectIsOpen) {
                return null;
            }

            return <ProjectListItemEditor
                project={project}
                setEditorIsOpen={setEditProjectIsOpen}
            />;
        })()}
    </li>;
};

export default ProjectListItem;
