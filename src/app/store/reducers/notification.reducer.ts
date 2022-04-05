import {
  ENotification,
  NotificationAction,
} from './../actions/notification.action';
import { EventNotification } from './../models/event-notification.i';
import { Notification } from './../models/notification.i';
import { Pagination } from './../models/pagination.i';
export interface NotificationState {
  listNotification: Notification[];
  pagination: Pagination;
  searchText?: string;
  currentNotification?: Notification;
  isLoading: boolean;
  error?: string;
  countTotal?: number;
  /**
   * Type event Notification
   */
  listEvent: EventNotification[];
  selectedEvent: string;
  /**
   * Status Notification
   */
  isRead: number;
}

const initNotificationState: NotificationState = {
  listNotification: [],
  pagination: {
    total: 0,
    page: 1,
    pageSize: 10,
  },
  isLoading: false,
  listEvent: [],
  selectedEvent: '',
  isRead: -1,
};

export function noticeReducer(
  state = initNotificationState,
  action: NotificationAction
) {
  switch (action.type) {
    /**
     * TODO : FETCH DATA
     */
    case ENotification.LOAD_ALL:
      return {
        ...state,
        isLoading: true,
      };
    case ENotification.LOAD_ALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listNotification: action.payload.notifications.data,
        isRead: action.payload.filter.status,
        selectedEvent: action.payload.filter.event,
        pagination: {
          total: action.payload.notifications.total,
          page: action.payload.notifications.page,
          pageSize: action.payload.notifications.pageSize,
        },
      };
    case ENotification.LOAD_ALL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };

    /**
     * TODO : FILTER DATA
     *
     */
    case ENotification.FILTER_EVENT:
      return {
        ...state,
        isLoading: true,
      };
    case ENotification.FILTER_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listNotification: action.payload.notifications.data,
        pagination: {
          total: action.payload.notifications.total,
          page: action.payload.notifications.page,
          pageSize: action.payload.notifications.pageSize,
        },
      };
    case ENotification.FILTER_STATUS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };

    /**
     * TODO : FILTER BY STATUS Notification
     */
    case ENotification.FILTER_STATUS:
      return {
        ...state,
        isLoading: true,
      };
    case ENotification.FILTER_STATUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listNotification: action.payload.notifications.data,
        pagination: {
          total: action.payload.notifications.total,
          page: action.payload.notifications.page,
          pageSize: action.payload.notifications.pageSize,
        },
      };
    case ENotification.FILTER_STATUS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case ENotification.GET_EVENT:
      return {
        ...state,
        isLoading: true,
      };
    case ENotification.GET_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listEvent: action.payload.event,
      };
    case ENotification.GET_EVENT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    // count
    case ENotification.COUNT_NOTIFICATIONS:
      return {
        ...state,
        isLoading: true,
      };
    case ENotification.COUNT_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        countTotal: action.payload.total,
      };
    case ENotification.COUNT_NOTIFICATIONS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
