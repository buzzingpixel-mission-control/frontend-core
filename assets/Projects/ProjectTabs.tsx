import React, { MouseEventHandler } from 'react';
import {
    ArchiveBoxIcon,
    FolderIcon,
    PlusIcon,
} from '@heroicons/react/20/solid';
import PageTabs from '../PageTabs/PageTabs';
import { Tab } from '../PageTabs/Tab';

const tabs = [
    {
        name: 'Active Projects',
        href: '/projects',
        icon: FolderIcon,
    },
    {
        name: 'Archived Projects',
        href: '/projects/archived',
        icon: ArchiveBoxIcon,
    },
] as Array<Tab>;

const ProjectTabs = (
    {
        activeHref,
        addProjectOnClick,
    }: {
        activeHref?: string;
        addProjectOnClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    },
) => {
    activeHref = activeHref || '/projects';

    return <PageTabs
        tabs={tabs.map((tab) => ({
            ...tab,
            current: tab.href === activeHref,
        }))}
        rightHandButtons={[{
            key: 'add-new-project',
            text: <>
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Add New Project
            </>,
            onClick: addProjectOnClick,
        }]}
    />;
};

export default ProjectTabs;
