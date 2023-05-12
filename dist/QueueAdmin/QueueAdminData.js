"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQueueAdminData = void 0;
var useApiQueryWithSignInRedirect_1 = __importDefault(require("../Api/useApiQueryWithSignInRedirect"));
var Queues_1 = require("./Queues");
// eslint-disable-next-line import/prefer-default-export
var useQueueAdminData = function () {
    var uri = '/queue/list';
    return (0, useApiQueryWithSignInRedirect_1.default)([uri], { uri: uri }, {
        staleTime: Infinity,
        zodValidator: Queues_1.QueuesSchema,
        refetchInterval: 1000, // Refetch every second
    });
};
exports.useQueueAdminData = useQueueAdminData;
