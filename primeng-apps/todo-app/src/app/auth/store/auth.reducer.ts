import {ActionsUnion, setToken, signIn, signInError, trySignIn} from './auth.actions';

export enum NotificationType {
  Success = 'Success',
  Error = 'Error'
}

export interface AuthState {
  token: string;
  authenticated: boolean;
  state: {
    loading: boolean,
    notification: {
      value: string,
      type: NotificationType,
      consumed: boolean
    }
  }
}

const initialState: AuthState = {
  token: null,
  authenticated: false,
  state: {
    loading: false,
    notification: {
      value: null,
      type: NotificationType.Success,
      consumed: true
    }
  }
};

export function AuthReducer (state = initialState, action:ActionsUnion){
  switch (action.type) {
    case trySignIn.type:
      return {
        ...state,
        state:{
          ...state.state,
          loading: true
        }
      };

    case signIn.type:
      return {
        ...state,
        authenticated: true,
        state:{
          ...state.state,
          loading: false
        }
      };

    case setToken.type:
      return {
        ...state,
        token: action.payload
      };

    case signInError.type:
      return {
        ...state,
        state:{
          ...state.state,
          loading: false,
          notification: {
            value: 'Failed to Sign in!!',
            type: NotificationType.Error,
            consumed: false
          }
        }
      };
    default:
      return state;
  }
}
