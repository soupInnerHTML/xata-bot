"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grid = exports.flat = void 0;
var _chunk2 = _interopRequireDefault(require("lodash/chunk"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var flat = exports.flat = Object.values;

// array flat
var grid = exports.grid = function grid(obj) {
  var perRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return (0, _chunk2["default"])(flat(obj), perRow);
};