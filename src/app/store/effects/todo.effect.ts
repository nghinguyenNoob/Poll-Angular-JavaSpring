import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { MessageConstants } from '../../shared/constants/message.contants';
import { of } from 'rxjs';
import {
  CategoryByUser,
  CategoryByUserSuccess,
  ETodo,
  TodoAdd,
  TodoAddFail,
  TodoAddSuccess,
  TodoDeleteFail,
  TodoDeleteSuccess,
  TodoFilter,
  TodoFilterFail,
  TodoFilterSuccess,
  TodoUpdateFail,
  TodoUpdateSuccess,
} from '../actions/todo.action';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.i';
import { Page } from '../models/page.i';
import { Category } from '../models/category.i';

@Injectable()
export class TodoEffect {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  getAllTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ETodo.Filter),
      mergeMap((action: TodoFilter) =>
        this.todoService
          .getAllTodo(action.payload.pagination, action.payload.filter)
          .pipe(map(
              (res: Page<Todo>) =>
                new TodoFilterSuccess({
                  todos: res.data,
                  pagination: {
                    page: res.page,
                    pageSize: res.pageSize,
                    total: res.total,
                  },
                  filter : action.payload.filter,
                })
            ),
            catchError((error) =>
              of(
                new TodoFilterFail({
                  message: MessageConstants.TODO_FILTER_FAIL,
                })
              )
            )
          )
      )
    )
  );
  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ETodo.ADD),
      mergeMap((action: TodoAdd) =>
        this.todoService.addTodo(action.payload.todo).pipe(
          map(() => new TodoAddSuccess()),
          catchError((error) =>
            of(
              new TodoAddFail({
                message: MessageConstants.TODO_ADD_FAIL,
              })
            )
          )
        )
      )
    )
  );
  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ETodo.UPDATE),
      mergeMap((action: Todo) =>
        this.todoService.updateTodo(action).pipe(
          map(() => new TodoUpdateSuccess()),
          catchError((error) =>
            of(
              new TodoUpdateFail({
                message: MessageConstants.TODO_UPDATE_FAIL,
              })
            )
          )
        )
      )
    )
  );
  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ETodo.DELETE),
      mergeMap((id: number) =>
        this.todoService.deleteTodo(id).pipe(
          map(() => new TodoDeleteSuccess()),
          catchError((error) =>
            of(
              new TodoDeleteFail({
                message: MessageConstants.TODO_DELETE_FAIL,
              })
            )
          )
        )
      )
    )
  );
  getAllCategoryByUser = createEffect(() =>
    this.actions$.pipe(
      ofType(ETodo.LOAD_CATEGORY),
      mergeMap((id: number) =>
        this.todoService
          .getAllCategoryByUser(id)
          .pipe(map(
              (res: Category[]) =>
                new CategoryByUserSuccess({
                 listCategory : res
                })
            ),
            catchError((error) =>
              of(
                new TodoFilterFail({
                  message: MessageConstants.TODO_FILTER_FAIL,
                })
              )
            )
          )
      )
    )
  );
}
