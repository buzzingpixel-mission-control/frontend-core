import React, { Dispatch, SetStateAction } from 'react';
import { Navigate, Route } from 'react-router-dom';
import ProjectsPage from './Projects/ProjectsPage';
import NotFoundPage from './NotFoundPage';
import AccountPage from './Account/AccountPage';
import UserAdminPage from './UserAdmin/UserAdminPage';
import RequireAdmin from './RequireAdmin';

const FrontEndCoreRoutes = () => <>
    <Route path="/" element={<Navigate to="/projects" />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/user-admin" element={<RequireAdmin><UserAdminPage /></RequireAdmin>} />
    <Route path="/account" element={<AccountPage />} />
    <Route path="*" element={<NotFoundPage />} />
</>;

export default FrontEndCoreRoutes;
