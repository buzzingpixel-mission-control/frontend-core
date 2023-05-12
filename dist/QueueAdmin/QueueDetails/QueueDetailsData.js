"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQueueDetailsData = void 0;
var useApiQueryWithSignInRedirect_1 = __importDefault(require("../../Api/useApiQueryWithSignInRedirect"));
var QueueDetails_1 = require("./QueueDetails");
// eslint-disable-next-line import/prefer-default-export
var useQueueDetailsData = function (queueName) {
    var uri = "/queue/".concat(queueName);
    return (0, useApiQueryWithSignInRedirect_1.default)([uri], { uri: uri }, {
        staleTime: Infinity,
        zodValidator: QueueDetails_1.QueueDetailsSchema,
        refetchInterval: 5000, // Refetch every 5 seconds
    });
};
exports.useQueueDetailsData = useQueueDetailsData;
