"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSchema = void 0;
var zod_1 = require("zod");
var User_1 = require("./User");
exports.UsersSchema = zod_1.z.array(User_1.UserSchema);
