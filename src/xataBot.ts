import {Markup, Telegraf, Context} from "telegraf";
import { Message } from 'telegraf/types';
import {
    INLINE_SET_STATUS_BUTTONS,
    INLINE_STARTUP_BUTTONS,
} from "./constants/buttons";
import {StatusService, UsersService} from "./services";
import {TEXT} from "./constants/text";
import {INLINE_SET_STATUS_BUTTONS_ACTION, INLINE_STARTUP_BUTTONS_ACTION, XataBotConstructor} from "./types";
import {last, omit, values} from "lodash";

export class XataBot extends Telegraf {
    usersService: UsersService;
    statusService: StatusService;
    messageStack: Message.TextMessage[] = [];

    startBot = () => {
        this.start(async (ctx) => {
            const chatId = ctx.chat.id;
            await this.usersService.auth(chatId)
            await ctx.reply(TEXT.WELCOME)
            await this.displayStatusMessage(ctx)
            await this.displayStartupMessage(ctx)

        });

        this.observeButtons()

        this.launch()
    }

    onGetStatusClick() {
        this.action(INLINE_STARTUP_BUTTONS_ACTION.GET_STATUS, async (ctx) => {
            try {
                await this.clearMessageStack(ctx)
                await this.displayStatusMessage(ctx,
                    Markup.inlineKeyboard([
                        Markup.button.callback(
                            INLINE_STARTUP_BUTTONS.SET_STATUS.text,
                            INLINE_STARTUP_BUTTONS.SET_STATUS.callbackData
                        )
                    ])
                )
            }
            catch (e) {
                console.log(e)
                await this.displayStatusMessage(ctx,
                    Markup.inlineKeyboard([
                        Markup.button.callback(
                            INLINE_STARTUP_BUTTONS.SET_STATUS.text,
                            INLINE_STARTUP_BUTTONS.SET_STATUS.callbackData
                        )
                    ])
                )
            }
        });
    }

    onSetStatusClick() {
        this.action(INLINE_STARTUP_BUTTONS_ACTION.SET_STATUS, async (ctx) => {
            const target = await ctx.reply(
                TEXT.SET_STATUS,
                Markup.inlineKeyboard(values(INLINE_SET_STATUS_BUTTONS).map((btn) =>
                    [Markup.button.callback(btn.text, btn.callbackData)])
                )
            )

            const lastMessage = last(this.messageStack)

            this.messageStack.push(target)

            if(ctx.chat && lastMessage) {
                if(lastMessage.text === INLINE_STARTUP_BUTTONS_ACTION.GET_STATUS) {
                    await ctx.telegram.editMessageReplyMarkup(
                        ctx.chat.id,
                        lastMessage.message_id,
                        undefined,
                        undefined
                    )
                }
                else {
                    await ctx.telegram.deleteMessage(ctx.chat.id, lastMessage.message_id)
                }
            }
        });
    }

    onSetStatusButtonsClick() {
        values(omit(INLINE_SET_STATUS_BUTTONS, "BACK")).forEach(setStatusButton => {
            this.action(setStatusButton.callbackData, async (ctx) => {

                if(!this.usersService.users.length) {
                    await this.usersService.getUsers()
                }

                // Отправляем сообщение каждому пользователю из списка
                for (const user of this.usersService.users) {
                    try {
                        await this.statusService.setCurrentStatus(setStatusButton.text)
                        await this.telegram.sendMessage(
                            user.chatId,
                            `<b>❗❗ВНИМАНИЕ. Статус изменен на: <i>${setStatusButton.text}</i>❗❗</b>`,
                            {parse_mode: 'HTML'}
                        );
                        await this.clearMessageStack(ctx)
                        await this.displayStartupMessage(ctx)
                    } catch (error) {
                        console.error(`Не удалось отправить сообщение пользователю ${user.chatId}:`, error);
                        await this.displayStartupMessage(ctx)
                    }
                }
            });
        })
    }

    onBackClick() {
        this.action(INLINE_SET_STATUS_BUTTONS_ACTION.BACK, async (ctx) => {
            try {
                await this.clearMessageStack(ctx)
                await this.displayStartupMessage(ctx)
            }
            catch (e) {
                console.log(e)
                await this.displayStartupMessage(ctx)
            }
        })
    }

    async displayStartupMessage(ctx: Context) {
        await this.stacked(ctx.reply(
            TEXT.STARTUP_MESSAGE,
            Markup.inlineKeyboard(
                values(INLINE_STARTUP_BUTTONS).map(btn => {
                    return [Markup.button.callback(btn.text, btn.callbackData)]
                })
            )
        ))
    }

    displayStatusMessage = async (ctx: Context, reply?: any) => {
        const status = await this.statusService.getCurrentStatus()
        const target = await ctx.reply(TEXT.CURRENT_STATUS + status, reply);
        this.messageStack.push(target)
    }

    async clearMessageStack(ctx: Context) {
        if(this.messageStack.length && ctx.chat) {

            let tasks = this.messageStack.map(message => ctx.telegram.deleteMessage(ctx.chat!.id, message.message_id))

            await Promise.all(tasks)
            this.messageStack = []
        }
    }

    observeButtons() {
        this.onGetStatusClick()
        this.onSetStatusClick()
        this.onSetStatusButtonsClick()
        this.onBackClick()
    }

    async stacked(message: Promise<Message.TextMessage>) {
        const target = await message
        this.messageStack.push(target)
    }

    constructor({token, statusService, usersService}: XataBotConstructor) {
        super(token)
        this.statusService = statusService;
        this.usersService = usersService;
    }
}