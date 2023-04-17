import React from 'react';
import { Route } from 'react-router-dom';
import ProjectsPage from './Projects/ProjectsPage';

const FrontEndCoreRoutes = () => <>
    <Route path="/projects" element={<ProjectsPage />}/>
</>;

export default FrontEndCoreRoutes;
