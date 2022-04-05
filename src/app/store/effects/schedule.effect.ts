import { ScheduleData, Schedule } from './../models/schedule.i';
import { mergeMap, map, catchError } from 'rxjs/operators';
import {
  ESchedule,
  ScheduleLoadAllSuccess,
  ScheduleLoadAllFail,
  ScheduleLoadAll,
  ScheduleLoadEventsToday,
  ScheduleLoadEventsTodaySuccess,
  ScheduleLoadEventsTodayFail,
  ScheduleLoadEventsTomorrowSuccess,
  ScheduleLoadEventsTomorrow,
  ScheduleLoadEventsTomorrowFail,
  ScheduleLoadEventsAfterTomorrow,
  ScheduleLoadEventsAfterTomorrowSuccess,
  ScheduleLoadEventsAfterTomorrowFail,
  ScheduleDeleteEvent,
  ScheduleDeleteEventSuccess,
  ScheduleDeleteEventFail,
  ScheduleUndoDeleteEvent,
  ScheduleUndoDeleteEventSuccess,
  ScheduleUndoDeleteEventFail,
  ScheduleCategoryLoadAll,
  ScheduleCategoryLoadAllSuccess,
  ScheduleCategoryLoadAllFail,
  ScheduleFilterByCategorySuccess,
  ScheduleFilterByCategory,
  ScheduleFilterByCategoryFail,
  ScheduleAdd,
  ScheduleAddSuccess,
  ScheduleAddFail,
  CheckEquipment,
  CheckEquipmentSuccess,
  CheckEquipmentFail,
  ScheduleFilter,
  ScheduleFilterFail,
  ScheduleFilterSuccess,
} from './../actions/schedule.action';
import { ScheduleService } from './../services/schedule.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { SnackbarStoreFacade } from '../store-facades/snackbar.store-facade';
import { CheckFreeTimeResponse } from '../models/add-schedule.i';
import { Page } from '../models/page.i';
import { MessageConstants } from '../../shared/constants/message.contants';

