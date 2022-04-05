import { INITIAL_STATE, MetaReducer } from '@ngrx/store';
import { ELogin, LogoutAction } from '../actions/login.action';

export function clearState(reducer) {
  return function (state, action: LogoutAction) {
    if (action.type === ELogin.LOGOUT) {
      state = INITIAL_STATE;
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer[] = [clearState];
