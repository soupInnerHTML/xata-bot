"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.grid = exports.flat = void 0;
const lodash_1 = __importDefault(require("lodash"));
exports.flat = Object.values;
// array flat
const grid = (obj, perRow = 2) => lodash_1.default.chunk(Object.values(obj), perRow);
exports.grid = grid;
