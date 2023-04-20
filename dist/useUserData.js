"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var useApiQueryWithSignInRedirect_1 = __importDefault(require("./useApiQueryWithSignInRedirect"));
var UserDataSchema = zod_1.z.object({
    emailAddress: zod_1.z.string().min(1).email(),
    name: zod_1.z.string().min(1),
    isAdmin: zod_1.z.boolean(),
});
var useUserData = function () { return (0, useApiQueryWithSignInRedirect_1.default)(['user-info'], { uri: '/user-info' }, {
    staleTime: Infinity,
    zodValidator: UserDataSchema,
}); };
exports.default = useUserData;
