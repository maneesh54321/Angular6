import * as AppActions from './app.actions';

export enum THEME {
  DARK = 'dark',
  LIGHT = 'light'
}

export interface AppState {
  loading: boolean;
  currentTheme: THEME;
}

const initialState = {
  loading: false,
  currentTheme: THEME.DARK
};

export function appReducer(state: AppState = initialState, action:AppActions.ActionsUnion) {
  switch (action.type) {
    case AppActions.loadingStart.type:
      return {
        ...state,
        loading: true
      };
    case AppActions.loadingStop.type:
      return {
        ...state,
        loading: false
      };
    case AppActions.changeTheme.type:
      return {
        ...state,
        currentTheme: action.payload
      };
    default:
      return state;
  }
}
