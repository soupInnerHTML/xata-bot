"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INLINE_STARTUP_BUTTONS = exports.INLINE_SET_STATUS_BUTTONS = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _types = require("../types");
var INLINE_STARTUP_BUTTONS = exports.INLINE_STARTUP_BUTTONS = (0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, _types.INLINE_STARTUP_BUTTONS_ACTION.GET_STATUS, {
  text: "Узнать статус 🤔",
  callbackData: _types.INLINE_STARTUP_BUTTONS_ACTION.GET_STATUS
}), _types.INLINE_STARTUP_BUTTONS_ACTION.SET_STATUS, {
  text: "Установить статус 🤙",
  callbackData: _types.INLINE_STARTUP_BUTTONS_ACTION.SET_STATUS
});
var INLINE_SET_STATUS_BUTTONS = exports.INLINE_SET_STATUS_BUTTONS = (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, _types.INLINE_SET_STATUS_BUTTONS_ACTION.CALM, {
  text: "Все спокойно 🙂",
  callbackData: _types.INLINE_SET_STATUS_BUTTONS_ACTION.CALM
}), _types.INLINE_SET_STATUS_BUTTONS_ACTION.SILENCE, {
  text: "Тихий час 💤",
  callbackData: _types.INLINE_SET_STATUS_BUTTONS_ACTION.SILENCE
}), _types.INLINE_SET_STATUS_BUTTONS_ACTION.VLAD, {
  text: "Влад моросит 🤪",
  callbackData: _types.INLINE_SET_STATUS_BUTTONS_ACTION.VLAD
}), _types.INLINE_SET_STATUS_BUTTONS_ACTION.GUESTS, {
  text: "Гости 🥳",
  callbackData: _types.INLINE_SET_STATUS_BUTTONS_ACTION.GUESTS
}), _types.INLINE_SET_STATUS_BUTTONS_ACTION.OWNER, {
  text: "Хозяин придет 🤫",
  callbackData: _types.INLINE_SET_STATUS_BUTTONS_ACTION.OWNER
}), _types.INLINE_SET_STATUS_BUTTONS_ACTION.TEA_PARTY, {
  text: "Чаепитие ☕",
  callbackData: _types.INLINE_SET_STATUS_BUTTONS_ACTION.TEA_PARTY
}), _types.INLINE_SET_STATUS_BUTTONS_ACTION.BACK, {
  text: "Назад ◀️",
  callbackData: _types.INLINE_SET_STATUS_BUTTONS_ACTION.BACK
});