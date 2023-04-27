import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import ProjectsPage from './Projects/ProjectsPage';
import NotFoundPage from './NotFoundPage';
import AccountPage from './Account/AccountPage';
import UserAdminPage from './UserAdmin/UserAdminPage';
import RequireAdmin from './RequireAdmin';
import ProjectDetailsPage from './Projects/ProjectDetails/ProjectDetailsPage';

const FrontEndCoreRoutes = () => <>
    <Route path="/" element={<Navigate to="/projects" />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/projects/archived" element={<ProjectsPage isArchive={true} />} />
    <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
    <Route path="/user-admin" element={<RequireAdmin><UserAdminPage /></RequireAdmin>} />
    <Route path="/account" element={<AccountPage />} />
    <Route path="*" element={<NotFoundPage />} />
</>;

export default FrontEndCoreRoutes;
