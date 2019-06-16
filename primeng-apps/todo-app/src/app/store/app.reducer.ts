import * as AppActions from './app.actions';

export interface AppState {
  loading: boolean
}

export function appReducer(state: AppState, action:AppActions.ActionsUnion) {
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
    default:
      return state;
  }
}
