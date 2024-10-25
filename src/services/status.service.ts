import {ApiService} from "./index";

type CurrentStatus = {
    id: string;
    title: string;
}[]

interface Status {
    id: number
    title: string
}

export class StatusService extends ApiService {
    async getCurrentStatus() {
        const data = await fetch(this._api + "/status")
        const status: CurrentStatus  = await data.json()
        return status[0].title
    }
    async setCurrentStatus(status: string) {
        await fetch(this._api + "/status/1", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title: status}),
        })
    }
}
