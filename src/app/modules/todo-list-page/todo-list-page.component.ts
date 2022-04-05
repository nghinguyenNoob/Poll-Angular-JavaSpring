import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { configButton } from '../../store/models/button.i';
import { Category } from '../../store/models/category.i';
import { CheckboxInterface } from '../../store/models/checkbox-item.i';
import { Column, SortItem } from '../../store/models/column.i';
import { LabelInterface } from '../../store/models/label.i';
import { LabelledValue } from '../../store/models/labelvalue.i';
import { FilterTodo } from '../../store/models/todo-filter.i';
import { TodoState } from '../../store/reducers/todo.reducer';
import { StoreFacade } from '../../store/store-facades/todo.store-facade';

// mock data

@Component({
  selector: 'brc-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss'],
})
export class PageTodoListComponent implements OnInit {
  private filter: FilterTodo = this.storeFacade.filter;
  public todoPageTotalRecords: number = 100;
  public todoPageRecordsPerPage: number = 5;
  public todoPageIndex: number = 0;
  public todoPageShowRowSelection: boolean = false;
  public todoPageColumns = columns;
  public todoPageDataSource = [];
  todoButtonSubmit: configButton = configButtonSubmit;
  todoButtonReset: configButton = configButtonReset;
  todoLabelImportance: LabelInterface = labelImportance;
  todoLabelFromDate: LabelInterface = labelFromDate;
  todoLabelToDate: LabelInterface = labelToDate;
  todoLabelCategory: LabelInterface = labelCategory;
  todoPlaceholderSearch: string = 'search todo ...';
  todoTitleGroupCheckbox: string = 'Status';
  todoTitleImportance: string = 'Importance';
  todoTitleCategory: string = 'Category';
  todoDataCheckbox: CheckboxInterface[] = checkboxField;
  todoDataCategory: Category[] = [];
  todoDataImportance: LabelledValue<string>[] = dataImportance;

  constructor(private storeFacade: StoreFacade, private _router: Router) {}
  ngOnInit(): void {
    // thưc hiện action filter todo để gán giá trị vào store
    this.storeFacade.filterTodo(
      this.storeFacade.pagination,
      this.storeFacade.filter
    );
    this.storeFacade.getValueTodoTablePage().subscribe((todo) => {
      this.updateData(todo);
    });
  }
  updateData(todo: TodoState) {
    this.todoDataCategory = todo.listCategory;
    this.todoPageDataSource = todo.todos;
    this.todoPageTotalRecords = todo.pagination.total;
    this.todoPageRecordsPerPage = todo.pagination.pageSize;
    this.todoPageIndex = todo.pagination.page - 1;
  }

  todoValueFilter(data: FilterTodo) {
    this.filter = data;
    let pagination = Object.assign({}, this.storeFacade.pagination);
    pagination.page = 1;
    this.storeFacade.filterTodo(pagination, this.filter);
  }
  pageOnClickBtnAdd() {
    this._router.navigateByUrl('todo/add');
  }
  pageClickRow(data: Object) {
    this._router.navigateByUrl(`todo/detail/${data['todoId']}`);
  }
  pageSelectRow(data: Object) {
    console.log(data);
  }
  pageSort(data: SortItem[]) {
    this.filter = {
      textSearch: this.filter.textSearch,
      category: this.filter.category,
      importance: this.filter.importance,
      status: this.filter.status,
      fromDate: this.filter.fromDate,
      toDate: this.filter.toDate,
      sort: data,
    };
    let pagination = Object.assign({}, this.storeFacade.pagination);
    this.storeFacade.filterTodo(pagination, this.filter);
  }
  pageOnPageChange(data) {
    let pagination = Object.assign({}, this.storeFacade.pagination);
    pagination.page = Number(data.pageIndex) + 1;
    this.storeFacade.filterTodo(pagination, this.filter);
  }
}
const columns: Column[] = [
  {
    title: 'Title Todo',
    dataIndex: 'todoName',
    sort: true,
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Deadline',
    dataIndex: 'deadline',
    sort: true,
  },
  {
    title: 'Importance',
    dataIndex: 'importance',
    sort: true,
  },
  {
    title: 'Category',
    dataIndex: 'todoCategoryName',
    sort: true,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sort: true,
  },
];
const dataImportance: LabelledValue<string>[] = [
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
const fakeData: Category[] = [
  { categoryName: 'Python', categoryId: 1 },
  { categoryName: 'React', categoryId: 2 },
  { categoryName: 'PHP', categoryId: 3 },
  { categoryName: 'Laravel', categoryId: 4 },
  { categoryName: 'NestJS', categoryId: 5 },
  { categoryName: 'Spring Boot', categoryId: 6 },
  { categoryName: 'Java', categoryId: 7 },
  { categoryName: 'Ruby', categoryId: 8 },
];
const checkboxField: CheckboxInterface[] = [
  { name: 'Complete', checked: false },
  { name: 'Incomplete', checked: false },
];
const labelCategory: LabelInterface = {
  content: 'Category',
  size: 17,
  color: '',
  backgroundColor: '',
};
const labelImportance: LabelInterface = {
  content: 'Importance',
  size: 17,
  color: '',
  backgroundColor: '',
};
const labelFromDate: LabelInterface = {
  content: 'From date',
  size: 17,
  color: '',
  backgroundColor: '',
};
const labelToDate: LabelInterface = {
  content: 'To date',
  size: 17,
  color: '',
  backgroundColor: '',
};
const configButtonSubmit: configButton = {
  colorButton: 'primary',
  colorMouseOver: 'primary',
  colorMouseOut: 'primary',
  type: 'submit',
  text: 'Filter',
};
const configButtonReset: configButton = {
  colorButton: 'basic',
  colorMouseOver: 'basic',
  colorMouseOut: 'basic',
  type: 'reset',
  text: 'Clear',
};
const placeholder = 'search todo...';
const titleGroup = 'Status';
const importance = 'Importance';
const category = 'Category';