@Injectable({
  providedIn: 'root',
})
export class ScheduleEffects {
  constructor(
    private actions$: Actions,
    private scheduleService: ScheduleService,
    private snackbarFacade: SnackbarStoreFacade
  ) {}
  getAllSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ESchedule.LOAD_ALL),
      mergeMap((action: ScheduleLoadAll) =>
        this.scheduleService.getAllSchedule(action.payload).pipe(
          map(
            (res: ScheduleData) =>
              new ScheduleLoadAllSuccess({ schedules: res.records })
          ),
          catchError((error) =>
            of(
              new ScheduleLoadAllFail({
                message: error,
              })
            )
          )
        )
      )
    )
  );
  getAllEventsToday$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ESchedule.LOAD_EVENTS_TODAY),
      mergeMap((action: ScheduleLoadEventsToday) =>
        this.scheduleService.getAllEventsToday().pipe(
          map(
            (res: ScheduleData) =>
              new ScheduleLoadEventsTodaySuccess({ eventsToday: res.records })
          ),
          catchError((error) =>
            of(
              new ScheduleLoadEventsTodayFail({
                message: error,
              })
            )
          )
        )
      )
    )
  );
  getAllEventsTomorrow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ESchedule.LOAD_EVENTS_TOMORROW),
      mergeMap((action: ScheduleLoadEventsTomorrow) =>
        this.scheduleService.getAllEventsTomorrow().pipe(
          map(
            (res: ScheduleData) =>
              new ScheduleLoadEventsTomorrowSuccess({
                eventsTomorrow: res.records,
              })
          ),
          catchError((error) =>
            of(
              new ScheduleLoadEventsTomorrowFail({
                message: error,
              })
            )
          )
        )
      )
    )
  );
  getAllEventsAfterTomorrow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ESchedule.LOAD_EVENTS_AFTER_TOMORROW),
      mergeMap((action: ScheduleLoadEventsAfterTomorrow) =>
        this.scheduleService.getAllEventsAfterTomorrow().pipe(
          map(
            (res: ScheduleData) =>
              new ScheduleLoadEventsAfterTomorrowSuccess({
                eventsAfterTomorrow: res.records,
              })
          ),
          catchError((error) =>
            of(
              new ScheduleLoadEventsAfterTomorrowFail({
                message: error,
              })
            )
          )
        )
      )
    )
  );

  deleteSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ESchedule.DELETE_EVENT),
      mergeMap((action: ScheduleDeleteEvent) =>
        this.scheduleService.delEventsSchedule(action.payload.delSchedule).pipe(
          map((res: { userId: number; scheduleId: number; title: string }) => {
            this.snackbarFacade.openDeleteSchedule(res.title);
            return new ScheduleDeleteEventSuccess({
              delSchedule: action.payload.delSchedule,
            });
          }),
          catchError((error) =>
            of(
              new ScheduleDeleteEventFail({
                message: error,
              })
            )
          )
        )
      )
    )
  );
  undoDeleteSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ESchedule.UNDO_DELETE_EVENT),
      mergeMap((action: ScheduleUndoDeleteEvent) =>
        this.scheduleService
          .undoDelEventSchedule(action.payload.delSchedule)
          .pipe(
            map(
              (res: { userId: number; scheduleId: number; title: string }) => {
                // this.snackbarFacade.openUndoDeleteSchedule(res.title);
                return new ScheduleUndoDeleteEventSuccess({
                  delSchedule: action.payload.delSchedule,
                  listRestoreSchedule: action.payload.listRestoreSchedule,
                });
              }
            ),
            catchError((error) =>
              of(
                new ScheduleUndoDeleteEventFail({
                  message: error,
                })
              )
            )
          )
      )
    )
  );
  getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ESchedule.LOAD_CATEGORY),
      mergeMap(() =>
        this.scheduleService.getCategoriesSchedule().pipe(
          map((res) => {
            return new ScheduleCategoryLoadAllSuccess({
              categories: res.records,
            });
          }),
          catchError((error) =>
            of(
              new ScheduleCategoryLoadAllFail({
                message: error,
              })
            )
          )
        )
      )
    )
  );
  filterByCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ESchedule.FILTER_BY_CATEGORY),
      map((action: ScheduleFilterByCategory) => {
        if (action.payload?.idsScheduleCategory) {
          return new ScheduleFilterByCategorySuccess({
            idsScheduleCategory: action.payload.idsScheduleCategory,
          });
        }
      }),
      catchError((error) =>
        of(
          new ScheduleFilterByCategoryFail({
            message: error,
          })
        )
      )
    )
  );

  addSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ESchedule.ADD),
      mergeMap((action: ScheduleAdd) =>
        this.scheduleService.addSchedule(action.payload.schedule).pipe(
          map(() => new ScheduleAddSuccess()),
          catchError((error) =>
            of(
              new ScheduleAddFail({
                message: error,
              })
            )
          )
        )
      )
    )
  );

  getEquipment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ESchedule.CHECK_EQUIPMENT),
      mergeMap((action: CheckEquipment) =>
        this.scheduleService.checkEquipment(action.payload.equipment).pipe(
          map(
            (res: CheckFreeTimeResponse) =>
              new CheckEquipmentSuccess({ list: res })
          ),
          catchError((error) =>
            of(
              new CheckEquipmentFail({
                message: error,
              })
            )
          )
        )
      )
    )
  );

  getFilterSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ESchedule.FILTER),
      mergeMap((action: ScheduleFilter) =>
        this.scheduleService
          .getFilterSchedule(action.payload.pagination, action.payload.filter)
          .pipe(
            map(
              (res: Page<Schedule>) =>
                new ScheduleFilterSuccess({
                  schedules: res.data,
                  pagination: {
                    page: res.page,
                    pageSize: res.pageSize,
                    total: res.total,
                  },
                  filter: action.payload.filter,
                })
            ),
            catchError((error) =>
              of(
                new ScheduleFilterFail({
                  message: MessageConstants.SCHEDULE_FILTER_FAIL,
                })
              )
            )
          )
      )
    )
  );
}
