import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService:AuthService,
                private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean> | Promise<boolean> | boolean {
            const authenticated=this.authService.isAuthenticated();
            if(!authenticated){
                this.router.navigate(['signin']);
            }
            return authenticated;
    }
}