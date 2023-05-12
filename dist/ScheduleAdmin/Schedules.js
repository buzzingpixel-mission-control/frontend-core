"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulesSchema = void 0;
var zod_1 = require("zod");
exports.SchedulesSchema = zod_1.z.array(zod_1.z.object({
    key: zod_1.z.string(),
    runEvery: zod_1.z.string(),
    class: zod_1.z.string(),
    method: zod_1.z.string(),
    lastRunStartAt: zod_1.z.string(),
    lastRunEndAt: zod_1.z.string(),
}));
