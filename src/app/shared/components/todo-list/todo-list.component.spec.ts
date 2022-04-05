import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LabelInterface } from 'src/app/store/models/label.i';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { FilterModule } from '../list-filter-schedule/list-filter-schedule.module';
import { MatPaginatorCustomModule } from '../mat-paginator-custom/mat-paginator-custom.module';
import { TableModule } from '../table/table.module';
import { configButton } from 'src/app/store/models/button.i';
import { TodoListComponent } from './todo-list.component';
import { FilterTodo } from 'src/app/store/models/todo-filter.i';
import { SortItem, SortType } from 'src/app/store/models/column.i';
import { By } from '@angular/platform-browser';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [
        FlexLayoutModule,
        FormsModule,
        FilterModule,
        MatPaginatorCustomModule,
        TableModule,
        MaterialCustomModule,
        CommonModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    const todoButtonSubmit: configButton = {
      colorButton: 'blue',
      type: '',
      text: '',
    };
    const todoButtonReset: configButton = {
      colorButton: 'blue',
      type: '',
      text: '',
    };

    const todoLabelImportance: LabelInterface = {
      content: '',
      size: 15,
      color: '',
      backgroundColor: '',
    };
    const todoLabelFromDate: LabelInterface = {
      content: '',
      size: 15,
      color: '',
      backgroundColor: '',
    };

    const todoLabelToDate: LabelInterface = {
      content: '',
      size: 15,
      color: '',
      backgroundColor: '',
    };

    const todoLabelCategory: LabelInterface = {
      content: '',
      size: 15,
      color: '',
      backgroundColor: '',
    };
    component.todoButtonSubmit = todoButtonSubmit;
    component.todoButtonReset = todoButtonReset;
    component.todoLabelFromDate = todoLabelFromDate;
    component.todoLabelToDate = todoLabelToDate;
    component.todoLabelCategory = todoLabelCategory;
    component.todoLabelImportance = todoLabelImportance;
    component.todoDataImportance = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOninit', () => {
    it('should passed Input properties', () => {
      // arrange
      component.todoButtonSubmit = {
        colorButton: 'blue',
        type: '',
        text: '',
      };
      component.todoButtonReset = {
        colorButton: 'blue',
        type: '',
        text: '',
      };

      component.todoLabelImportance = {
        content: '',
        size: 15,
        color: '',
        backgroundColor: '',
      };
      component.todoLabelFromDate = {
        content: '',
        size: 15,
        color: '',
        backgroundColor: '',
      };

      component.todoLabelToDate = {
        content: '',
        size: 15,
        color: '',
        backgroundColor: '',
      };

      component.todoLabelCategory = {
        content: '',
        size: 15,
        color: '',
        backgroundColor: '',
      };
      component.todoPlaceholderSearch = 'test placeholder';
      component.todoTitleGroupCheckbox = 'test title group checkbox';
      component.todoTitleImportance = 'test todo title important';
      component.todoTitleCategory = 'test todo title category';
      component.todoDataCheckbox = [
        {
          name: 'testCheckbox 1',
          checked: true,
        },
        {
          name: 'testCheckbox 2',
          checked: false,
        },
      ];
      component.todoDataCategory = [
        {
          categoryId: 1,
          categoryName: 'testCategoryName 1',
        },
        {
          categoryId: 2,
          categoryName: 'testCategoryName 2',
        },
      ];
      component.todoDataImportance = [
        {
          label: 'label 1',
          value: 'value 1',
        },
        {
          label: 'label 2',
          value: 'value 2',
        },
      ];
      component.todoColumns = [
        {
          title: 'title collumn 1',
          dataIndex: 'data Collumn 1',
          sort: true,
        },
        {
          title: 'title collumn 2',
          dataIndex: 'data Collumn 2',
          sort: false,
        },
      ];
      component.todoDataSource = [
        {
          id: 1,
          todoName: 'Read book',
          description: 'Open Library is an open',
          deadline: '01/01/2020',
          importance: 'Hard',
          category: 'Homework',
          status: 'Complate',
        },
        {
          id: 2,
          todoName: 'Do homework',
          description: 'Open Library is an open',
          deadline: '01/02/2020',
          importance: 'Easy',
          category: 'Homework',
          status: 'Complate',
        },
        {
          id: 3,
          todoName: 'Play game',
          description: 'Open Library is an open',
          deadline: '11/01/2020',
          importance: 'Hard',
          category: 'Game',
          status: 'Incomplate',
        },
      ];
      component.todoShowRowSelection = true;
      component.todoTotalRecords = 5;
      component.todoRecordsPerPage = 3;
      component.todoPageIndex = 2;
      component.configTodoList = {
        filterBox: 'Filter Box',
        title: 'Todo List',
        btnAdd: 'Add Todo',
      };
      const expected = {
        todoButtonSubmit: {
          colorButton: 'blue',
          type: '',
          text: '',
        },
        todoButtonReset: {
          colorButton: 'blue',
          type: '',
          text: '',
        },
        todoLabelImportance: {
          content: '',
          size: 15,
          color: '',
          backgroundColor: '',
        },
        todoLabelFromDate: {
          content: '',
          size: 15,
          color: '',
          backgroundColor: '',
        },
        todoLabelToDate: {
          content: '',
          size: 15,
          color: '',
          backgroundColor: '',
        },
        todoLabelCategory: {
          content: '',
          size: 15,
          color: '',
          backgroundColor: '',
        },
        todoPlaceholderSearch: 'test placeholder',
        todoTitleGroupCheckbox: 'test title group checkbox',
        todoTitleImportance: 'test todo title important',
        todoTitleCategory: 'test todo title category',
        todoDataCheckbox: [
          {
            name: 'testCheckbox 1',
            checked: true,
          },
          {
            name: 'testCheckbox 2',
            checked: false,
          },
        ],
        todoDataCategory: [
          {
            categoryId: 1,
            categoryName: 'testCategoryName 1',
          },
          {
            categoryId: 2,
            categoryName: 'testCategoryName 2',
          },
        ],
        todoDataImportance: [
          {
            label: 'label 1',
            value: 'value 1',
          },
          {
            label: 'label 2',
            value: 'value 2',
          },
        ],
        todoColumns: [
          {
            title: 'title collumn 1',
            dataIndex: 'data Collumn 1',
            sort: true,
          },
          {
            title: 'title collumn 2',
            dataIndex: 'data Collumn 2',
            sort: false,
          },
        ],
        todoDataSource: [
          {
            id: 1,
            todoName: 'Read book',
            description: 'Open Library is an open',
            deadline: '01/01/2020',
            importance: 'Hard',
            category: 'Homework',
            status: 'Complate',
          },
          {
            id: 2,
            todoName: 'Do homework',
            description: 'Open Library is an open',
            deadline: '01/02/2020',
            importance: 'Easy',
            category: 'Homework',
            status: 'Complate',
          },
          {
            id: 3,
            todoName: 'Play game',
            description: 'Open Library is an open',
            deadline: '11/01/2020',
            importance: 'Hard',
            category: 'Game',
            status: 'Incomplate',
          },
        ],
        todoShowRowSelection: true,
        todoTotalRecords: 5,
        todoRecordsPerPage: 3,
        todoPageIndex: 2,
        configTodoList: {
          filterBox: 'Filter Box',
          title: 'Todo List',
          btnAdd: 'Add Todo',
        },
      };
      fixture.detectChanges();
      // act
      component.ngOnInit();

      // assert
      expect(component.todoButtonSubmit).toEqual(expected.todoButtonSubmit);
      expect(component.todoButtonReset).toEqual(expected.todoButtonReset);
      expect(component.todoLabelImportance).toEqual(
        expected.todoLabelImportance
      );
      expect(component.todoLabelFromDate).toEqual(expected.todoLabelFromDate);
      expect(component.todoLabelToDate).toEqual(expected.todoLabelToDate);
      expect(component.todoLabelCategory).toEqual(expected.todoLabelCategory);
      expect(component.todoPlaceholderSearch).toEqual(
        expected.todoPlaceholderSearch
      );
      expect(component.todoTitleGroupCheckbox).toEqual(
        expected.todoTitleGroupCheckbox
      );
      expect(component.todoTitleImportance).toEqual(
        expected.todoTitleImportance
      );
      expect(component.todoTitleCategory).toEqual(expected.todoTitleCategory);
      expect(component.todoDataCheckbox).toEqual(expected.todoDataCheckbox);
      expect(component.todoDataCategory).toEqual(expected.todoDataCategory);
      expect(component.todoDataImportance).toEqual(expected.todoDataImportance);
      expect(component.todoColumns).toEqual(expected.todoColumns);
      expect(component.todoDataSource).toEqual(expected.todoDataSource);
      expect(component.todoShowRowSelection).toEqual(
        expected.todoShowRowSelection
      );
      expect(component.todoTotalRecords).toEqual(expected.todoTotalRecords);
      expect(component.todoRecordsPerPage).toEqual(expected.todoRecordsPerPage);
      expect(component.todoPageIndex).toEqual(expected.todoPageIndex);
      expect(component.configTodoList).toEqual(expected.configTodoList);
    });

    it('should display data success ', () => {
      // arrange
      component.configTodoList = {
        filterBox: 'Filter Box',
        title: 'Todo List13',
        btnAdd: 'Add Todo13',
      };
      fixture.detectChanges();
      let title = fixture.debugElement.nativeElement.querySelector('b');
      let btnAdd = fixture.debugElement.nativeElement.querySelector(
        '[data-test=submit-action]'
      );
      // act
      component.ngOnInit();
      // assert
      expect(component.configTodoList.title).toBe(title.textContent);
      expect(component.configTodoList.btnAdd).toBe(
        btnAdd.textContent.slice(3).trim()
      );
    });
  });

  describe('todoValueFilter(data: FilterTodo)', () => {
    it('should emit data ', () => {
      // arrange
      const expected: FilterTodo = {
        textSearch: 'Testing',
        importance: 'important',
        category: ['test Category 1', 'test cateogory 2', 'test category 3'],
        status: 'complete',
        fromDate: '10/2/2020',
        toDate: '11/2/2020',
        sort: [
          {
            name: 'sort',
            sort: SortType.asc,
          },
        ],
      };
      fixture.detectChanges();
      const spy = jest.spyOn(component.valueFilter, 'emit');
      // act
      component.todoValueFilter(expected);
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });

  describe('handleronPageChange(data: number)', () => {
    it('should emit data ', () => {
      // arrange
      const expected = 2;
      fixture.detectChanges();
      const spy = jest.spyOn(component.onPageChange, 'emit');
      // act
      component.handleronPageChange(expected);
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });

  describe('handlerClickRow(data: Object)', () => {
    it('should emit data ', () => {
      // arrange
      const expected = {
        name: 'Uyên Nhi',
        category: 'Todo',
      };
      fixture.detectChanges();
      const spy = jest.spyOn(component.rowClicked, 'emit');
      // act
      component.handlerClickRow(expected);
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });

  describe('handlerSelectRow(data: Object)', () => {
    it('should emit data ', () => {
      // arrange
      const expected = {
        name: 'Uyên Nhi',
        Age: '23',
      };
      fixture.detectChanges();
      const spy = jest.spyOn(component.rowsSelected, 'emit');
      // act
      component.handlerSelectRow(expected);
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });

  describe('onClickBtnAdd()', () => {
    it('should emit data ', () => {
      // arrange
      fixture.detectChanges();
      const spy = jest.spyOn(component.btnAddTodo, 'emit');
      // act
      component.onClickBtnAdd();
      // assert
      expect(spy).toHaveBeenCalledWith();
    });
  });

  describe('onPageEvent(data: number)', () => {
    it('should emit data ', () => {
      // arrange
      const expected = 3;
      fixture.detectChanges();
      const spy = jest.spyOn(component.pageOnPageChange, 'emit');
      // act
      component.onPageEvent(expected);
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });

  describe('handlersort(data: SortItem[])', () => {
    it('should emit data ', () => {
      // arrange
      const expected: SortItem[] = [
        {
          name: 'sort',
          sort: SortType.asc,
        },
      ];
      fixture.detectChanges();
      const spy = jest.spyOn(component.sort, 'emit');
      // act
      component.handlersort(expected);
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });
});
