import { createAction, union } from '@ngrx/store';

export const trySignIn = createAction(
  '[AUTH] TRY_SIGN_IN',
  (payload: { username: string, password: string }) => ({payload})
);

export const signIn = createAction(
  '[AUTH] SIGN_IN'
);

export const setToken = createAction(
  '[AUTH] SET_TOKEN',
  (payload: string) => ({payload})
);

export const signOut = createAction(
  '[AUTH] SIGN_OUT'
);

export const signInError = createAction(
  '[AUTH] SIGN_IN_ERROR',
  (payload: string) => ({payload})
);

const actions = union({
  trySignIn,
  signIn,
  setToken,
  signOut,
  signInError
});

export type ActionsUnion = typeof actions;
