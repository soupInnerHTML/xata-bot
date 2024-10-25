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
const index_1 = require("./index");
class StatusService extends index_1.ApiService {
    getCurrentStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield fetch(this._api + "/status");
            const status = yield data.json();
            return status[0].title;
        });
    }
    setCurrentStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fetch(this._api + "/status/1", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: status }),
            });
        });
    }
}
exports.StatusService = StatusService;
