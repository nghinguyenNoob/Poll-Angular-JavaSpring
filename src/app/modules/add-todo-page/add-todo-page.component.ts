import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  ETodo,
  TodoAddFail,
  TodoAddSuccess,
} from '../../store/actions/todo.action';
import { addTodoValue } from '../../store/models/addtodo.i';
import { configButton } from '../../store/models/button.i';
import { Category } from '../../store/models/category.i';
import { LabelInterface } from '../../store/models/label.i';
import { LabelledValue } from '../../store/models/labelvalue.i';
import { StoreFacade } from '../../store/store-facades/todo.store-facade';
@Component({
  selector: 'app-add-todo-page',
  templateUrl: './add-todo-page.component.html',
  styleUrls: ['./add-todo-page.component.scss'],
})
export class AddTodoPageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  constructor(
    private storeFacade: StoreFacade,
    private actions$: Actions,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.storeFacade.getValueTodoTablePage().subscribe((todo) => {
      this.CategoryArray = todo.listCategory;
      this.dataCategory = [];
      if (typeof this.CategoryArray != 'undefined' && this.CategoryArray.length >0) {
          this.CategoryArray.forEach((e) => {
            let category: LabelledValue<string> = {
              value: String(e.categoryId),
              label: e.categoryName,
            };
            this.dataCategory.push(category);
          });
      }
    });

    // navigate when success
    this.actions$
      .pipe(
        ofType<TodoAddSuccess>(ETodo.ADD_SUCCESS),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        this.router.navigate(['/todo']);
        this.openSnackBar('Add Success !!!','Success !!!');
      });
    // alert when add fail
    this.actions$
      .pipe(ofType<TodoAddFail>(ETodo.ADD_FAIL), takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.openSnackBar('Add Fail !!!','Fail !!!');
      });
  }
  openSnackBar(message: string,action : string) {
    this._snackBar.open(message, action, {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  public dataCategory: LabelledValue<string>[] = [];
  public data: addTodoValue;
  public LabelDatePicker: LabelInterface = {
    content: 'Deadline',
    size: 15,
    color: '',
    backgroundColor: '',
  };

  public configButtonAdd: configButton = {
    colorButton: 'primary',
    colorMouseOver: 'Basic',
    colorMouseOut: 'primary',
    type: 'submit',
    text: 'Add Todo!',
  };
  public configButtonCancel: configButton = {
    colorButton: 'warn',
    colorMouseOver: 'Basic',
    colorMouseOut: 'warn',
    type: 'reset',
    text: 'Cancel!',
  };

  public CategoryArray: Category[] = [];
  public ImportanceArray: LabelledValue<string>[] = [
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
  ];

  onAddTodo(data: addTodoValue) {
    this.data = data;
    this.storeFacade.addTodo(this.data);
  }
  cancelTodo(data: string) {
    this.router.navigate([data]);
  }
}
