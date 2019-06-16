import {createAction, union} from '@ngrx/store';

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

const actions = union({
  trySignIn,
  signIn,
  setToken
});

export type ActionsUnion = typeof actions;
