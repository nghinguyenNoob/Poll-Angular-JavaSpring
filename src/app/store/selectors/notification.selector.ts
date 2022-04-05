import { NotificationState } from './../reducers/notification.reducer';
import { AppState } from '../app-state';
import { createSelector } from '@ngrx/store';

export const notificationFeture = (state: AppState) => state.notification;

export const getnotification = createSelector(
  notificationFeture,
  (state: NotificationState) => state
);
export const getCountNotification = createSelector(getnotification, (state: NotificationState) => state.countTotal);
export const getIsRead = createSelector(getnotification, (state: NotificationState) => state.isRead);
