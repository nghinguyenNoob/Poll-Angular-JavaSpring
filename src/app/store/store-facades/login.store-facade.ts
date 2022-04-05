import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogoutAction } from '../actions/login.action';
import { AppState } from '../app-state';

@Injectable({
  providedIn: 'root',
})
export class StoreFacade {
  constructor(private store: Store<AppState>) {}
  logout() {
    this.store.dispatch(new LogoutAction());
  }
}
