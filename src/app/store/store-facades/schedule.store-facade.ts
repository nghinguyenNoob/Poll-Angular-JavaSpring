import { filter, map } from 'rxjs/operators';
import {
  startOfMonth,
  startOfWeek,
  endOfWeek,
  endOfMonth,
  isWithinInterval,
  startOfDay,
  endOfDay,
} from 'date-fns';
import {
  getFilterSchedule,
  getEventsTomorrow,
  getEventsAfterTomorrow,
  getCategories,
  getDataFilterByCategory,
  getDelScheduleReal,
} from './../selectors/schedule.selector';
import { FilterSchedule, CategorySchedule } from './../models/schedule.i';
import {
  CheckEquipment,
  ScheduleAdd,
  ScheduleCategoryLoadAll,
  ScheduleDeleteEvent,
  ScheduleFilter,
  ScheduleFilterByCategory,
  ScheduleLoadEventsAfterTomorrow,
  ScheduleLoadEventsAfterTomorrowFail,
  ScheduleLoadEventsTodayFail,
  ScheduleLoadEventsTomorrow,
  ScheduleUndoDeleteEvent,
} from './../actions/schedule.action';
import { ScheduleState } from '../reducers/schedule.reducer';
import { Observable, combineLatest } from 'rxjs';
import {
  ScheduleLoadAll,
  ScheduleLoadEventsToday,
} from '../actions/schedule.action';
import {
  getSchedule,
  getSchedules,
  getLoading,
  getEventsToday,
  getDelSchedule,
} from '../selectors/schedule.selector';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../app-state';
import { Schedule } from '../models/schedule.i';
import { AddSchedule, CheckFreeTimeParams } from '../models/add-schedule.i';
import { Pagination } from '../models/pagination.i';

@Injectable({
  providedIn: 'root',
})
export class StoreFacade {
  constructor(private store: Store<AppState>) {
  }
  schedules$: Observable<Schedule[]>;
  loading$: Observable<boolean>;
  eventsToday$: Observable<Schedule[]>;
  eventsTomorrow$: Observable<Schedule[]>;
  eventsAfterTomorrow$: Observable<Schedule[]>;
  categories$: Observable<CategorySchedule[]>;
  filter: FilterSchedule;
  deleteSchedule: Schedule;
  pagination : Pagination;
  listRestoreSchedule: Schedule[];

  /**
   * userId get from localStore
   */

  userIdFake: number = 1;
  dispatchSchedule(filter: FilterSchedule) {
    this.store.dispatch(new ScheduleLoadAll(filter));
    this.store.dispatch(new ScheduleLoadEventsToday(filter));
    this.store.dispatch(new ScheduleLoadEventsTomorrow(filter));
    this.store.dispatch(new ScheduleLoadEventsAfterTomorrow(filter));
    this.store.dispatch(new ScheduleCategoryLoadAll());
  }
  getSchedules() {
    this.schedules$ = this.store.select(getSchedules);
  }
  getLoading() {
    this.loading$ = this.store.select(getLoading);
  }
  getEventsToday() {
    this.eventsToday$ = this.store.select(getEventsToday);
  }
  getFilter() {
    this.store.select(getFilterSchedule).subscribe((filter) => {
      this.filter = filter;
    });
  }
  dispatchScheduleOnMonthChange(filter: FilterSchedule) {
    this.store.dispatch(new ScheduleLoadAll(filter));
  }
  getEventsTomorrow() {
    this.eventsTomorrow$ = this.store.select(getEventsTomorrow);
  }
  getEventsAfterTomorrow() {
    this.eventsAfterTomorrow$ = this.store.select(getEventsAfterTomorrow);
  }
  delSchedule(delSchedule: Schedule) {
    this.store.dispatch(new ScheduleDeleteEvent({ delSchedule }));
  }
  undoDelSchedule() {
    combineLatest([
      this.store.select(getDelScheduleReal),
      this.store.select(getDelSchedule),
    ]).subscribe(([rs1, rs2]) => {
      this.deleteSchedule = rs1;
      this.listRestoreSchedule = rs2;
    });
    this.store.dispatch(
      new ScheduleUndoDeleteEvent({
        delSchedule: this.deleteSchedule,
        listRestoreSchedule: this.listRestoreSchedule,
      })
    );
  }
  getCategorySchedule() {
    this.categories$ = this.store.select(getCategories);
  }
  dispatchFilterByCategory(idsScheduleCategory: number[]) {
    this.store.dispatch(new ScheduleFilterByCategory({ idsScheduleCategory }));
  }
  getDataFilterByCategory$() {
    return this.store.select(getDataFilterByCategory);
  }
  addSchedule(schedule: AddSchedule) {
    this.store.dispatch(new ScheduleAdd({ schedule }));
  }
  checkEquipment(equipment: CheckFreeTimeParams) {
    this.store.dispatch(new CheckEquipment({ equipment }));
  }
   //  Lấy giá trị khởi tạo từ store có hoặc không.
  getValuePaginationAndFilter() {
    this.store.select(getSchedule).subscribe((schedule) => {
      this.filter = schedule.filter;
      this.pagination = schedule.pagination;
    });
  }  
  // thực hiện hành động push dữ liệu vào store từ action
  filterSchedule(pagination: Pagination, filter: FilterSchedule) {
    this.store.dispatch(new ScheduleFilter({ pagination, filter }));
  }
  getValueScheduleTablePage() {
    return this.store.select(getSchedule);
  }
  dispatchCategory() {
    this.store.dispatch(new ScheduleCategoryLoadAll());
  }
  getEventsInSiderBar() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const afterTomorrow = new Date(today);
    afterTomorrow.setDate(afterTomorrow.getDate() + 2);
    this.eventsToday$ = this.schedules$.pipe(
      map((rs: Schedule[]) => {
        return rs.filter((event) =>
          isWithinInterval(new Date(today), {
            start: startOfDay(new Date(event.timeStart)),
            end: endOfDay(new Date(event.dueTime)),
          })
        );
      })
    );
    this.eventsTomorrow$ = this.schedules$.pipe(
      map((rs: Schedule[]) => {
        return rs.filter((event) =>
          isWithinInterval(new Date(tomorrow), {
            start: startOfDay(new Date(event.timeStart)),
            end: endOfDay(new Date(event.dueTime)),
          })
        );
      })
    );
    this.eventsAfterTomorrow$ = this.schedules$.pipe(
      map((rs: Schedule[]) => {
        return rs.filter((event) =>
          isWithinInterval(new Date(afterTomorrow), {
            start: startOfDay(new Date(event.timeStart)),
            end: endOfDay(new Date(event.dueTime)),
          })
        );
      })
    );
  }
}
