"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiService = void 0;
Object.defineProperty(exports, "StatusService", {
  enumerable: true,
  get: function get() {
    return _status.StatusService;
  }
});
Object.defineProperty(exports, "UsersService", {
  enumerable: true,
  get: function get() {
    return _users.UsersService;
  }
});
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _status = require("./status.service");
var _users = require("./users.service");
var ApiService = exports.ApiService = /*#__PURE__*/(0, _createClass2["default"])(function ApiService() {
  (0, _classCallCheck2["default"])(this, ApiService);
  (0, _defineProperty2["default"])(this, "_api", process.env.API_ENDPOINT);
});