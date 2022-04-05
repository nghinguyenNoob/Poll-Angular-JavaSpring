import { Action } from '@ngrx/store';
import { addTodoValue } from '../models/addtodo.i';
import { Category } from '../models/category.i';
import { Pagination } from '../models/pagination.i';
import { FilterTodo } from '../models/todo-filter.i';
import { Todo } from '../models/todo.i';

export enum ETodo {
  ADD = '[TODO] adding',
  ADD_SUCCESS = '[TODO] add success',
  ADD_FAIL = '[TODO] add fail',

  UPDATE = '[TODO] updating',
  UPDATE_SUCCESS = '[TODO] update success',
  UPDATE_FAIL = '[TODO] update fail',

  DELETE = '[TODO] deleting',
  DELETE_SUCCESS = '[TODO] delete success',
  DELETE_FAIL = '[TODO] delete fail',

  Filter = '[TODO] filtering todo',
  Filter_SUCCESS = '[TODO] filter todo success',
  Filter_FAIL = '[TODO] filter todo fail',

  LOAD_CATEGORY = '[CATEGORY] loading category by user',
  LOAD_CATEGORY_SUCCESS = '[CATEGORY] load category by user success',
  LOAD_CATEGORY_FAIL = '[CATEGORY] load category by user fail',
}
// Add todo
export class TodoAdd implements Action {
  public readonly type = ETodo.ADD;
  constructor(public payload: { todo: addTodoValue }) {}
}
export class TodoAddSuccess implements Action {
  public readonly type = ETodo.ADD_SUCCESS;
  constructor() {}
}

export class TodoAddFail implements Action {
  public readonly type = ETodo.ADD_FAIL;
  constructor(public payload: { message: string }) {}
}
// Update todo

export class TodoUpdate implements Action {
  public readonly type = ETodo.UPDATE;
  constructor(public payload: { todo: Todo }) {}
}

export class TodoUpdateSuccess implements Action {
  public readonly type = ETodo.UPDATE_SUCCESS;
  constructor() {}
}

export class TodoUpdateFail implements Action {
  public readonly type = ETodo.UPDATE_FAIL;
  constructor(public payload: { message: string }) {}
}

// Delete todo -------------------------------------------

export class TodoDelete implements Action {
  public readonly type = ETodo.DELETE;
  constructor(public payload: { id: number }) {}
}

export class TodoDeleteSuccess implements Action {
  public readonly type = ETodo.DELETE_SUCCESS;
  constructor() {}
}

export class TodoDeleteFail implements Action {
  public readonly type = ETodo.DELETE_FAIL;
  constructor(public payload: { message: string }) {}
}

// filter todo -------------------------------------------
export class TodoFilter implements Action {
  public readonly type = ETodo.Filter;
  constructor(public payload: { pagination: Pagination; filter: FilterTodo }) {}
}

export class TodoFilterSuccess implements Action {
  public readonly type = ETodo.Filter_SUCCESS;
  constructor(public payload: { todos: Todo[]; pagination: Pagination ;filter:FilterTodo}) {}
}

export class TodoFilterFail implements Action {
  public readonly type = ETodo.Filter_FAIL;
  constructor(public payload: { message: string }) {}
}

// category by user  -------------------------------------------
export class CategoryByUser implements Action {
  public readonly type = ETodo.LOAD_CATEGORY;
  constructor(public payload: { userId: number }) {}
}

export class CategoryByUserSuccess implements Action {
  public readonly type = ETodo.LOAD_CATEGORY_SUCCESS;
  constructor(public payload: { listCategory: Category[] }) {}
}

export class CategoryByUserFail implements Action {
  public readonly type = ETodo.LOAD_CATEGORY_FAIL;
  constructor(public payload: { message: string }) {}
}
export type TodoAction =
  | TodoAdd
  | TodoAddSuccess
  | TodoAddFail
  | TodoUpdate
  | TodoUpdateFail
  | TodoUpdateSuccess
  | TodoDelete
  | TodoDeleteFail
  | TodoDeleteSuccess
  | TodoFilter
  | TodoFilterFail
  | TodoFilterSuccess
  | CategoryByUser
  | CategoryByUserSuccess
  | CategoryByUserFail;
