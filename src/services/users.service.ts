import {ApiService} from "./index";

interface User {
    id: string;
    chatId: number
}

export class UsersService extends ApiService {
    users: User[] = []

    async getUsers() {
        const users = await fetch(this._api + "/users")
        const data: User[] = await users.json()
        this.users = data
        return data
    }

    async auth(chatId: number) {
        if(!this.users.length) {
            await this.getUsers()
        }

        if(!this.users.find(user => user.chatId === chatId)) {
            fetch(this._api + "/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({chatId}),
            })
        }
    }
}