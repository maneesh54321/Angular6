import {ActionsUnion, setToken, signIn, signOut} from './auth.actions';

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
    case signOut.type:
      return {
        ...state,
        authenticated: false,
        token: null
      };
    default:
      return state;
  }
}
