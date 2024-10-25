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
exports.XataBot = void 0;
const telegraf_1 = require("telegraf");
const buttons_1 = require("./constants/buttons");
const utils_1 = require("./utils");
const text_1 = require("./constants/text");
class XataBot extends telegraf_1.Telegraf {
    startBot() {
        this.start((ctx) => __awaiter(this, void 0, void 0, function* () {
            const chatId = ctx.chat.id;
            yield this.usersService.auth(chatId);
            ctx.reply(text_1.TEXT.WELCOME, telegraf_1.Markup.keyboard((0, utils_1.grid)(buttons_1.STARTUP_BUTTONS)).resize());
            this.displayStatus(ctx);
        }));
        this.observeButtons();
        this.launch();
    }
    observeButtons() {
        this.onGetStatusClick();
        this.onSetStatusClick();
        this.onSetStatusButtonsClick();
        this.onBackClick();
    }
    onGetStatusClick() {
        this.hears(buttons_1.STARTUP_BUTTONS.GET_STATUS, this.displayStatus);
    }
    displayStatus(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield this.statusService.getCurrentStatus();
            ctx.reply(text_1.TEXT.CURRENT_STATUS + status);
        });
    }
    onSetStatusClick() {
        this.hears(buttons_1.STARTUP_BUTTONS.SET_STATUS, (ctx) => __awaiter(this, void 0, void 0, function* () {
            ctx.reply(text_1.TEXT.SET_STATUS, telegraf_1.Markup.keyboard((0, utils_1.grid)(buttons_1.SET_STATUS_BUTTONS)).resize());
        }));
    }
    onSetStatusButtonsClick() {
        (0, utils_1.flat)(buttons_1.SET_STATUS_BUTTONS).slice(0, -1).forEach(setStatusButton => {
            this.hears(setStatusButton, (ctx) => __awaiter(this, void 0, void 0, function* () {
                if (!this.usersService.users.length) {
                    yield this.usersService.getUsers();
                }
                let sentMessage;
                // Отправляем сообщение каждому пользователю из списка
                for (const user of this.usersService.users) {
                    try {
                        yield this.statusService.setCurrentStatus(setStatusButton);
                        sentMessage = yield this.telegram.sendMessage(user.chatId, "Статус изменен на: " + setStatusButton);
                    }
                    catch (error) {
                        console.error(`Не удалось отправить сообщение пользователю ${user.chatId}:`, error);
                    }
                }
                this.goBack(ctx, sentMessage);
            }));
        });
    }
    onBackClick() {
        this.hears(buttons_1.SET_STATUS_BUTTONS.BACK, this.goBack);
    }
    setLoading(isLoading, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            if (isLoading) {
                this.loadingTarget = yield ctx.reply('Загрузка');
            }
            else {
                try {
                    ctx.telegram.deleteMessage(ctx.chat.id, this.loadingTarget.message_id);
                }
                catch (e) {
                    console.log(e);
                }
            }
        });
    }
    goBack(ctx, target) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.telegram.editMessageReplyMarkup(telegraf_1.Markup.keyboard((0, utils_1.grid)(buttons_1.STARTUP_BUTTONS))
                .resize(), {
                chat_id: ctx.chat.id,
                message_id: target.message_id
            });
        });
    }
    constructor({ token, statusService, usersService }) {
        super(token);
        this.statusService = statusService;
        this.usersService = usersService;
    }
}
exports.XataBot = XataBot;
