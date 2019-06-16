import * as DashboardActions from "./dashboard.actions";
import {City} from "../model/city";
import {CurrentWeatherAtLocation} from "../model/currentWeatherAtLocation";

export interface DashboardState {
  city: City,
  currentWeather: CurrentWeatherAtLocation
}

const intialState: DashboardState = {
  city: {
    id: 1234,
    name: 'bengaluru',
    zipCode: 560037
  },
  currentWeather: null
};

export function dashboardReducer(state = intialState, action: DashboardActions.ActionsUnion) {
  switch (action.type) {
    case DashboardActions.fetchWeatherForLocationSuccess.type:
      return {
        ...state,
        currentWeather:{
          weather:action.payload.weather,
          main: action.payload.main,
          wind: action.payload.wind,
          visibility: action.payload.visibility
        }
      };
    default:
      return state;
  }
}
