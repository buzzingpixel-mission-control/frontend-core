import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import ProjectsPage from './Projects/ProjectsPage';
import NotFoundPage from './NotFoundPage';
import AccountPage from './Account/AccountPage';
import UserAdminPage from './UserAdmin/UserAdminPage';
import RequireAdmin from './RequireAdmin';
import ProjectDetailsPage from './Projects/ProjectDetails/ProjectDetailsPage';
import QueueAdminPage from './QueueAdmin/QueueAdminPage';
import QueueDetailsPage from './QueueAdmin/QueueDetails/QueueDetailsPage';
import ScheduleAdminPage from './ScheduleAdmin/ScheduleAdminPage';
import ErrorLogPage from './ErrorLog/ErrorLogPage';
import ErrorLogDetailsPage from './ErrorLog/ErrorLogDetails/ErrorLogDetailsPage';

const FrontEndCoreRoutes = () => (
    <>
        <Route path="/" element={<Navigate to="/projects" />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/archived" element={<ProjectsPage isArchive />} />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        <Route path="/user-admin" element={<RequireAdmin><UserAdminPage /></RequireAdmin>} />
        <Route path="/queue-admin" element={<RequireAdmin><QueueAdminPage /></RequireAdmin>} />
        <Route path="/queue-admin/:queueName" element={<RequireAdmin><QueueDetailsPage /></RequireAdmin>} />
        <Route path="/schedule-admin" element={<RequireAdmin><ScheduleAdminPage /></RequireAdmin>} />
        <Route path="/error-logs" element={<RequireAdmin><ErrorLogPage /></RequireAdmin>} />
        <Route path="/error-logs/:id" element={<RequireAdmin><ErrorLogDetailsPage /></RequireAdmin>} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="*" element={<NotFoundPage />} />
    </>
);

export default FrontEndCoreRoutes;
