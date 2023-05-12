"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueuesSchema = void 0;
var zod_1 = require("zod");
exports.QueuesSchema = zod_1.z.array(zod_1.z.object({
    queue: zod_1.z.string(),
    totalItemsInQueue: zod_1.z.number(),
}));
