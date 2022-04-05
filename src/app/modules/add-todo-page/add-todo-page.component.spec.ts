jest.mock("../../store/store-facades/todo.store-facade.ts");
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AddTodoModule } from '../../shared/components/add-todo/add-todo.module';
import { ETodo } from '../../store/actions/todo.action';
import { addTodoValue } from '../../store/models/addtodo.i';
import { LabelledValue } from '../../store/models/labelvalue.i';
import { TodoState } from '../../store/reducers/todo.reducer';
import { StoreFacade } from '../../store/store-facades/todo.store-facade';
import { AddTodoPageRouter } from './add-todo-page-routing.module';
import { AddTodoPageComponent } from './add-todo-page.component';

class StoreFaceTodoMock {
  public getValueTodoTablePage = jest.fn(() => of({}));
  public addTodo = jest.fn(() => of({}));
}

describe('AddTodoPageComponent', () => {
  let component: AddTodoPageComponent;
  let fixture: ComponentFixture<AddTodoPageComponent>;
  let service: jest.Mocked<StoreFacade>;
  let actions$: Observable<Action>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoPageComponent],
      imports: [
        CommonModule,
        AddTodoModule,
        AddTodoPageRouter,
        MatSnackBarModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: AddTodoPageComponent },
        ]),
      ],
      providers: [
        { provide: StoreFacade, useClass: StoreFaceTodoMock },
        provideMockActions(() => actions$),
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(StoreFacade) as jest.Mocked<StoreFacade>;
    let store: TodoState = {
      userId: 1,
      todos: [],
      pagination: {
        page: 1,
        pageSize: 10,
        total: 20,
      },
      filter: {
        textSearch: '',
        category: [],
        status: '',
        fromDate: '',
        importance: '',
        toDate: '',
      },
      isLoading: false,
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
    };
    store.listCategory = [
      { categoryId: 1, categoryName: 'Test1' },
      { categoryId: 2, categoryName: 'Test2' },
    ];
    service.getValueTodoTablePage.mockReturnValue(of(store));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addTodo', () => {
    it('should addTodo success', () => {
      let expected: addTodoValue = {
        todoName: 'Testing',
        userId: 1,
      };
      component.ngOnInit();
      component.onAddTodo(expected);
      expect(component.data).toEqual(expected);
    });
  });

  describe('cancelTodo', () => {
    it('should cancelTodo success', () => {
      let expected: string = '/test';
      fixture.ngZone.run(() => {
        component.ngOnInit();
        component.cancelTodo(expected);
        expect(routerSpy.navigate).toHaveBeenCalledWith([expected]);
      });
    });
  });

  describe("Data Category", () => {
    beforeEach(() => {
      let store: TodoState = {
        userId: 1,
        todos: [],
        pagination: {
          page: 1,
          pageSize: 10,
          total: 20,
        },
        filter: {
          textSearch: '',
          category: [],
          status: '',
          fromDate: '',
          importance: '',
          toDate: '',
        },
        isLoading: false,
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
      };
      service.getValueTodoTablePage.mockReturnValue(of(store));
      fixture.detectChanges();
    });

    it('should set length CategoryArray < 0', () => {
      fixture.detectChanges();
      fixture.ngZone.run(() => {
        component.ngOnInit();
      });
      expect(component.dataCategory).toEqual([]);
    });   
  })

  describe('ngOnInit', () => {
    it('should action add fail', () => {
      let expected: LabelledValue<string>[] = [
        { value: '1', label: 'Test1' },
        { value: '2', label: 'Test2' },
      ];
      component.ngOnInit();
      actions$ = of({ type: ETodo.ADD_FAIL });
      fixture.detectChanges();
      expect(component.dataCategory).toEqual(expected);
    });

    it('should action add success', () => {
      let expected: LabelledValue<string>[] = [
        { value: '1', label: 'Test1' },
        { value: '2', label: 'Test2' },
      ];
      actions$ = of({ type: ETodo.ADD_SUCCESS });
      fixture.detectChanges();
      fixture.ngZone.run(() => {
        component.ngOnInit();
      });
      expect(component.dataCategory).toEqual(expected);
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/todo']);
    });
  });  

});
