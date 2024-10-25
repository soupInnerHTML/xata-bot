"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XataBot = void 0;
var _values2 = _interopRequireDefault(require("lodash/values"));
var _omit2 = _interopRequireDefault(require("lodash/omit"));
var _last2 = _interopRequireDefault(require("lodash/last"));
var _telegraf = require("telegraf");
var _buttons = require("./constants/buttons");
var _text = require("./constants/text");
var _types = require("./types");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var XataBot = exports.XataBot = /*#__PURE__*/function (_Telegraf) {
  function XataBot(_ref) {
    var _this;
    var token = _ref.token,
      statusService = _ref.statusService,
      usersService = _ref.usersService;
    _classCallCheck(this, XataBot);
    _this = _callSuper(this, XataBot, [token]);
    _defineProperty(_this, "messageStack", []);
    _defineProperty(_this, "startBot", function () {
      _this.start(/*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(ctx) {
          var chatId;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
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
    _defineProperty(_this, "displayStatusMessage", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ctx, reply) {
        var status, target;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
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
  _inherits(XataBot, _Telegraf);
  return _createClass(XataBot, [{
    key: "onGetStatusClick",
    value: function onGetStatusClick() {
      var _this2 = this;
      this.action(_types.INLINE_STARTUP_BUTTONS_ACTION.GET_STATUS, /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(ctx) {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
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
        var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(ctx) {
          var target, lastMessage;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
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
          var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(ctx) {
            var _iterator, _step, user;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
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
        var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(ctx) {
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
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
      var _displayStartupMessage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(ctx) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
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
      var _clearMessageStack = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(ctx) {
        var tasks;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
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
      var _stacked = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(message) {
        var target;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
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