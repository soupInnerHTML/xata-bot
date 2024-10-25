"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
require("./types/env.types");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _services = require("./services");
var _xataBot = require("./xataBot");
_dotenv["default"].config();
var statusService = new _services.StatusService();
var usersService = new _services.UsersService();
var xataBot = new _xataBot.XataBot({
  token: process.env.BOT_TOKEN,
  usersService: usersService,
  statusService: statusService
});
xataBot.startBot();