import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { EventNotification } from '../models/event-notification.i';
import { FilterNotification } from '../models/notificaiton-filter.i';
import { StatusNotification } from '../models/status-notification.e';
import { getCountNotification, getnotification } from '../selectors/notification.selector';
import {
  CountNotification,
  NotificationFilterEvent,
  NotificationFilterStatus,
  NotificationGetEvent,
  NotificationLoadAll,
} from './../actions/notification.action';
import { Pagination } from './../models/pagination.i';
@Injectable({
  providedIn: 'root',
})
export class NotificationStoreFacade {
  constructor(private store: Store<AppState>) {
    this.getValueNotification();
    this.loadCountNotification();
  }

  public pagination: Pagination;
  getValueNotification() {
    this.store.select(getnotification).subscribe((notification) => {
      this.pagination = notification.pagination;
    })
  }
  loadAllNotification(pagination: Pagination, filter: FilterNotification) {
    this.store.dispatch(new NotificationLoadAll({ pagination, filter }));
  }
  filterNotificationByStatus(pagination: Pagination, status: StatusNotification) {

    this.store.dispatch(new NotificationFilterStatus({ pagination, status }));
  }
  filterNotificationByEvent(pagination: Pagination, event: EventNotification) {
    this.store.dispatch(new NotificationFilterEvent({ pagination, event }));
  }
  getValueTablePage() {
    return this.store.select(getnotification);
  }
  loadValueEvent(){
    this.store.dispatch(new NotificationGetEvent({}));
  }

  loadCountNotification(){
    this.store.dispatch(new CountNotification({}));
  }
  getValueCountNotification(){
    return this.store.select(getCountNotification);
  }
}
