"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersService = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _index = require("./index");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var UsersService = exports.UsersService = /*#__PURE__*/function (_ApiService) {
  function UsersService() {
    var _this;
    (0, _classCallCheck2["default"])(this, UsersService);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, UsersService, [].concat(args));
    (0, _defineProperty2["default"])(_this, "users", []);
    return _this;
  }
  (0, _inherits2["default"])(UsersService, _ApiService);
  return (0, _createClass2["default"])(UsersService, [{
    key: "getUsers",
    value: function () {
      var _getUsers = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var users, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(this._api + "/users");
            case 2:
              users = _context.sent;
              _context.next = 5;
              return users.json();
            case 5:
              data = _context.sent;
              this.users = data;
              return _context.abrupt("return", data);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getUsers() {
        return _getUsers.apply(this, arguments);
      }
      return getUsers;
    }()
  }, {
    key: "auth",
    value: function () {
      var _auth = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(chatId) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (this.users.length) {
                _context2.next = 3;
                break;
              }
              _context2.next = 3;
              return this.getUsers();
            case 3:
              if (!this.users.find(function (user) {
                return user.chatId === chatId;
              })) {
                fetch(this._api + "/users", {
                  method: "POST",
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    chatId: chatId
                  })
                });
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function auth(_x) {
        return _auth.apply(this, arguments);
      }
      return auth;
    }()
  }]);
}(_index.ApiService);