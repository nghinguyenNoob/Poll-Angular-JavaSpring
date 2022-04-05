import { SnackbarState, snackbarReducer } from './reducers/snackbar.reducer';
import { scheduleReducer, ScheduleState } from './reducers/schedule.reducer';
import {
  noticeReducer,
  NotificationState,
} from './reducers/notification.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer, TodoState } from './reducers/todo.reducer';
export interface AppState {
  todo: TodoState;
  notification: NotificationState;
  schedule: ScheduleState;
  snackbar: SnackbarState;
}

export const appReducer: ActionReducerMap<AppState> = {
  todo: todoReducer,
  notification: noticeReducer,
  schedule: scheduleReducer,
  snackbar: snackbarReducer,
};
