"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./types/env.types");
const dotenv_1 = __importDefault(require("dotenv"));
const services_1 = require("./services");
const xataBot_1 = require("./xataBot");
dotenv_1.default.config();
const statusService = new services_1.StatusService();
const usersService = new services_1.UsersService();
const xataBot = new xataBot_1.XataBot({
    token: process.env.BOT_TOKEN,
    usersService,
    statusService
});
xataBot.startBot();
