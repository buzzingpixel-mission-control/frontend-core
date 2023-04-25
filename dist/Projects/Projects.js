"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsSchema = exports.ProjectSchema = void 0;
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
