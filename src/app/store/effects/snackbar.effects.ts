import {
  getEventsToday,
  getDelSchedule,
  getDelScheduleReal,
} from './../selectors/schedule.selector';
import { Schedule } from './../models/schedule.i';
import { Store } from '@ngrx/store';
import { AppState } from './../app-state';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  map,
  tap,
  delay,
  catchError,
  mergeMap,
  switchMap,
  concatMap,
} from 'rxjs/operators';
import * as SnackbarActions from '../actions/snackbar.actions';
import { CloseSnackbars, OpenSnackbars } from '../actions/snackbar.actions';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ScheduleUndoDeleteEvent } from '../actions/schedule.action';
import { concat, forkJoin, zip } from 'rxjs';

@Injectable()
export class SnackbarEffects {
  deleteSchedule: Schedule;
  closeSnackbars$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SnackbarActions.CloseSnackbars),
        tap(() => this.matSnackBar.dismiss())
      ),
    { dispatch: false }
  );

  showSnackbar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SnackbarActions.OpenSnackbars),
      map((action) => action.config),
      tap((config) => {
        const snackBarRef = this.matSnackBar.open(
          config.message,
          config.action,
          config.config
        );
        if (config.action === 'Undo') {
          snackBarRef.afterDismissed().subscribe((info) => {
            if (info.dismissedByAction === true) {
              let data: Schedule[];
              let dataReal: Schedule;
              this.store.select(getDelSchedule).subscribe((rs) => {
                data = rs;
              });
              this.store.select(getDelScheduleReal).subscribe((rs) => {
                dataReal = rs;
              });
              this.store.dispatch(
                new ScheduleUndoDeleteEvent({
                  delSchedule: dataReal,
                  listRestoreSchedule: data,
                })
              );
            }
          });
        }
      }),
      catchError((err) => {
        console.log(err);
        throw new err();
      }),
      delay(environment.snackbarDelayTime),
      map(() => {
        return CloseSnackbars();
      })
    )
  );

  constructor(
    private actions$: Actions,
    private matSnackBar: MatSnackBar,
    private store: Store<AppState>
  ) {}
}
