import {
  snackbarSUCCESS,
  snackbarINFO,
  snackbarERROR,
} from '../../shared/constants/snackbar.constants';
import {
  OpenSnackbars,
  OpenSnackbarsFromEffect,
} from '../actions/snackbar.actions';
import { AppState } from '../app-state';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackbarStoreFacade {
  copyright$: Observable<Date> = of(new Date());
  constructor(private store: Store<AppState>) {}
  openSuccess(event: any) {
    this.store.dispatch(
      OpenSnackbars({
        config: {
          message: 'You opened Success',
          action: 'Undo',
          config: snackbarSUCCESS,
        },
      })
    );
  }
  openInfo(event: any) {
    this.store.dispatch(
      OpenSnackbars({
        config: {
          message: 'You opened Info',
          action: 'Close',
          config: snackbarINFO,
        },
      })
    );
  }

  openError(event: any) {
    this.store.dispatch(
      OpenSnackbars({
        config: {
          message: 'You opened Error',
          action: 'Close',
          config: snackbarERROR,
        },
      })
    );
  }

  openEffect(event: any) {
    this.store.dispatch(
      OpenSnackbarsFromEffect({
        config: {
          message: 'You opened Snackar from effect',
          action: 'UNDO',
          config: snackbarSUCCESS,
        },
      })
    );
  }
  openDeleteSchedule(title: string) {
    this.store.dispatch(
      OpenSnackbars({
        config: {
          message: `Event ${title} deleted successfully.`,
          action: 'Undo',
          config: snackbarSUCCESS,
        },
      })
    );
  }
  openUndoDeleteSchedule(title: string) {
    this.store.dispatch(
      OpenSnackbars({
        config: {
          message: `Event ${title} undo successfully.`,
          action: 'Close',
          config: snackbarSUCCESS,
        },
      })
    );
  }
}
