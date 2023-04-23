import React, { Dispatch, SetStateAction } from 'react';
import { Navigate, Route } from 'react-router-dom';
import ProjectsPage from './Projects/ProjectsPage';
import NotFoundPage from './NotFoundPage';
import AccountPage from './Account/AccountPage';
import UserAdminPage from './UserAdmin/UserAdminPage';
import RequireAdmin from './RequireAdmin';

const FrontEndCoreRoutes = (setPageName: Dispatch<SetStateAction<string>>) => <>
    <Route path="/" element={<Navigate to="/projects" />} />
    <Route path="/projects" element={<ProjectsPage setPageName={setPageName} />} />
    <Route path="/user-admin" element={<RequireAdmin setPageName={setPageName}><UserAdminPage setPageName={setPageName} /></RequireAdmin>} />
    <Route path="/account" element={<AccountPage setPageName={setPageName} />} />
    <Route path="*" element={<NotFoundPage setPageName={setPageName} />} />
</>;

export default FrontEndCoreRoutes;
