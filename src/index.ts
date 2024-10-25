import "./types/env.types"
import dotenv from 'dotenv';
import { StatusService, UsersService } from './services'
import { XataBot } from "./xataBot";

dotenv.config();

const statusService = new StatusService()
const usersService = new UsersService()

const xataBot = new XataBot({
  token: process.env.BOT_TOKEN,
  usersService,
  statusService
});

xataBot.startBot()