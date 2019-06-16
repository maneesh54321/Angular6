import {ActionsUnion, setToken, signIn} from './auth.actions';

export interface AuthState {
  token: string;
  authenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  authenticated: false
};

export function AuthReducer (state = initialState, action:ActionsUnion){
  switch (action.type) {
    case signIn.type:
      return {
        ...state,
        authenticated: true
      };
    case setToken.type:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}
