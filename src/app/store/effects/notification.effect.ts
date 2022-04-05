import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EventNotification } from '../models/event-notification.i';
import {
  CountNotification,
  CountNotificationFail,
  CountNotificationSuccess,
  ENotification,
  NotificationGetEvent,
  NotificationGetEventFail,
  NotificationGetEventSuccess,
  NotificationLoadAll,
  NotificationLoadAllFail,
  NotificationLoadAllSuccess,
} from './../actions/notification.action';
import { NotificationService } from './../services/notification.service';
@Injectable()
export class NotificationEffect {
  constructor(
    private actions$: Actions,
    private noticeService: NotificationService
  ) {}
  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ENotification.LOAD_ALL),
      mergeMap((action: NotificationLoadAll) =>
        this.noticeService
          .getAllNotification(action.payload.pagination, action.payload.filter)
          .pipe(
            map(
              (dataNotification) =>
                new NotificationLoadAllSuccess({
                  notifications: dataNotification,
                  filter: action.payload.filter,
                })
            ),
            catchError((error) =>
              of(new NotificationLoadAllFail({ message: error }))
            )
          )
      )
    )
  );

  getAllEvent = createEffect(() =>
    this.actions$.pipe(
      ofType(ENotification.GET_EVENT),
      mergeMap((action: NotificationGetEvent) =>
        this.noticeService.getAllEvent().pipe(
          map(
            (dataEvent: EventNotification[]) =>
              new NotificationGetEventSuccess({
                event: dataEvent,
              })
          ),
          catchError((error) =>
            of(new NotificationGetEventFail({ message: error }))
          )
        )
      )
    )
  );
  getCountNotification = createEffect(() =>
    this.actions$.pipe(
      ofType(ENotification.COUNT_NOTIFICATIONS),
      mergeMap((action: CountNotification) =>
        this.noticeService.getCountNotification().pipe(
          map(
            (data: number) =>
              new CountNotificationSuccess({
                total: data,
              })
          ),
          catchError((error) =>
            of(new CountNotificationFail({ message: error }))
          )
        )
      )
    )
  );
}
