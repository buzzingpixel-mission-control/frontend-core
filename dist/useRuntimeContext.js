"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var RuntimeContext_1 = __importDefault(require("./RuntimeContext"));
var useRuntimeContext = function () { return (0, react_1.useContext)(RuntimeContext_1.default); };
exports.default = useRuntimeContext;
