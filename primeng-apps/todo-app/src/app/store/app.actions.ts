import {createAction, union} from "@ngrx/store";

export const loadingStart = createAction(
  '[APP] LOADING_START'
);

export const loadingStop = createAction(
  '[APP] LOADING_STOP'
);

const actions = union({
  loadingStart,
  loadingStop
});

export type ActionsUnion = typeof actions;
