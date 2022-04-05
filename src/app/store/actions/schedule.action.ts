import {
  Schedule,
  ScheduleData,
  FilterSchedule,
  CategorySchedule,
} from './../models/schedule.i';
import { CalendarEventModel } from './../models/event.model';
import { Action } from '@ngrx/store';
import {
  AddSchedule,
  CheckFreeTimeParams,
  CheckFreeTimeResponse,
} from '../models/add-schedule.i';
import { Pagination } from '../models/pagination.i';
export enum ESchedule {
  LOAD_ALL = '[Schedule] Load all',
  LOAD_ALL_SUCCESS = '[Schedule] Load all success',
  LOAD_ALL_FAIL = '[Schedule] Load all fail',

  LOAD_EVENTS_TODAY = '[Schedule] Load events today',
  LOAD_EVENTS_TODAY_FAIL = '[Schedule] Load events today fail',
  LOAD_EVENTS_TODAY_SUCCESS = '[Schedule] Load events today success',

  LOAD_EVENTS_TOMORROW = '[Schedule] Load events tomorrow',
  LOAD_EVENTS_TOMORROW_FAIL = '[Schedule] Load events tomorrow fail',
  LOAD_EVENTS_TOMORROW_SUCCESS = '[Schedule] Load events tomorrow success',

  LOAD_EVENTS_AFTER_TOMORROW = '[Schedule] Load events after tomorrow',
  LOAD_EVENTS_AFTER_TOMORROW_FAIL = '[Schedule] Load events after tomorrow fail',
  LOAD_EVENTS_AFTER_TOMORROW_SUCCESS = '[Schedule] Load events after tomorrow success',

  DELETE_EVENT = '[Schedule] Delete event',
  DELETE_EVENT_SUCCESS = '[Schedule] Delete event success',
  DELETE_EVENT_FAIL = '[Schedule] Delete event fail',

  UNDO_DELETE_EVENT = '[Schedule] Undo delete event',
  UNDO_DELETE_EVENT_SUCCESS = '[Schedule] Undo delete event success',
  UNDO_DELETE_EVENT_FAIL = '[Schedule] Undo delete event fail',

  LOAD_CATEGORY = '[Schedule] Load all category schedule',
  LOAD_CATEGORY_SUCCESS = '[Schedule] Load all category schedule success',
  LOAD_CATEGORY_FAIL = '[Schedule] Load all category schedule fail',

  FILTER_BY_CATEGORY = '[Schedule] Filter by category schedule',
  FILTER_BY_CATEGORY_SUCCESS = '[Schedule] Filter by category schedule success',
  FILTER_BY_CATEGORY_FAIL = '[Schedule] Filter by category schedule fail',
  ADD = '[Schedule] Adding',
  ADD_SUCCESS = '[Schedule] Add success',
  ADD_FAIL = '[Schedule] Add fail',

  CHECK_EQUIPMENT = '[Check_equipment] Checking',
  CHECK_EQUIPMENT_SUCCESS = '[Check_equipment] Check success',
  CHECK_EQUIPMENT_FAIL = '[Check_equipment] Check fail',

  FILTER = '[Schedule] filtering schedule',
  FILTER_SUCCESS = '[Schedule] filter schedule success',
  FILTER_FAIL = '[Schedule] filter schedule fail',
}

export class ScheduleLoadAll implements Action {
  public readonly type = ESchedule.LOAD_ALL;
  constructor(public payload: FilterSchedule) {}
}

export class ScheduleLoadAllSuccess implements Action {
  public readonly type = ESchedule.LOAD_ALL_SUCCESS;
  constructor(public payload: { schedules: Schedule[] }) {}
}
export class ScheduleLoadAllFail implements Action {
  public readonly type = ESchedule.LOAD_ALL_FAIL;
  constructor(public payload: { message: string }) {}
}

export class ScheduleLoadEventsToday implements Action {
  public readonly type = ESchedule.LOAD_EVENTS_TODAY;
  constructor(public payload: FilterSchedule) {}
}
export class ScheduleLoadEventsTodaySuccess implements Action {
  public readonly type = ESchedule.LOAD_EVENTS_TODAY_SUCCESS;
  constructor(public payload: { eventsToday: Schedule[] }) {}
}
export class ScheduleLoadEventsTodayFail implements Action {
  public readonly type = ESchedule.LOAD_EVENTS_TODAY_FAIL;
  constructor(public payload: { message: string }) {}
}
export class ScheduleLoadEventsTomorrow implements Action {
  public readonly type = ESchedule.LOAD_EVENTS_TOMORROW;
  constructor(public payload: FilterSchedule) {}
}
export class ScheduleLoadEventsTomorrowSuccess implements Action {
  public readonly type = ESchedule.LOAD_EVENTS_TOMORROW_SUCCESS;
  constructor(public payload: { eventsTomorrow: Schedule[] }) {}
}
export class ScheduleLoadEventsTomorrowFail implements Action {
  public readonly type = ESchedule.LOAD_EVENTS_TOMORROW_FAIL;
  constructor(public payload: { message: string }) {}
}
export class ScheduleLoadEventsAfterTomorrow implements Action {
  public readonly type = ESchedule.LOAD_EVENTS_AFTER_TOMORROW;
  constructor(public payload: FilterSchedule) {}
}
export class ScheduleLoadEventsAfterTomorrowSuccess implements Action {
  public readonly type = ESchedule.LOAD_EVENTS_AFTER_TOMORROW_SUCCESS;
  constructor(public payload: { eventsAfterTomorrow: Schedule[] }) {}
}
export class ScheduleLoadEventsAfterTomorrowFail implements Action {
  public readonly type = ESchedule.LOAD_EVENTS_AFTER_TOMORROW_FAIL;
  constructor(public payload: { message: string }) {}
}

