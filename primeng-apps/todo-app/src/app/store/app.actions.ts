import {createAction, union} from "@ngrx/store";
import {THEME} from "./app.reducer";

export const loadingStart = createAction(
  '[APP] LOADING_START'
);

export const loadingStop = createAction(
  '[APP] LOADING_STOP'
);

export const changeTheme = createAction(
  '[APP] CHANGE_THEME',
  (payload:THEME) => ({payload})
);

const actions = union({
  loadingStart,
  loadingStop,
  changeTheme
});

export type ActionsUnion = typeof actions;
