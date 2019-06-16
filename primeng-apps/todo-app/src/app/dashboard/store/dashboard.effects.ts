import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {HttpClient} from "@angular/common/http";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";

import * as DashboardActions from './dashboard.actions';
import * as AppActions from '../../store/app.actions';
import {MessageService} from "primeng/api";
import {of} from "rxjs";

@Injectable()
export class DashboardEffects {

  private readonly _weatherApiBaseUrl: string;

  private readonly _apiKey: string;

  @Effect()
  fetchWeatherDataForLocation = this._actions$.pipe(
    ofType(DashboardActions.tryFetchWeatherForLocation.type),
    map((action: DashboardActions.ActionsUnion) => {
      return action.payload;
    }),
    switchMap((cityName: string) => {
      return this._http.get(`${this._weatherApiBaseUrl}?q=${cityName}&appid=${this._apiKey}`);
    }),
    mergeMap((response: any) => {
      console.log(response);
      return [DashboardActions.fetchWeatherForLocationSuccess(response), AppActions.loadingStop()];
    }),
    catchError((error: any) => {
      this._toastService.add({severity:'error', summary: 'Error occurred!!', detail:'Failed to load weather data.'});
      return [of({error}), AppActions.loadingStop()];
    })
  );

  constructor(
    private _actions$: Actions,
    private _http: HttpClient,
    private _toastService: MessageService
  ) {
    this._weatherApiBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    this._apiKey = 'e863ef583b9b5e6249abf9ba5420c5b3';
  }
}
