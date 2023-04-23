"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
var zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    id: zod_1.z.string().min(1),
    isAdmin: zod_1.z.boolean(),
    emailAddress: zod_1.z.string().min(1).email(),
    name: zod_1.z.string(),
    createdAt: zod_1.z.string(),
    isActive: zod_1.z.boolean(),
    timezone: zod_1.z.string(),
});
