"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = exports.StatusService = exports.ApiService = void 0;
class ApiService {
    constructor() {
        this._api = process.env.API_ENDPOINT;
    }
}
exports.ApiService = ApiService;
var status_service_1 = require("./status.service");
Object.defineProperty(exports, "StatusService", { enumerable: true, get: function () { return status_service_1.StatusService; } });
var users_service_1 = require("./users.service");
Object.defineProperty(exports, "UsersService", { enumerable: true, get: function () { return users_service_1.UsersService; } });
