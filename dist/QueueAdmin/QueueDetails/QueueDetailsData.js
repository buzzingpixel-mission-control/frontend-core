"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCancelAllMutation = exports.useCancelItemMutation = exports.useQueueDetailsData = void 0;
var useApiQueryWithSignInRedirect_1 = __importDefault(require("../../Api/useApiQueryWithSignInRedirect"));
var QueueDetails_1 = require("./QueueDetails");
var useApiMutation_1 = __importDefault(require("../../Api/useApiMutation"));
var RequestMethod_1 = __importDefault(require("../../Api/RequestMethod"));
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
var useCancelItemMutation = function (queueName) { return (0, useApiMutation_1.default)({
    invalidateQueryKeysOnSuccess: ["/queue/".concat(queueName)],
    prepareApiParams: function (key) { return ({
        uri: "/queue/dequeue/".concat(key),
        method: RequestMethod_1.default.DELETE,
    }); },
}); };
exports.useCancelItemMutation = useCancelItemMutation;
var useCancelAllMutation = function (queueName) { return (0, useApiMutation_1.default)({
    invalidateQueryKeysOnSuccess: ["/queue/".concat(queueName)],
    prepareApiParams: function () { return ({
        uri: "/queue/dequeue/all/".concat(queueName),
        method: RequestMethod_1.default.DELETE,
    }); },
}); };
exports.useCancelAllMutation = useCancelAllMutation;
