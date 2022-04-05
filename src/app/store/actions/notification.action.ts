import { Action } from '@ngrx/store';
import { FilterNotification } from '../models/notificaiton-filter.i';
import { Notification } from '../models/notification.i';
import { StatusNotification } from '../models/status-notification.e';
import { EventNotification } from './../models/event-notification.i';
import { NotificationData } from './../models/notification.i';
import { Pagination } from './../models/pagination.i';
export enum ENotification {
  LOADING = '[Notification] Loading',
  LOAD_SUCCESS = '[Notification] load success',
  LOAD_FAIL = '[Notification] load fail',

  ADD = '[Notification] Adding',
  ADD_SUCCESS = '[Notification] add success',
  ADD_FAIL = '[Notification] add fail',

  UPDATE = '[Notification] Updating',
  UPDATE_SUCCESS = '[Notification] update success',
  UPDATE_FAIL = '[Notification] update fail',

  DELETE = '[Notification] Deleting',
  DELETE_SUCCESS = '[Notification] delete success',
  DELETE_FAIL = '[Notification] delete fail',

  LOAD_ALL = '[Notification] Loading All',
  LOAD_ALL_SUCCESS = '[Notification] load all success',
  LOAD_ALL_FAIL = '[Notification] load all fail',

  FILTER_STATUS = '[Notification] Filter Status Notification',
  FILTER_STATUS_SUCCESS = '[Notification] Filter status notification success',
  FILTER_STATUS_FAIL = '[Notification] Filter status notification fail',

  FILTER_EVENT = '[Notification] Filter Event Notification',
  FILTER_EVENT_SUCCESS = '[Notification] Filter event notification success',
  FILTER_EVENT_FAIL = '[Notification] Filter event notification fail',

  GET_EVENT = '[Notification] Get All Event',
  GET_EVENT_SUCCESS = '[NOTIFICATION] Get Event notification success',
  GET_EVENT_FAIL = '[NOTIFICATION] Get Event notification fail',

  COUNT_NOTIFICATIONS = '[Notification] Count notification ',
  COUNT_NOTIFICATIONS_SUCCESS = '[Notification] Count notification  success',
  COUNT_NOTIFICATIONS_FAIL = '[Notification] Count notification  fail',
}

export class NotificationLoading implements Action {
  public readonly type = ENotification.LOADING;
}

/**
 * Action : Add
 */
export class NotificationAdd implements Action {
  public readonly type = ENotification.ADD;
}
export class NotificationAddSuccess implements Action {
  public readonly type = ENotification.ADD_SUCCESS;
  constructor(public payload: { notification: Notification }) {}
}
export class NotificationAddFail implements Action {
  public readonly type = ENotification.ADD_FAIL;
  constructor(public payload: { message: string }) {}
}

/**
 * Action : GetAll
 */
export class NotificationLoadAll implements Action {
  public readonly type = ENotification.LOAD_ALL;
  constructor(
    public payload: { pagination: Pagination; filter: FilterNotification }
  ) {}
}
export class NotificationLoadAllSuccess implements Action {
  public readonly type = ENotification.LOAD_ALL_SUCCESS;
  constructor(
    public payload: {
      notifications: NotificationData;
      filter: FilterNotification;
    }
  ) {}
}
export class NotificationLoadAllFail implements Action {
  public readonly type = ENotification.LOAD_ALL_FAIL;
  constructor(public payload: { message: string }) {}
}
/**
 * Action :Update
 */
export class NotificationUpdate implements Action {
  public readonly type = ENotification.UPDATE;
}
export class NotificationUpdateSuccess implements Action {
  public readonly type = ENotification.UPDATE_SUCCESS;
  constructor(public payload: { currentNotification: Notification }) {}
}
export class NotificationUpdateFail implements Action {
  public readonly type = ENotification.UPDATE_FAIL;
  constructor(public payload: { message: string }) {}
}
/**
 * Action : DELETE
 */
export class NotificationDelete implements Action {
  public readonly type = ENotification.DELETE;
}
export class NotificationDeleteSuccess implements Action {
  public readonly type = ENotification.DELETE_SUCCESS;
  constructor(public payload: { currentNotification: Notification }) {}
}
export class NotificationDeleteFail implements Action {
  public readonly type = ENotification.DELETE_FAIL;
  constructor(public payload: { message: string }) {}
}

/**
 * Action : FILTER STATUS
 */
export class NotificationFilterStatus implements Action {
  public readonly type = ENotification.FILTER_STATUS;
  constructor(
    public payload: { pagination: Pagination; status: StatusNotification }
  ) {}
}
export class NotificationFilterStatusSuccess implements Action {
  public readonly type = ENotification.FILTER_STATUS_SUCCESS;
  constructor(public payload: { notifications: NotificationData }) {}
}
export class NotificationFilterStatusFail implements Action {
  public readonly type = ENotification.FILTER_STATUS_FAIL;
  constructor(public payload: { message: string }) {}
}

/**
 * Action : FILTER EVENT
 */
export class NotificationFilterEvent implements Action {
  public readonly type = ENotification.FILTER_EVENT;
  constructor(
    public payload: { pagination: Pagination; event: EventNotification }
  ) {}
}
export class NotificationFilterEventSuccess implements Action {
  public readonly type = ENotification.FILTER_EVENT_SUCCESS;
  constructor(public payload: { notifications: NotificationData }) {}
}
export class NotificationFilterEventFail implements Action {
  public readonly type = ENotification.FILTER_EVENT_FAIL;
  constructor(public payload: { message: string }) {}
}

/**
 * Action : GET EVENT
 */
export class NotificationGetEvent implements Action {
  public readonly type = ENotification.GET_EVENT;
  constructor(public payload: {}) {}
}
export class NotificationGetEventSuccess implements Action {
  public readonly type = ENotification.GET_EVENT_SUCCESS;
  constructor(public payload: { event: EventNotification[] }) {}
}
export class NotificationGetEventFail implements Action {
  public readonly type = ENotification.GET_EVENT_FAIL;
  constructor(public payload: { message: string }) {}
}
// Count
export class CountNotification implements Action {
  public readonly type = ENotification.COUNT_NOTIFICATIONS;
  constructor(public payload: {}) {}
}
export class CountNotificationSuccess implements Action {
  public readonly type = ENotification.COUNT_NOTIFICATIONS_SUCCESS;
  constructor(public payload: { total: number }) {}
}
export class CountNotificationFail implements Action {
  public readonly type = ENotification.COUNT_NOTIFICATIONS_FAIL;
  constructor(public payload: { message: string }) {}
}

export type NotificationAction =
  | NotificationAdd
  | NotificationAddSuccess
  | NotificationAddFail
  | NotificationLoadAll
  | NotificationLoadAllSuccess
  | NotificationLoadAllFail
  | NotificationUpdate
  | NotificationUpdateSuccess
  | NotificationUpdateFail
  | NotificationDelete
  | NotificationDeleteSuccess
  | NotificationAddFail
  | NotificationFilterEvent
  | NotificationFilterEventSuccess
  | NotificationFilterEventFail
  | NotificationFilterStatus
  | NotificationFilterStatusFail
  | NotificationFilterStatusSuccess
  | NotificationGetEvent
  | NotificationGetEventSuccess
  | NotificationGetEventFail
  | CountNotification
  | CountNotificationSuccess
  | CountNotificationFail;
