"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformProjects = exports.transformProject = exports.ProjectViewOptionsStatus = exports.ProjectsSchema = exports.ProjectSchema = void 0;
var zod_1 = require("zod");
exports.ProjectSchema = zod_1.z.object({
    id: zod_1.z.string().min(1),
    isActive: zod_1.z.boolean(),
    title: zod_1.z.string().min(1),
    slug: zod_1.z.string().min(1),
    description: zod_1.z.string(),
    createdAt: zod_1.z.string(),
});
exports.ProjectsSchema = zod_1.z.array(exports.ProjectSchema);
var ProjectViewOptionsStatus;
(function (ProjectViewOptionsStatus) {
    ProjectViewOptionsStatus["Active"] = "Active";
    ProjectViewOptionsStatus["Archived"] = "Archived";
})(ProjectViewOptionsStatus = exports.ProjectViewOptionsStatus || (exports.ProjectViewOptionsStatus = {}));
var transformProject = function (project) { return (__assign(__assign({}, project), { href: "/projects/".concat(project.slug), status: project.isActive
        ? ProjectViewOptionsStatus.Active
        : ProjectViewOptionsStatus.Archived, createdAtDate: new Date(project.createdAt) })); };
exports.transformProject = transformProject;
var transformProjects = function (projects) { return projects.map(function (project) { return (0, exports.transformProject)(project); }); };
exports.transformProjects = transformProjects;
