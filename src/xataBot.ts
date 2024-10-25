import {Markup, Telegraf} from "telegraf";
import {SET_STATUS_BUTTONS, STARTUP_BUTTONS} from "./constants/buttons";
import {StatusService, UsersService} from "./services";
import {grid, flat} from "./utils";
import {TEXT} from "./constants/text";
import {XataBotConstructor} from "./types";

export class XataBot extends Telegraf {
    usersService: UsersService;
    statusService: StatusService;

    startBot = () => {
        this.start(async (ctx) => {
            const chatId = ctx.chat.id;

            await this.usersService.auth(chatId)

            await ctx.reply(
                TEXT.WELCOME,
                Markup.keyboard(grid(STARTUP_BUTTONS)).resize()
            )

            await this.displayStatus(ctx)

        });

        this.observeButtons()

        this.launch()
    }

    observeButtons() {
        this.onGetStatusClick()
        this.onSetStatusClick()
        this.onSetStatusButtonsClick()
        this.onBackClick()
    }

    onGetStatusClick() {
        this.hears(STARTUP_BUTTONS.GET_STATUS, this.displayStatus);
    }

    displayStatus = async (ctx: any) => {
        const status = await this.statusService.getCurrentStatus()
        ctx.reply(TEXT.CURRENT_STATUS + status);
    }

    onSetStatusClick() {
        this.hears(STARTUP_BUTTONS.SET_STATUS, async (ctx) => {
            ctx.reply(
                TEXT.SET_STATUS,
                Markup.keyboard(grid(SET_STATUS_BUTTONS)).resize()
            )
        });
    }

    onSetStatusButtonsClick() {
        flat(SET_STATUS_BUTTONS).slice(0, -1).forEach(setStatusButton => {
            this.hears(setStatusButton, async (ctx) => {

                if(!this.usersService.users.length) {
                    await this.usersService.getUsers()
                }

                // Отправляем сообщение каждому пользователю из списка
                for (const user of this.usersService.users) {
                    try {
                        await this.statusService.setCurrentStatus(setStatusButton)
                        await this.telegram.sendMessage(
                            user.chatId,
                            "Статус изменен на: " + setStatusButton,
                            Markup.keyboard(grid(STARTUP_BUTTONS)).resize()

                        );
                    } catch (error) {
                        console.error(`Не удалось отправить сообщение пользователю ${user.chatId}:`, error);
                    }
                }
            });
        })
    }

    onBackClick() {
        this.hears(SET_STATUS_BUTTONS.BACK, (ctx) => {
            ctx.reply("Возвращаемся назад...", Markup.keyboard(grid(STARTUP_BUTTONS)).resize())
        })
    }

    async setLoading() {}

    async goBack() {}

    constructor({token, statusService, usersService}: XataBotConstructor) {
        super(token)
        this.statusService = statusService;
        this.usersService = usersService;
    }
}