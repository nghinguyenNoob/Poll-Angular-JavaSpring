import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { addTodoValue } from '../models/addtodo.i';
import { Category } from '../models/category.i';
import { Page } from '../models/page.i';
import { Pagination } from '../models/pagination.i';
import { FilterTodo } from '../models/todo-filter.i';
import { Todo } from '../models/todo.i';
import { TodoDetail } from '../models/detail-todo';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  public getAllTodo(
    pagination: Pagination,
    filters: FilterTodo
  ): Observable<Page<Todo>> {
    const page = pagination ? pagination.page : 1;
    const pageSize = pagination ? pagination.pageSize : 10;
    const {
      textSearch = '',
      fromDate = '',
      toDate = '',
      importance = '',
      status = '',
      sort,
      category=[],
    } = filters || {};
    const httpFilter = {};
    if(importance !=""){
      httpFilter['importance']=importance;
    }
    if(category.length > 0){
      httpFilter['todoCategoryId']=category;
    }
    if(status !=""){
      httpFilter['status'] = status;
    }
    if (textSearch !== '') {
      httpFilter['search'] = textSearch;
    }
    if (fromDate !== '') {
      httpFilter['dateFrom'] = fromDate;
    }
    if (toDate !== '') {
      httpFilter['dateTo'] = toDate;
    }
    if (sort != [] && sort != undefined) {
      sort.forEach((e) => {
        if (e.sort != 'none')
          if (e.name !== null) {
            httpFilter['sortName'] = e.name;
            httpFilter['sortBy'] = e.sort;
          }
      });
    }
    const params = new HttpParams({
      fromObject: {
        ...httpFilter,
        pageSize: String(pageSize),
        page: String(page),
      },
    });
    return this.http.get<Page<Todo>>(environment.urlTodo, { params : params});
  }
  addTodo(todo: addTodoValue) :Observable<void>{
    return this.http.post<void>(environment.urlTodo, todo);
  }
  updateTodo(todo: Todo) {
    return of();
  }
  deleteTodo(id: number) {
    return of();
  }
  getAllCategoryByUser(userId : number):Observable<Category[]>{
    return this.http.get<Category[]>(environment.urlCategory);
  }

  getDetailTodo(todoId : number) : Observable<TodoDetail>{
    return this.http.get<TodoDetail>(environment.urlDetailTodo+ `/${todoId}`);
  }
}
