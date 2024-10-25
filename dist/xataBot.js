"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XataBot = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _values2 = _interopRequireDefault(require("lodash/values"));
var _omit2 = _interopRequireDefault(require("lodash/omit"));
var _last2 = _interopRequireDefault(require("lodash/last"));
var _telegraf = require("telegraf");
var _buttons = require("./constants/buttons");
var _text = require("./constants/text");
var _types = require("./types");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var XataBot = exports.XataBot = /*#__PURE__*/function (_Telegraf) {
  function XataBot(_ref) {
    var _this;
    var token = _ref.token,
      statusService = _ref.statusService,
      usersService = _ref.usersService;
    (0, _classCallCheck2["default"])(this, XataBot);
    _this = _callSuper(this, XataBot, [token]);
    (0, _defineProperty2["default"])(_this, "usersService", void 0);
    (0, _defineProperty2["default"])(_this, "statusService", void 0);
    (0, _defineProperty2["default"])(_this, "messageStack", []);
    (0, _defineProperty2["default"])(_this, "startBot", function () {
      _this.start(/*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
          var chatId;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                chatId = ctx.chat.id;
                _context.next = 3;
                return _this.usersService.auth(chatId);
              case 3:
                _context.next = 5;
                return ctx.reply(_text.TEXT.WELCOME);
              case 5:
                _context.next = 7;
                return _this.displayStatusMessage(ctx);
              case 7:
                _context.next = 9;
                return _this.displayStartupMessage(ctx);
              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
      _this.observeButtons();
      _this.launch();
    });
    (0, _defineProperty2["default"])(_this, "displayStatusMessage", /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx, reply) {
        var status, target;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.statusService.getCurrentStatus();
            case 2:
              status = _context2.sent;
              _context2.next = 5;
              return ctx.reply(_text.TEXT.CURRENT_STATUS + status, reply);
            case 5:
              target = _context2.sent;
              _this.messageStack.push(target);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }());
    _this.statusService = statusService;
    _this.usersService = usersService;
    return _this;
  }
  (0, _inherits2["default"])(XataBot, _Telegraf);
  return (0, _createClass2["default"])(XataBot, [{
    key: "onGetStatusClick",
    value: function onGetStatusClick() {
      var _this2 = this;
      this.action(_types.INLINE_STARTUP_BUTTONS_ACTION.GET_STATUS, /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(ctx) {
          return _regenerator["default"].wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this2.clearMessageStack(ctx);
              case 3:
                _context3.next = 5;
                return _this2.displayStatusMessage(ctx, _telegraf.Markup.inlineKeyboard([_telegraf.Markup.button.callback(_buttons.INLINE_STARTUP_BUTTONS.SET_STATUS.text, _buttons.INLINE_STARTUP_BUTTONS.SET_STATUS.callbackData)]));
              case 5:
                _context3.next = 12;
                break;
              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
                _context3.next = 12;
                return _this2.displayStatusMessage(ctx, _telegraf.Markup.inlineKeyboard([_telegraf.Markup.button.callback(_buttons.INLINE_STARTUP_BUTTONS.SET_STATUS.text, _buttons.INLINE_STARTUP_BUTTONS.SET_STATUS.callbackData)]));
              case 12:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[0, 7]]);
        }));
        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "onSetStatusClick",
    value: function onSetStatusClick() {
      var _this3 = this;
      this.action(_types.INLINE_STARTUP_BUTTONS_ACTION.SET_STATUS, /*#__PURE__*/function () {
        var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(ctx) {
          var target, lastMessage;
          return _regenerator["default"].wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return ctx.reply(_text.TEXT.SET_STATUS, _telegraf.Markup.inlineKeyboard((0, _values2["default"])(_buttons.INLINE_SET_STATUS_BUTTONS).map(function (btn) {
                  return [_telegraf.Markup.button.callback(btn.text, btn.callbackData)];
                })));
              case 2:
                target = _context4.sent;
                lastMessage = (0, _last2["default"])(_this3.messageStack);
                _this3.messageStack.push(target);
                if (!(ctx.chat && lastMessage)) {
                  _context4.next = 13;
                  break;
                }
                if (!(lastMessage.text === _types.INLINE_STARTUP_BUTTONS_ACTION.GET_STATUS)) {
                  _context4.next = 11;
                  break;
                }
                _context4.next = 9;
                return ctx.telegram.editMessageReplyMarkup(ctx.chat.id, lastMessage.message_id, undefined, undefined);
              case 9:
                _context4.next = 13;
                break;
              case 11:
                _context4.next = 13;
                return ctx.telegram.deleteMessage(ctx.chat.id, lastMessage.message_id);
              case 13:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return function (_x5) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "onSetStatusButtonsClick",
    value: function onSetStatusButtonsClick() {
      var _this4 = this;
      (0, _values2["default"])((0, _omit2["default"])(_buttons.INLINE_SET_STATUS_BUTTONS, "BACK")).forEach(function (setStatusButton) {
        _this4.action(setStatusButton.callbackData, /*#__PURE__*/function () {
          var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(ctx) {
            var _iterator, _step, user;
            return _regenerator["default"].wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (_this4.usersService.users.length) {
                    _context5.next = 3;
                    break;
                  }
                  _context5.next = 3;
                  return _this4.usersService.getUsers();
                case 3:
                  // Отправляем сообщение каждому пользователю из списка
                  _iterator = _createForOfIteratorHelper(_this4.usersService.users);
                  _context5.prev = 4;
                  _iterator.s();
                case 6:
                  if ((_step = _iterator.n()).done) {
                    _context5.next = 26;
                    break;
                  }
                  user = _step.value;
                  _context5.prev = 8;
                  _context5.next = 11;
                  return _this4.statusService.setCurrentStatus(setStatusButton.text);
                case 11:
                  _context5.next = 13;
                  return _this4.telegram.sendMessage(user.chatId, "<b>\u2757\u2757\u0412\u041D\u0418\u041C\u0410\u041D\u0418\u0415. \u0421\u0442\u0430\u0442\u0443\u0441 \u0438\u0437\u043C\u0435\u043D\u0435\u043D \u043D\u0430: <i>".concat(setStatusButton.text, "</i>\u2757\u2757</b>"), {
                    parse_mode: 'HTML'
                  });
                case 13:
                  _context5.next = 15;
                  return _this4.clearMessageStack(ctx);
                case 15:
                  _context5.next = 17;
                  return _this4.displayStartupMessage(ctx);
                case 17:
                  _context5.next = 24;
                  break;
                case 19:
                  _context5.prev = 19;
                  _context5.t0 = _context5["catch"](8);
                  console.error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E ".concat(user.chatId, ":"), _context5.t0);
                  _context5.next = 24;
                  return _this4.displayStartupMessage(ctx);
                case 24:
                  _context5.next = 6;
                  break;
                case 26:
                  _context5.next = 31;
                  break;
                case 28:
                  _context5.prev = 28;
                  _context5.t1 = _context5["catch"](4);
                  _iterator.e(_context5.t1);
                case 31:
                  _context5.prev = 31;
                  _iterator.f();
                  return _context5.finish(31);
                case 34:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, null, [[4, 28, 31, 34], [8, 19]]);
          }));
          return function (_x6) {
            return _ref6.apply(this, arguments);
          };
        }());
      });
    }
  }, {
    key: "onBackClick",
    value: function onBackClick() {
      var _this5 = this;
      this.action(_types.INLINE_SET_STATUS_BUTTONS_ACTION.BACK, /*#__PURE__*/function () {
        var _ref7 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(ctx) {
          return _regenerator["default"].wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _this5.clearMessageStack(ctx);
              case 3:
                _context6.next = 5;
                return _this5.displayStartupMessage(ctx);
              case 5:
                _context6.next = 12;
                break;
              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                console.log(_context6.t0);
                _context6.next = 12;
                return _this5.displayStartupMessage(ctx);
              case 12:
              case "end":
                return _context6.stop();
            }
          }, _callee6, null, [[0, 7]]);
        }));
        return function (_x7) {
          return _ref7.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "displayStartupMessage",
    value: function () {
      var _displayStartupMessage = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee7(ctx) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.stacked(ctx.reply(_text.TEXT.STARTUP_MESSAGE, _telegraf.Markup.inlineKeyboard((0, _values2["default"])(_buttons.INLINE_STARTUP_BUTTONS).map(function (btn) {
                return [_telegraf.Markup.button.callback(btn.text, btn.callbackData)];
              }))));
            case 2:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function displayStartupMessage(_x8) {
        return _displayStartupMessage.apply(this, arguments);
      }
      return displayStartupMessage;
    }()
  }, {
    key: "clearMessageStack",
    value: function () {
      var _clearMessageStack = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee8(ctx) {
        var tasks;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!(this.messageStack.length && ctx.chat)) {
                _context8.next = 5;
                break;
              }
              tasks = this.messageStack.map(function (message) {
                return ctx.telegram.deleteMessage(ctx.chat.id, message.message_id);
              });
              _context8.next = 4;
              return Promise.all(tasks);
            case 4:
              this.messageStack = [];
            case 5:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function clearMessageStack(_x9) {
        return _clearMessageStack.apply(this, arguments);
      }
      return clearMessageStack;
    }()
  }, {
    key: "observeButtons",
    value: function observeButtons() {
      this.onGetStatusClick();
      this.onSetStatusClick();
      this.onSetStatusButtonsClick();
      this.onBackClick();
    }
  }, {
    key: "stacked",
    value: function () {
      var _stacked = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee9(message) {
        var target;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return message;
            case 2:
              target = _context9.sent;
              this.messageStack.push(target);
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function stacked(_x10) {
        return _stacked.apply(this, arguments);
      }
      return stacked;
    }()
  }]);
}(_telegraf.Telegraf);