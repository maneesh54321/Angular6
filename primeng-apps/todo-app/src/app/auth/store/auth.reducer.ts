import { ActionsUnion, setToken, signIn, signInError, signOut } from './auth.actions';

export interface AuthState {
  token: string;
  authenticated: boolean;
  errorMessage: string;
}

const initialState: AuthState = {
  token: null,
  authenticated: false,
  errorMessage:''
};

export function AuthReducer (state = initialState, action:ActionsUnion){
  switch (action.type) {
    case signIn.type:
      return {
        ...state,
        authenticated: true,
        errorMessage:''
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
    case signInError.type:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
