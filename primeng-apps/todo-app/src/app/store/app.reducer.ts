import * as AppActions from './app.actions';

export interface AppState {
  loading: boolean
}

const initialState = {
  loading: false
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
    default:
      return state;
  }
}
