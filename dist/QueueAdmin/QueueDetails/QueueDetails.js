"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueDetailsSchema = void 0;
var zod_1 = require("zod");
exports.QueueDetailsSchema = zod_1.z.object({
    queue: zod_1.z.string(),
    totalItemsInQueue: zod_1.z.number(),
    items: zod_1.z.array(zod_1.z.object({
        key: zod_1.z.string(),
        handle: zod_1.z.string(),
        name: zod_1.z.string(),
        jobs: zod_1.z.array(zod_1.z.object({
            class: zod_1.z.string(),
            method: zod_1.z.string(),
            context: zod_1.z.record(zod_1.z.any()).or(zod_1.z.array(zod_1.z.any())),
        })),
    })),
});
