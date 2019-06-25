import { AuthReducer, AuthState }    from './auth.reducer';
import { setToken, signIn, signOut } from './auth.actions';

const initialState: AuthState = {
  token: null,
  authenticated: false,
  errorMessage: ''
};

fdescribe('undefined action', () => {
  it('should return the default state', () => {
    const action = { type: 'NOOP' } as any;
    const result = AuthReducer(initialState, action);

    expect(result).toBe(initialState);
  });

  it('should toggle authenticated state', () => {
    const result = AuthReducer(initialState, signIn);

    expect(result).toEqual({
      ...initialState,
      authenticated: true
    });
  });

  it('should set token in state', () => {
    const token = '-asdasdadhakjs.akjdhlasd';
    const result = AuthReducer(initialState, setToken(token));

    expect(result).toEqual({
      ...initialState,
      token
    });
  });

  it('should set token to null and authenticated to false in state', () => {
    const result = AuthReducer(initialState, signOut());

    expect(result).toEqual({
      ...initialState,
      token:null,
      authenticated: false
    });
  });
});
