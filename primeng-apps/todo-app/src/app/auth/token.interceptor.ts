import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {first, flatMap} from "rxjs/operators";

import {GlobalState} from "../model/globalState";
import {AuthState} from "./store/auth.reducer";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private store: Store<GlobalState>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select<AuthState>('auth').pipe(
      first(),
      flatMap(state => {
        // const authReq = state.authenticated ? req.clone({
        //   setHeaders: {Authorization: 'Bearer ' + state.token},
        // }) : req;
        return next.handle(req);
      })
    );
  }
}
