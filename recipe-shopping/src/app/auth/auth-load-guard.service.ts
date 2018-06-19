import { CanLoad, Route } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthLoadGuard implements CanLoad{

    constructor(private authService:AuthService){ }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean{
        return this.authService.isAuthenticated();
    }
}