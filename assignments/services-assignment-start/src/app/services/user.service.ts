import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
    private _activeUsers: string[] = ['Max', 'Anna'];
    private _inactiveUsers: string[] = ['Chris', 'Manu'];

    constructor(private counterService:CounterService){}

    onSetToInactive(id: number) {
        let userName = this.activeUsers[id];
        this._activeUsers.splice(id, 1);
        this._inactiveUsers.push(userName);
        this.counterService.incrementActiveToInactive();
    }

    OnSetToActive(id: number) {
        let userName = this.inactiveUsers[id];
        this._inactiveUsers.splice(id, 1);
        this._activeUsers.push(userName);
        this.counterService.incrementInactiveToActive();
    }

    get activeUsers() {
        return this._activeUsers;
    }

    get inactiveUsers() {
        return this._inactiveUsers;
    }
}