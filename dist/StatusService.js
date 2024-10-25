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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusService = void 0;
class StatusService {
    getCurrentStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield fetch(this._api + "/status");
            const statusId = yield data.json();
            const aviableStatuses = yield this.getStatuses();
            const currentStatus = aviableStatuses.find(status => status.id === statusId[0].current);
            return currentStatus;
        });
    }
    getStatuses() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield fetch(this._api + "/statuses");
            const statuses = yield data.json();
            return statuses;
        });
    }
    constructor(api) {
        this._api = api;
    }
}
exports.StatusService = StatusService;
