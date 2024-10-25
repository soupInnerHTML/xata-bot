import {
    INLINE_SET_STATUS_BUTTONS_ACTION,
    INLINE_STARTUP_BUTTONS_ACTION,
    InlineButtons
} from "../types";


export const INLINE_STARTUP_BUTTONS: InlineButtons<INLINE_STARTUP_BUTTONS_ACTION> = {
    [INLINE_STARTUP_BUTTONS_ACTION.GET_STATUS]: {
        text: "Узнать статус 🤔",
        callbackData: INLINE_STARTUP_BUTTONS_ACTION.GET_STATUS,
    },
    [INLINE_STARTUP_BUTTONS_ACTION.SET_STATUS]: {
        text: "Установить статус 🤙",
        callbackData: INLINE_STARTUP_BUTTONS_ACTION.SET_STATUS,
    },
};

export const INLINE_SET_STATUS_BUTTONS: InlineButtons<INLINE_SET_STATUS_BUTTONS_ACTION> = {
    [INLINE_SET_STATUS_BUTTONS_ACTION.CALM]: {
        text: "Все спокойно 🙂",
        callbackData: INLINE_SET_STATUS_BUTTONS_ACTION.CALM,
    },
    [INLINE_SET_STATUS_BUTTONS_ACTION.LEARN]: {
        text: "Андрей - Консультации / Уроки 🎓",
        callbackData: INLINE_SET_STATUS_BUTTONS_ACTION.LEARN,
    },
    [INLINE_SET_STATUS_BUTTONS_ACTION.SILENCE]: {
        text: "Тихий час 💤",
        callbackData: INLINE_SET_STATUS_BUTTONS_ACTION.SILENCE,
    },
    [INLINE_SET_STATUS_BUTTONS_ACTION.VLAD]: {
        text: "Влад моросит 🤪",
        callbackData: INLINE_SET_STATUS_BUTTONS_ACTION.VLAD,
    },
    [INLINE_SET_STATUS_BUTTONS_ACTION.GUESTS]: {
        text: "Гости 🥳",
        callbackData: INLINE_SET_STATUS_BUTTONS_ACTION.GUESTS,
    },
    [INLINE_SET_STATUS_BUTTONS_ACTION.OWNER]: {
        text: "Хозяин придет 🤫",
        callbackData: INLINE_SET_STATUS_BUTTONS_ACTION.OWNER,
    },
    [INLINE_SET_STATUS_BUTTONS_ACTION.TEA_PARTY]: {
        text: "Чаепитие ☕",
        callbackData: INLINE_SET_STATUS_BUTTONS_ACTION.TEA_PARTY,
    },
    [INLINE_SET_STATUS_BUTTONS_ACTION.BACK]: {
        text: "Назад ◀️",
        callbackData: INLINE_SET_STATUS_BUTTONS_ACTION.BACK,
    },
};
