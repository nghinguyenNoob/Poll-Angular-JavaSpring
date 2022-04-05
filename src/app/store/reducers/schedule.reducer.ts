import { ESchedule, ScheduleAction } from './../actions/schedule.action';
import {
  Schedule,
  FilterSchedule,
  CategorySchedule,
} from './../models/schedule.i';
import {
  getDate,
  getDay,
  getMonth,
  getYear,
  isWithinInterval,
  startOfDay,
  endOfDay,
} from 'date-fns';
import * as _ from 'lodash';
import { Pagination } from '../models/pagination.i';
import { LabelledValue } from '../models/labelvalue.i';
import { CheckFreeTimeResponse } from '../models/add-schedule.i';
export interface ScheduleState {
  userId: number;
  listSchedule: Schedule[];
  pagination: Pagination;
  currentSchedule?: Schedule;
  listImportance: LabelledValue<string>[];
  isLoading: boolean;
  error?: string;
  filter: FilterSchedule;
  eventsToday: Schedule[];
  eventsTomorrow: Schedule[];
  eventsAfterTomorrow: Schedule[];
  delSchedule?: Schedule[];
  categories: CategorySchedule[];
  scheduleFilter: Schedule[];
  listEquipment?;
  scheduleRealAfterDel?: Schedule;
}
const initScheduleState: ScheduleState = {
  userId: 1,
  listSchedule: [],
  pagination: {
    page: 1,
    pageSize: 10,
    total: 20,
  },
  listImportance: [
    {
      label: 'Hight',
      value: 'Hight',
    },
    {
      label: 'Medium',
      value: 'Medium',
    },
    {
      label: 'Low',
      value: 'Low',
    },
  ],
  isLoading: false,
  filter: {
    textSearch: '',
    importance: '',
    category: [],
    from: '',
    to: '',
    fromDateList: '',
    toDateList: '',
  },
  eventsToday: [],
  eventsTomorrow: [],
  eventsAfterTomorrow: [],
  delSchedule: [],
  categories: [],
  scheduleFilter: [],
};

