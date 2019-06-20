import {Actions, Effect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

import * as AuthActions from "./auth.actions";
import {setToken, signIn, trySignIn} from "./auth.actions";

@Injectable()
export class AuthEffects {
  @Effect()
  authSignIn = this.actions$.pipe(
    ofType(trySignIn.type),
    map((action : ReturnType<typeof AuthActions.trySignIn>) => {
      return action.payload;
    }),
    switchMap((payload: {username: string, password: string}) => {
      return this._http.post<{token: string}>('https://reqres.in/api/login', {
        email: payload.username,
        password: payload.password
      });
    }),
    mergeMap((response: {token: string}) => {
      return [signIn(), setToken(response.token)];
    }),
    catchError((error: HttpErrorResponse) => {
      return [];
    })
  );

  constructor(private actions$: Actions, private _http: HttpClient){}
}
