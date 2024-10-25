"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusService = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _index = require("./index");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var StatusService = exports.StatusService = /*#__PURE__*/function (_ApiService) {
  function StatusService() {
    (0, _classCallCheck2["default"])(this, StatusService);
    return _callSuper(this, StatusService, arguments);
  }
  (0, _inherits2["default"])(StatusService, _ApiService);
  return (0, _createClass2["default"])(StatusService, [{
    key: "getCurrentStatus",
    value: function () {
      var _getCurrentStatus = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var data, status;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(this._api + "/status");
            case 2:
              data = _context.sent;
              _context.next = 5;
              return data.json();
            case 5:
              status = _context.sent;
              return _context.abrupt("return", status[0].title);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getCurrentStatus() {
        return _getCurrentStatus.apply(this, arguments);
      }
      return getCurrentStatus;
    }()
  }, {
    key: "setCurrentStatus",
    value: function () {
      var _setCurrentStatus = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(status) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch(this._api + "/status/1", {
                method: "PUT",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  title: status
                })
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function setCurrentStatus(_x) {
        return _setCurrentStatus.apply(this, arguments);
      }
      return setCurrentStatus;
    }()
  }]);
}(_index.ApiService);