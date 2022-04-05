import { Action, createReducer, on } from '@ngrx/store';

import * as SnackbarActions from '../actions/snackbar.actions';
export interface SnackbarState {
  show: boolean;
}
export const initialState: SnackbarState = {
  show: false,
};
const _snackbarReducer = createReducer(
  initialState,

  on(SnackbarActions.OpenSnackbars, (state, action) => {
    return { ...state, show: true };
  }),

  on(SnackbarActions.CloseSnackbars, (state, action) => {
    return { ...state, show: false };
  })
);

export function snackbarReducer(
  state: SnackbarState | undefined,
  action: Action
) {
  return _snackbarReducer(state, action);
}
