import {StatusService, UsersService} from "../services";

export interface XataBotConstructor {
    token: string;
    usersService: UsersService;
    statusService: StatusService
}