import React, { Dispatch, SetStateAction, useEffect } from 'react';

const ProjectsPage = (
    {
        setPageName,
    }:{
        setPageName: Dispatch<SetStateAction<string>>
    },
) => {
    useEffect(() => setPageName('Projects'), []);

    return <>Projects Page Content</>;
};

export default ProjectsPage;
