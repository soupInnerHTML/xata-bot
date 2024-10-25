"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INLINE_STARTUP_BUTTONS = exports.INLINE_SET_STATUS_BUTTONS = void 0;
var _types = require("../types");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var INLINE_STARTUP_BUTTONS = exports.INLINE_STARTUP_BUTTONS = _defineProperty(_defineProperty({}, _types.INLINE_STARTUP_BUTTONS_ACTION.GET_STATUS, {
  text: "Узнать статус 🤔",
  callbackData: _types.INLINE_STARTUP_BUTTONS_ACTION.GET_STATUS
}), _types.INLINE_STARTUP_BUTTONS_ACTION.SET_STATUS, {
  text: "Установить статус 🤙",
  callbackData: _types.INLINE_STARTUP_BUTTONS_ACTION.SET_STATUS
});
var INLINE_SET_STATUS_BUTTONS = exports.INLINE_SET_STATUS_BUTTONS = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, _types.INLINE_SET_STATUS_BUTTONS_ACTION.CALM, {
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