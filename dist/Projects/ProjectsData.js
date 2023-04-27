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
exports.useArchiveProjectMutation = exports.useEditProjectMutation = exports.useAddProjectMutation = exports.useProjectsData = void 0;
var react_query_1 = require("@tanstack/react-query");
var useApiQueryWithSignInRedirect_1 = __importDefault(require("../Api/useApiQueryWithSignInRedirect"));
var MinutesToMilliseconds_1 = __importDefault(require("../MinutesToMilliseconds"));
var Projects_1 = require("./Projects");
var useApiMutation_1 = __importDefault(require("../Api/useApiMutation"));
var RequestMethod_1 = __importDefault(require("../Api/RequestMethod"));
var useProjectsData = function (archive) {
    if (archive === void 0) { archive = false; }
    var queryKey = ['projects-list'];
    var uri = '/projects/list';
    if (archive) {
        queryKey = ['projects-list-archived'];
        uri = '/projects/list/archived';
    }
    return (0, useApiQueryWithSignInRedirect_1.default)(queryKey, { uri: uri }, {
        staleTime: (0, MinutesToMilliseconds_1.default)(5),
        zodValidator: Projects_1.ProjectsSchema,
    });
};
exports.useProjectsData = useProjectsData;
var useAddProjectMutation = function () { return (0, useApiMutation_1.default)({
    invalidateQueryKeysOnSuccess: [
        'projects-list',
        'projects-list-archived',
    ],
    prepareApiParams: function (data) { return ({
        uri: '/projects/add',
        payload: data,
        method: RequestMethod_1.default.POST,
    }); },
}); };
exports.useAddProjectMutation = useAddProjectMutation;
var useEditProjectMutation = function (projectId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, useApiMutation_1.default)({
        invalidateQueryKeysOnSuccess: [
            'projects-list',
            'projects-list-archived',
        ],
        prepareApiParams: function (data) { return ({
            uri: "/projects/edit/".concat(projectId),
            payload: data,
            method: RequestMethod_1.default.PATCH,
        }); },
        options: {
            onMutate: function (data) { return __awaiter(void 0, void 0, void 0, function () {
                var formValues, previousProjects, previousProjectsArchived, projectMapper, newProjects, newProjectsArchive;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            formValues = data;
                            return [4 /*yield*/, queryClient.cancelQueries({
                                    queryKey: [['projects-list']],
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, queryClient.cancelQueries({
                                    queryKey: [['projects-list-archived']],
                                })];
                        case 2:
                            _a.sent();
                            previousProjects = queryClient.getQueryData([['projects-list']]);
                            previousProjectsArchived = queryClient.getQueryData([['projects-list-archived']]);
                            projectMapper = function (project) {
                                if (project.id === projectId) {
                                    project.title = formValues.title;
                                    project.slug = formValues.slug;
                                    project.description = formValues.description;
                                }
                                return project;
                            };
                            if (previousProjects) {
                                newProjects = previousProjects.map(projectMapper);
                                queryClient.setQueryData([['projects-list']], newProjects);
                            }
                            if (previousProjectsArchived) {
                                newProjectsArchive = previousProjectsArchived.map(projectMapper);
                                queryClient.setQueryData([['projects-list-archived']], newProjectsArchive);
                            }
                            return [2 /*return*/, {
                                    previousProjects: previousProjects,
                                    previousProjectsArchived: previousProjectsArchived,
                                }];
                    }
                });
            }); },
        },
    });
};
exports.useEditProjectMutation = useEditProjectMutation;
var useArchiveProjectMutation = function (projectId, isArchive) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, useApiMutation_1.default)({
        invalidateQueryKeysOnSuccess: [
            'projects-list',
            'projects-list-archived',
        ],
        prepareApiParams: function () { return ({
            uri: "/projects/".concat(isArchive ? 'un-archive' : 'archive', "/").concat(projectId),
            method: RequestMethod_1.default.PATCH,
        }); },
        options: {
            onMutate: function () { return __awaiter(void 0, void 0, void 0, function () {
                var previousProjects, previousProjectsArchived, projectMapper, newProjects, newProjectsArchive;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, queryClient.cancelQueries({
                                queryKey: [['projects-list']],
                            })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, queryClient.cancelQueries({
                                    queryKey: [['projects-list-archived']],
                                })];
                        case 2:
                            _a.sent();
                            previousProjects = queryClient.getQueryData([['projects-list']]);
                            previousProjectsArchived = queryClient.getQueryData([['projects-list-archived']]);
                            projectMapper = function (project) {
                                if (project.id === projectId) {
                                    project.isActive = isArchive;
                                }
                                return project;
                            };
                            if (previousProjects) {
                                newProjects = previousProjects.map(projectMapper);
                                queryClient.setQueryData([['projects-list']], newProjects);
                            }
                            if (previousProjectsArchived) {
                                newProjectsArchive = previousProjectsArchived.map(projectMapper);
                                queryClient.setQueryData([['projects-list-archived']], newProjectsArchive);
                            }
                            return [2 /*return*/, {
                                    previousProjects: previousProjects,
                                    previousProjectsArchived: previousProjectsArchived,
                                }];
                    }
                });
            }); },
        },
    });
};
exports.useArchiveProjectMutation = useArchiveProjectMutation;
