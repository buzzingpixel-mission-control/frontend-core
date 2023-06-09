"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RequestMethod_1 = __importDefault(require("./Api/RequestMethod"));
var EncodeQueryParamsFromObject_1 = __importDefault(require("./EncodeQueryParamsFromObject"));
var ApiError_1 = __importDefault(require("./Api/ApiError"));
var MakeApiRequest = function (_a) {
    var uri = _a.uri, queryParams = _a.queryParams, method = _a.method, payload = _a.payload;
    return __awaiter(void 0, void 0, void 0, function () {
        var options, urlStr, url, queryString, response, data, message;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    queryParams = queryParams || {};
                    method = (method || RequestMethod_1.default.GET);
                    options = {
                        redirect: 'manual',
                        method: String(method),
                    };
                    if (payload !== undefined) {
                        options.body = JSON.stringify(payload);
                        options.headers = new Headers({
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                        });
                    }
                    else {
                        options.headers = new Headers({
                            Accept: 'application/json',
                        });
                    }
                    urlStr = "".concat(window.location.protocol, "//").concat(window.location.host);
                    if (window.location.port) {
                        urlStr += ":".concat(window.location.port);
                    }
                    url = "".concat(urlStr, "/api/request").concat(uri);
                    queryString = (0, EncodeQueryParamsFromObject_1.default)(queryParams);
                    if (queryString) {
                        url += "?".concat(queryString);
                    }
                    return [4 /*yield*/, fetch(String(url), options)];
                case 1:
                    response = _c.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _c.sent();
                    if (response.ok) {
                        return [2 /*return*/, data];
                    }
                    if (data.message) {
                        message = data.message;
                    }
                    else if ((_b = data.error) === null || _b === void 0 ? void 0 : _b.message) {
                        message = data.error.message;
                    }
                    return [2 /*return*/, Promise.reject(new ApiError_1.default(data, response.status, response.statusText, message))];
            }
        });
    });
};
exports.default = MakeApiRequest;
