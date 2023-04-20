import React, { Dispatch, SetStateAction } from 'react';
import { Navigate, Route } from 'react-router-dom';
import ProjectsPage from './Projects/ProjectsPage';
import NotFoundPage from './NotFound/NotFoundPage';

const FrontEndCoreRoutes = (setPageName: Dispatch<SetStateAction<string>>) => <>
    <Route path="/" element={<Navigate to="/projects" />} />
    <Route path="/projects" element={<ProjectsPage setPageName={setPageName} />} />
    <Route path="*" element={<NotFoundPage setPageName={setPageName} />} />
</>;

export default FrontEndCoreRoutes;
