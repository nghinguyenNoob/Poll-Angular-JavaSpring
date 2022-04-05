import { Action } from '@ngrx/store';
export enum ELogin {
  LOGOUT = '[App] logout',
}

export class LogoutAction implements Action {
  readonly type = ELogin.LOGOUT;
}
