import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CategoryByUser, TodoAdd, TodoFilter } from '../actions/todo.action';
import { AppState } from '../app-state';
import { addTodoValue } from '../models/addtodo.i';
import { Pagination } from '../models/pagination.i';
import { FilterTodo } from '../models/todo-filter.i';
import { getTodo } from '../selectors/todo.selector';

@Injectable({
  providedIn: 'root',
})
export class StoreFacade {
  constructor(private store: Store<AppState>) {
    this.getValuePaginationAndFilter();
    this.dispatchCategory();
  }
  public filter: FilterTodo;
  public pagination: Pagination;
  //  Lấy giá trị khởi tạo từ store có hoặc không.
  getValuePaginationAndFilter() {
    this.store.select(getTodo).subscribe((todo) => {
      this.filter = todo.filter;
      this.pagination = todo.pagination;
    });
  }
  dispatchCategory(userId: number = 1) {
    this.store.dispatch(new CategoryByUser({ userId: userId }));
  }
  // thực hiện hành động push dữ liệu vào store từ action
  filterTodo(pagination: Pagination, filter: FilterTodo) {
    this.store.dispatch(new TodoFilter({ pagination, filter }));
  }
  // thực hiện hành động push dữ liệu vào store từ action
  addTodo(todo: addTodoValue) {
    this.store.dispatch(new TodoAdd({ todo }));
  }
  // get value from store
  getValueTodoTablePage() {
    return this.store.select(getTodo);
  }
}
