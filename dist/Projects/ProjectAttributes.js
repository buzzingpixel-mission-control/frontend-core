"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectAttributesSchema = exports.ProjectAttributeSchema = void 0;
var zod_1 = require("zod");
exports.ProjectAttributeSchema = zod_1.z.object({
    key: zod_1.z.string().min(1),
    value: zod_1.z.string().min(1),
});
exports.ProjectAttributesSchema = zod_1.z.array(exports.ProjectAttributeSchema);