export function scheduleReducer(
  state = initScheduleState,
  action: ScheduleAction
) {
  switch (action.type) {
    case ESchedule.LOAD_ALL:
      return {
        ...state,
        isLoading: true,
        filter: action.payload,
      };
    case ESchedule.LOAD_ALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listSchedule: action.payload.schedules,
      };
    case ESchedule.LOAD_ALL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case ESchedule.LOAD_EVENTS_TODAY:
      return {
        ...state,
        isLoading: true,
        filter: action.payload,
      };
    case ESchedule.LOAD_EVENTS_TODAY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        eventsToday: action.payload.eventsToday,
      };
    case ESchedule.LOAD_EVENTS_TODAY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };

    case ESchedule.LOAD_EVENTS_TOMORROW:
      return {
        ...state,
        isLoading: true,
        filter: action.payload,
      };
    case ESchedule.LOAD_EVENTS_TOMORROW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        eventsTomorrow: action.payload.eventsTomorrow,
      };
    case ESchedule.LOAD_EVENTS_TOMORROW_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case ESchedule.LOAD_EVENTS_AFTER_TOMORROW:
      return {
        ...state,
        isLoading: true,
        filter: action.payload,
      };
    case ESchedule.LOAD_EVENTS_AFTER_TOMORROW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        eventsAfterTomorrow: action.payload.eventsAfterTomorrow,
      };
    case ESchedule.LOAD_EVENTS_AFTER_TOMORROW_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };

    case ESchedule.DELETE_EVENT:
      return {
        ...state,
        isLoading: true,
      };
    case ESchedule.DELETE_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        delSchedule: state.listSchedule.filter(
          (event) => event.scheduleId === action.payload.delSchedule.scheduleId
        ),
        scheduleRealAfterDel: action.payload.delSchedule,
        listSchedule: state.listSchedule.filter(
          (event) => event.scheduleId !== action.payload.delSchedule.scheduleId
          // && event.createdBy !== action.payload.delSchedule.createdBy
        ),
        eventsToday: state.eventsToday.filter(
          (event) => event.scheduleId !== action.payload.delSchedule.scheduleId
          // && event.createdBy !== action.payload.delSchedule.createdBy
        ),
        eventsTomorrow: state.eventsTomorrow.filter(
          (event) => event.scheduleId !== action.payload.delSchedule.scheduleId
          // && event.createdBy !== action.payload.delSchedule.createdBy
        ),
        eventsAfterTomorrow: state.eventsAfterTomorrow.filter(
          (event) => event.scheduleId !== action.payload.delSchedule.scheduleId
          // && event.createdBy !== action.payload.delSchedule.createdBy
        ),
        scheduleFilter: state.scheduleFilter.filter(
          (event) => event.scheduleId !== action.payload.delSchedule.scheduleId
        ),
      };
    case ESchedule.DELETE_EVENT_FAIL:
      return {
        ...state,
        isLoading: true,
        error: action.payload.message,
      };
    case ESchedule.UNDO_DELETE_EVENT:
      return {
        ...state,
        isLoading: false,
      };
    case ESchedule.UNDO_DELETE_EVENT_SUCCESS:
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const afterTomorrow = new Date(today);
      afterTomorrow.setDate(afterTomorrow.getDate() + 2);
      return {
        ...state,
        isLoading: false,
        delSchedule: [],
        scheduleRealAfterDel: null,
        listSchedule: [
          ...state.listSchedule.concat(
            ...action.payload.listRestoreSchedule.map((rs) => {
              return { ...rs, users: JSON.stringify(rs.users) };
            })
          ),
        ],
        eventsToday: isWithinInterval(new Date(today), {
          start: startOfDay(new Date(action.payload.delSchedule.timeStart)),
          end: endOfDay(new Date(action.payload.delSchedule.dueTime)),
        })
          ? [
              ...state.eventsToday,
              {
                ...action.payload.delSchedule,
                users: JSON.stringify(action.payload.delSchedule.users),
              },
            ]
          : [...state.eventsToday],
        eventsTomorrow: isWithinInterval(tomorrow, {
          start: startOfDay(new Date(action.payload.delSchedule.timeStart)),
          end: endOfDay(new Date(action.payload.delSchedule.dueTime)),
        })
          ? [
              ...state.eventsTomorrow,
              {
                ...action.payload.delSchedule,
                users: JSON.stringify(action.payload.delSchedule.users),
              },
            ]
          : [...state.eventsTomorrow],
        eventsAfterTomorrow: isWithinInterval(afterTomorrow, {
          start: startOfDay(new Date(action.payload.delSchedule.timeStart)),
          end: endOfDay(new Date(action.payload.delSchedule.dueTime)),
        })
          ? [
              ...state.eventsAfterTomorrow,
              {
                ...action.payload.delSchedule,
                users: JSON.stringify(action.payload.delSchedule.users),
              },
            ]
          : [...state.eventsAfterTomorrow],
        scheduleFilter: [
          ...state.scheduleFilter,
          {
            ...action.payload.delSchedule,
            users: JSON.stringify(action.payload.delSchedule.users),
          },
        ],
      };

    case ESchedule.LOAD_CATEGORY:
      return {
        ...state,
        isLoading: true,
      };
    case ESchedule.LOAD_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload.categories.map((cate) => {
          return {
            ...cate,
            colors: colors[randomObj(colors)],
          };
        }),
      };
    case ESchedule.LOAD_CATEGORY_FAIL:
      return {
        ...state,
        isLoading: true,
        error: action.payload.message,
      };

    case ESchedule.ADD:
      return {
        ...state,
        isLoading: true,
      };
    case ESchedule.ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ESchedule.ADD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };

    case ESchedule.CHECK_EQUIPMENT:
      return {
        ...state,
        isLoading: true,
      };
    case ESchedule.FILTER_BY_CATEGORY:
      return {
        ...state,
        isLoading: true,
      };
    case ESchedule.FILTER_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        scheduleFilter: _.filter(state.listSchedule, (v: Schedule) =>
          _.includes(action.payload.idsScheduleCategory, v.scheduleCategoryId)
        ),
      };
    case ESchedule.FILTER_BY_CATEGORY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case ESchedule.CHECK_EQUIPMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listEquipment: action.payload.list,
      };
    case ESchedule.CHECK_EQUIPMENT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case ESchedule.FILTER:
      return {
        ...state,
        isLoading: true,
      };
    case ESchedule.FILTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listSchedule: action.payload.schedules,
        pagination: action.payload.pagination,
        filter: action.payload.filter,
      };
    case ESchedule.FILTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
