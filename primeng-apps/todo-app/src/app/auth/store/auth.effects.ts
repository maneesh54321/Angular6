import { Injectable }                           from '@angular/core';
import { HttpClient, HttpErrorResponse }        from '@angular/common/http';
import { Actions, Effect, ofType }              from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of }                                   from 'rxjs';

import * as AuthActions                             from './auth.actions';
import { setToken, signIn, signInError, trySignIn } from './auth.actions';
import { loadingStop }                              from '../../store/app.actions';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignIn = this.actions$.pipe(
    ofType(trySignIn.type),
    map((action: ReturnType<typeof AuthActions.trySignIn>) => {
      return action.payload;
    }),
    switchMap((payload: { username: string, password: string }) =>
      this._http.post<{ token: string }>('https://reqres.in/api/login', {
        email: payload.username,
        password: payload.password
      }).pipe(
        mergeMap((response: { token: string }) => [signIn(), setToken(response.token)]),
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          switch (error.status) {
            case 400:
              errorMsg = 'Bad credentials!!';
              break;
            case 401:
              errorMsg = 'Unauthorized!!';
              break;
            case 500:
              errorMsg = 'Error occurred while signing in!!';
              break;
            default:
              errorMsg = 'Service unavailable!!';
          }
          return of(signInError(errorMsg), loadingStop());
        })
      )
    )
  );

  constructor(private actions$: Actions, private _http: HttpClient) {
  }
}