/**
 * DELETE Action
 */

export class ScheduleDeleteEvent implements Action {
  public readonly type = ESchedule.DELETE_EVENT;
  constructor(public payload: { delSchedule: Schedule }) {}
}
export class ScheduleDeleteEventSuccess implements Action {
  public readonly type = ESchedule.DELETE_EVENT_SUCCESS;
  constructor(public payload: { delSchedule: Schedule }) {}
}
export class ScheduleDeleteEventFail implements Action {
  public readonly type = ESchedule.DELETE_EVENT_FAIL;
  constructor(public payload: { message: string }) {}
}

export class ScheduleUndoDeleteEvent implements Action {
  public readonly type = ESchedule.UNDO_DELETE_EVENT;
  constructor(
    public payload: { delSchedule: Schedule; listRestoreSchedule: Schedule[] }
  ) {}
}
export class ScheduleUndoDeleteEventSuccess implements Action {
  public readonly type = ESchedule.UNDO_DELETE_EVENT_SUCCESS;
  constructor(
    public payload: { delSchedule: Schedule; listRestoreSchedule: Schedule[] }
  ) {}
}
export class ScheduleUndoDeleteEventFail implements Action {
  public readonly type = ESchedule.UNDO_DELETE_EVENT_FAIL;
  constructor(public payload: { message: string }) {}
}

/**
 * GET ALL CATEGORY SCHEDULE
 */
export class ScheduleCategoryLoadAll implements Action {
  public readonly type = ESchedule.LOAD_CATEGORY;
}

export class ScheduleCategoryLoadAllSuccess implements Action {
  public readonly type = ESchedule.LOAD_CATEGORY_SUCCESS;
  constructor(public payload: { categories: CategorySchedule[] }) {}
}
export class ScheduleCategoryLoadAllFail implements Action {
  public readonly type = ESchedule.LOAD_CATEGORY_FAIL;
  constructor(public payload: { message: string }) {}
}

export class ScheduleFilterByCategory implements Action {
  public readonly type = ESchedule.FILTER_BY_CATEGORY;
  constructor(public payload: { idsScheduleCategory: number[] }) {}
}

export class ScheduleFilterByCategorySuccess implements Action {
  public readonly type = ESchedule.FILTER_BY_CATEGORY_SUCCESS;
  constructor(public payload: { idsScheduleCategory: number[] }) {}
}
export class ScheduleFilterByCategoryFail implements Action {
  public readonly type = ESchedule.FILTER_BY_CATEGORY_FAIL;
  constructor(public payload: { message: string }) {}
}
// Add Schedule
export class ScheduleAdd implements Action {
  public readonly type = ESchedule.ADD;
  constructor(public payload: { schedule: AddSchedule }) {}
}
export class ScheduleAddSuccess implements Action {
  public readonly type = ESchedule.ADD_SUCCESS;
  constructor() {}
}
export class ScheduleAddFail implements Action {
  public readonly type = ESchedule.ADD_FAIL;
  constructor(public payload: { message: string }) {}
}

// Check Equipment
export class CheckEquipment implements Action {
  public readonly type = ESchedule.CHECK_EQUIPMENT;
  constructor(public payload: { equipment: CheckFreeTimeParams }) {}
}
export class CheckEquipmentSuccess implements Action {
  public readonly type = ESchedule.CHECK_EQUIPMENT_SUCCESS;
  constructor(public payload: { list: CheckFreeTimeResponse }) {}
}
export class CheckEquipmentFail implements Action {
  public readonly type = ESchedule.CHECK_EQUIPMENT_FAIL;
  constructor(public payload: { message: string }) {}
}

// filter schedule -------------------------------------------
export class ScheduleFilter implements Action {
  public readonly type = ESchedule.FILTER;
  constructor(public payload: { pagination: Pagination; filter: FilterSchedule }) {}
}

export class ScheduleFilterSuccess implements Action {
  public readonly type = ESchedule.FILTER_SUCCESS;
  constructor(public payload: { schedules: Schedule[]; pagination: Pagination ;filter:FilterSchedule}) {}
}

export class ScheduleFilterFail implements Action {
  public readonly type = ESchedule.FILTER_FAIL;
  constructor(public payload: { message: string }) {}
}

export type ScheduleAction =
  | ScheduleLoadAll
  | ScheduleLoadAllSuccess
  | ScheduleLoadAllFail
  | ScheduleLoadEventsToday
  | ScheduleLoadEventsTodayFail
  | ScheduleLoadEventsTodaySuccess
  | ScheduleLoadEventsTomorrow
  | ScheduleLoadEventsTomorrowFail
  | ScheduleLoadEventsTomorrowSuccess
  | ScheduleLoadEventsAfterTomorrow
  | ScheduleLoadEventsAfterTomorrowFail
  | ScheduleLoadEventsAfterTomorrowSuccess
  | ScheduleDeleteEvent
  | ScheduleDeleteEventSuccess
  | ScheduleDeleteEventFail
  | ScheduleUndoDeleteEvent
  | ScheduleUndoDeleteEventSuccess
  | ScheduleUndoDeleteEventFail
  | ScheduleCategoryLoadAll
  | ScheduleCategoryLoadAllSuccess
  | ScheduleCategoryLoadAllFail
  | ScheduleFilterByCategory
  | ScheduleFilterByCategorySuccess
  | ScheduleFilterByCategoryFail
  | ScheduleAdd
  | ScheduleAddSuccess
  | ScheduleAddFail
  | CheckEquipment
  | CheckEquipmentSuccess
  | CheckEquipmentFail
  | ScheduleFilter
  | ScheduleFilterSuccess
  | ScheduleFilterFail;
