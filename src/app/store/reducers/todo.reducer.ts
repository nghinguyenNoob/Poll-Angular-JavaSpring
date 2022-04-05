import { ETodo, TodoAction } from '../actions/todo.action';
import { Category } from '../models/category.i';
import { LabelledValue } from '../models/labelvalue.i';
import { Pagination } from '../models/pagination.i';
import { FilterTodo } from '../models/todo-filter.i';
import { Todo } from '../models/todo.i';

export interface TodoState {
  userId : number;
  todos: Todo[];
  pagination: Pagination;
  currentTodo?: Todo;
  isLoading: boolean;
  error?: string;
  listImportance: LabelledValue<string>[];
  listCategory?: Category[];
  filter: FilterTodo;
}

const initTodoState: TodoState = {
  userId : 1,
  todos: [],
  pagination: {
    page: 1,
    pageSize: 10,
    total : 20,
  },
  filter :{
    textSearch :"",
    category : [],
    status :"",
    fromDate :"",
    importance :"",
    toDate : ""
  },
  isLoading: false,
  listImportance :[
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
  ]
};
export function todoReducer(
  state = initTodoState,
  action: TodoAction
): TodoState {
  switch (action.type) {
    case ETodo.ADD:
      return {
        ...state,
        isLoading: true,
      };
    case ETodo.ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ETodo.ADD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case ETodo.DELETE:
      return {
        ...state,
        isLoading: true,
      };
    case ETodo.DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ETodo.DELETE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case ETodo.UPDATE:
      return {
        ...state,
        isLoading: true,
      };
    case ETodo.UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ETodo.UPDATE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case ETodo.Filter:
      return {
        ...state,
        isLoading: true,
      };
    case ETodo.Filter_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload.todos,
        pagination: action.payload.pagination,
        filter : action.payload.filter,
      };
    case ETodo.Filter_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
      case ETodo.LOAD_CATEGORY:
      return {
        ...state,
        isLoading: true,
      };
    case ETodo.LOAD_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listCategory: action.payload.listCategory,
      };
    case ETodo.LOAD_CATEGORY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
