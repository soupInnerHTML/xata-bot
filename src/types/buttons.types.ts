interface InlineButton {
    text: string;
    callbackData: string;
}

export type InlineButtons<InlineButtonAction extends string> = Record<InlineButtonAction, InlineButton>;

export enum INLINE_STARTUP_BUTTONS_ACTION {
    GET_STATUS = "GET_STATUS",
    SET_STATUS = "SET_STATUS",
}

export enum INLINE_SET_STATUS_BUTTONS_ACTION {
    CALM = "CALM",
    LEARN = "LEARN",
    SILENCE = "SILENCE",
    VLAD = "VLAD",
    GUESTS = "GUESTS",
    OWNER = "OWNER",
    TEA_PARTY = "TEA_PARTY",
    BACK = "BACK",
}