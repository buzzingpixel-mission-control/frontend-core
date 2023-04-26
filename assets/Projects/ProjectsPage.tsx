import React, { useState, Fragment } from 'react';
import {
    PlusIcon,
    ClipboardDocumentListIcon,
    EllipsisVerticalIcon,
} from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import setPageName from '../PageName/setPageName';
import { useProjectsData } from './ProjectsData';
import PartialPageLoading from '../PartialPageLoading';
import NoResultsAddItem from '../NoResultsAddItem';
import createPortal from '../createPortal';
import AddProjectOverlay from './AddProjectOverlay';
import ProjectTabs from './ProjectTabs';
import { transformProjects } from './Projects';

const statuses = {
    Active: 'text-green-700 bg-green-50 ring-green-600/20',
    Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
};

function classNames (...classes) {
    return classes.filter(Boolean).join(' ');
}

const ProjectsPage = () => {
    setPageName('Projects');

    const [
        filterText,
        setFilterText,
    ] = useState<string>('');

    const [
        addProjectIsOpen,
        setAddProjectIsOpen,
    ] = useState<boolean>(false);

    const {
        status,
        data,
    } = useProjectsData();

    if (status === 'loading') {
        return <>
            <ProjectTabs />
            <PartialPageLoading />
        </>;
    }

    const portals = () => {
        if (addProjectIsOpen) {
            return createPortal(<AddProjectOverlay setIsOpen={setAddProjectIsOpen} />);
        }

        return null;
    };

    let projects = transformProjects(data);

    if (projects.length < 1) {
        return <>
            {portals()}
            <ProjectTabs />
            <NoResultsAddItem
                icon={<ClipboardDocumentListIcon />}
                headline="No projects"
                content="Would you like to create a project?"
                actionText="Add New Project"
                actionUsesPlusIcon={true}
                actionButtonOnClick={() => { setAddProjectIsOpen(true); }}
            />
        </>;
    }

    const FilterInput = <div className="mb-4">
        <input
            type="text"
            name="filter"
            id="filter"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
            placeholder="Filter results"
            value={filterText}
            onChange={(e) => {
                setFilterText(e.target.value);
            }}
        />
    </div>;

    if (filterText !== '') {
        projects = projects.filter((project) => project.title.toLowerCase().indexOf(filterText.toLowerCase()) > -1
            || project.slug.toLowerCase().indexOf(filterText.toLowerCase()) > -1
            || project.description.toLowerCase().indexOf(filterText.toLowerCase()) > -1);
    }

    return <>
        {portals()}
        <ProjectTabs />
        <div>
            <div className="flex items-center mb-4">
                <div className="flex-auto"></div>
                <div className="mt-4 sm:mt-0 sm:ml-16">
                    <button
                        type="button"
                        className="inline-flex items-center block rounded-md bg-cyan-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                        onClick={() => { setAddProjectIsOpen(true); }}
                    >
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        Add New Project
                    </button>
                </div>
            </div>
            {FilterInput}
            {(() => {
                if (projects.length < 1) {
                    return <NoResultsAddItem
                        icon={<ClipboardDocumentListIcon />}
                        headline="No projects match your filters"
                    />;
                }

                return <div className="bg-white rounded-xl px-4">
                    <ul role="list" className="divide-y divide-gray-100">
                        {projects.map((project) => (
                            <li key={project.id} className="flex items-center justify-between gap-x-6 py-5">
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
                                                        >
                                                        Archive<span className="sr-only">, {project.title}</span>
                                                    </span>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>;
            })()}
        </div>
    </>;
};

export default ProjectsPage;
