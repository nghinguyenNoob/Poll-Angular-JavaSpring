import { ScheduleState } from './../reducers/schedule.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from './../app-state';

export const scheduleFeature = (state: AppState) => state.schedule;

export const getSchedule = createSelector(
  scheduleFeature,
  (state: ScheduleState) => state
);

export const getSchedules = createSelector(
  getSchedule,
  (state: ScheduleState) => state.listSchedule
);

export const getLoading = createSelector(
  getSchedule,
  (state: ScheduleState) => state.isLoading
);

export const getEventsToday = createSelector(
  getSchedule,
  (state: ScheduleState) => state.eventsToday
);

export const getFilterSchedule = createSelector(
  getSchedule,
  (state: ScheduleState) => state.filter
);
export const getEventsTomorrow = createSelector(
  getSchedule,
  (state: ScheduleState) => state.eventsTomorrow
);
export const getEventsAfterTomorrow = createSelector(
  getSchedule,
  (state: ScheduleState) => state.eventsAfterTomorrow
);

export const getDelSchedule = createSelector(
  getSchedule,
  (state: ScheduleState) => state.delSchedule
);

export const getCategories = createSelector(
  getSchedule,
  (state: ScheduleState) => state.categories
);

export const getDataFilterByCategory = createSelector(
  getSchedule,
  (state: ScheduleState) => state.scheduleFilter
);

export const getDataFilterSchedule = createSelector(
  getSchedule,
  (state: ScheduleState) => state.scheduleFilter
);

export const getDelScheduleReal = createSelector(
  getSchedule,
  (state: ScheduleState) => state.scheduleRealAfterDel
);
