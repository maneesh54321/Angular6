import {createAction, union} from "@ngrx/store";

export const tryFetchWeatherForLocation = createAction(
  '[DASHBOARD] TRY_FETCH_WEATHER_FOR_LOCATION',
  (payload: string) => ({payload})
);

export const fetchWeatherForLocationSuccess = createAction(
  '[DASHBOARD] FETCH_WEATHER_FOR_LOCATION_SUCCESS',
  (payload: any) => ({payload})
);

const actions = union({
  tryFetchWeatherForLocation,
  fetchWeatherForLocationSuccess
});

export type ActionsUnion = typeof actions;