export const colors = {
  aqua: { primary: '#00ffff', secondary: '#D1E8FF' },
  azure: { primary: '#f0ffff', secondary: '#D1E8FF' },
  beige: { primary: '#f5f5dc', secondary: '#E9F5DC' },
  blue: { primary: '#0000ff', secondary: '#0080FF' },
  brown: { primary: '#a52a2a', secondary: '#A52A68' },
  cyan: { primary: '#00ffff', secondary: '#0080FF' },
  darkblue: { primary: '#00008b', secondary: '#00468B' },
  darkcyan: { primary: '#008b8b', secondary: '#008B46' },
  darkgrey: { primary: '#a9a9a9', secondary: '#A9A9A9' },
  darkgreen: { primary: '#006400', secondary: '#006432' },
  darkkhaki: { primary: '#bdb76b', secondary: '#9ABD6B' },
  darkmagenta: { primary: '#8b008b', secondary: '#8B0046' },
  darkolivegreen: { primary: '#556b2f', secondary: '#376B2F' },
  darkorange: { primary: '#ff8c00', secondary: '#F3FF00' },
  darkorchid: { primary: '#9932cc', secondary: '#CC32B2' },
  darkred: { primary: '#8b0000', secondary: '#8B4600' },
  darksalmon: { primary: '#e9967a', secondary: '#E9CD7A' },
  darkviolet: { primary: '#9400d3', secondary: '#D300A8' },
  fuchsia: { primary: '#ff00ff', secondary: '#FF0080' },
  gold: { primary: '#ffd700', secondary: '#A7FF00' },
  green: { primary: '#008000', secondary: '#008040' },
  indigo: { primary: '#4b0082', secondary: '#820078' },
  khaki: { primary: '#f0e68c', secondary: '#C8F08C' },
  lightblue: { primary: '#add8e6', secondary: '#ADBCE6' },
  lightcyan: { primary: '#e0ffff', secondary: '#E0F0FF' },
  lightgreen: { primary: '#90ee90', secondary: '#90EEBF' },
  lightgrey: { primary: '#d3d3d3', secondary: '#D3D3D3' },
  lightpink: { primary: '#ffb6c1', secondary: '#FFD0B6' },
  lightyellow: { primary: '#ffffe0', secondary: '#F0FFE0' },
  lime: { primary: '#00ff00', secondary: '#00FF80' },
  magenta: { primary: '#ff00ff', secondary: '#FF0080' },
  maroon: { primary: '#800000', secondary: '#804000' },
  navy: { primary: '#000080', secondary: '#400080' },
  olive: { primary: '#808000', secondary: '#408000' },
  orange: { primary: '#ffa500', secondary: '#FF2600' },
  pink: { primary: '#ffc0cb', secondary: '#FFD4C0' },
  purple: { primary: '#800080', secondary: '#800040' },
  red: { primary: '#ff0000', secondary: '#FF8000' },
  yellow: { primary: '#ffff00', secondary: '#80FF00' },
};
export default function randomObj(obj: any) {
  const objKeys = Object.keys(obj);
  return objKeys[Math.floor(Math.random() * objKeys.length)];
}
