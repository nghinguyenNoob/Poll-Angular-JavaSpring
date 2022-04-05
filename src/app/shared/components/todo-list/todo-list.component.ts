import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import type { configButton } from '../../../store/models/button.i';
import { Category } from '../../../store/models/category.i';
import { CheckboxInterface, ICheckBoxItem } from '../../../store/models/checkbox-item.i';
import { Column, SortItem } from '../../../store/models/column.i';
import type { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { Pagination } from '../../../store/models/pagination.i';
import { FilterTodo } from '../../../store/models/todo-filter.i';
import type { ToDoList } from '../../../store/models/todoList.i';

@Component({
  selector: 'brc-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  //Input filter
  @Input() todoButtonSubmit: configButton;
  @Input() todoButtonReset: configButton;
  @Input() todoLabelImportance: LabelInterface;
  @Input() todoLabelFromDate: LabelInterface;
  @Input() todoLabelToDate: LabelInterface;
  @Input() todoLabelCategory: LabelInterface;
  @Input() todoPlaceholderSearch: string = 'search todo ...';
  @Input() todoTitleGroupCheckbox: string = 'Status';
  @Input() todoTitleImportance: string = 'Importance';
  @Input() todoTitleCategory: string = 'Category';
  @Input() todoDataCheckbox: CheckboxInterface[];
  @Input() todoDataCategory: Category[];
  @Input() todoDataImportance: LabelledValue<string>[];
  //Input table
  @Input() todoColumns: Column[] = [];
  @Input() todoDataSource: Object[] = [];
  @Input() todoShowRowSelection: boolean = false;
  //Input pagination
  @Input() todoTotalRecords: number = 0;
  @Input() todoRecordsPerPage: number = 0;
  @Input() todoPageIndex: number = 0;
  //Input todolist
  @Input() configTodoList: ToDoList = {
    filterBox: 'Filter Box',
    title: 'Todo List',
    btnAdd: 'Add Todo',
  };

  //Output filter
  @Output() valueFilter = new EventEmitter();
  //Output table
  @Output() rowClicked = new EventEmitter<Object>();
  @Output() rowsSelected = new EventEmitter<Object>();
  @Output() sort = new EventEmitter<SortItem[]>();
  //Output pagination
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();
  //Out put todolist
  @Output() btnAddTodo: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageOnPageChange: EventEmitter<number> = new EventEmitter<number>();
  todoValueFilter(data: FilterTodo) {
    this.valueFilter.emit(data);
  }
  handleronPageChange(data: number) {
    this.onPageChange.emit(data);
  }
  handlerClickRow(data: Object) {
    this.rowClicked.emit(data);
  }
  handlersort(data: SortItem[]) {
    this.sort.emit(data);
  }
  handlerSelectRow(data: Object) {
    this.rowsSelected.emit(data);
  }
  onClickBtnAdd() {
    this.btnAddTodo.emit();
  }
  onPageEvent(data: number) {
    this.pageOnPageChange.emit(data);
  }
}
