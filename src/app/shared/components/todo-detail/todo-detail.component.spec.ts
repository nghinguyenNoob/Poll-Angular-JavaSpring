import { ElementRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { By } from '@angular/platform-browser';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';

import { TodoDetailComponent } from './todo-detail.component';

describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetailComponent ],
      imports: [FlexLayoutModule,MaterialCustomModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("NgOnInit", () => {

    it("should display data success", () => {
      //arrange
      component.todo = {
        todoId: '12',
        todoName: 'Test 1',
        description: 'Description of test 1',
        status: 'complete',
        deadline: new Date(),
        importance: 'importance',
        created: new Date(),
        modified: new Date(),
        todoDetailUser: {
          userId: '1',
          userName: 'uyennhi',
          fullName: 'Nguyen Truong Uyen Nhi',
        },
        todoDetailCategory: {
          todoCategoryId: '1',
          todoCategoryName: 'testing',
        },
      };
      // act
      fixture.detectChanges();
      let todoName = fixture.debugElement.query(By.css('#todo-name-text'));
      let todoCategoryName = fixture.debugElement.query(By.css('#todo-category-name-text'));
      let deadline = fixture.debugElement.query(By.css('#deadline-text'));
      let importance = fixture.debugElement.query(By.css('#importance-text'));
      let description = fixture.debugElement.query(By.css('#description-text'));
      let status = fixture.debugElement.query(By.css('#status-text'));
      
      // assert
      expect(component.todo.todoName).toEqual(todoName.nativeElement.textContent);
      expect(component.todo.todoDetailCategory.todoCategoryName).toEqual(todoCategoryName.nativeElement.textContent);
      expect(component.todo.deadline.toString()).toEqual(deadline.nativeElement.textContent);
      expect(component.todo.importance).toEqual(importance.nativeElement.textContent);
      expect(component.todo.description).toEqual(description.nativeElement.textContent);
      expect(status.nativeElement.textContent).toEqual(" Done ");
    });

  });

  describe("Click Button()", () => {

    it("should emit when clickButton", () => {
      //arrange
      const spy = spyOn(component.btnClickEmt, "emit");
      // act
      component.clickButton();    
      // assert
      expect(spy).toHaveBeenCalled();
    });

    it("should emit when clickButtonStatus", () => {
      //arrange
      const spy = spyOn(component.btnClickEmtStatus, "emit");
      // act
      component.clickButtonStatus();
      // assert
      expect(spy).toHaveBeenCalled();
    });

    it("should emit when clickButtonUpdate", () => {
      //arrange
      const spy = spyOn(component.btnClickEmtUpdate, "emit");
      // act
      component.clickButtonUpdate();
      // assert
      expect(spy).toHaveBeenCalled();
    });

    it("should emit when clickButtonDelete", () => {
      //arrange
      const spy = spyOn(component.btnClickEmtDelete, "emit");
      // act
      component.clickButtonDelete();
      // assert
      expect(spy).toHaveBeenCalled();
    });
  });
});
