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
exports.UsersService = void 0;
const index_1 = require("./index");
class UsersService extends index_1.ApiService {
    constructor() {
        super(...arguments);
        this.users = [];
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield fetch(this._api + "/users");
            const data = yield users.json();
            this.users = data;
            return data;
        });
    }
    auth(chatId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.users.length) {
                yield this.getUsers();
            }
            if (!this.users.find(user => user.chatId === chatId)) {
                fetch(this._api + "/users", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ chatId }),
                });
            }
        });
    }
}
exports.UsersService = UsersService;
