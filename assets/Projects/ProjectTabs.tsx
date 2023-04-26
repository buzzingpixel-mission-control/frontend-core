import React from 'react';
import {
    ArchiveBoxIcon,
    FolderIcon,
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
    }: {
        activeHref?: string;
    },
) => {
    activeHref = activeHref || '/projects';

    return <PageTabs tabs={tabs.map((tab) => ({
        ...tab,
        current: tab.href === activeHref,
    }))} />;
};

export default ProjectTabs;
