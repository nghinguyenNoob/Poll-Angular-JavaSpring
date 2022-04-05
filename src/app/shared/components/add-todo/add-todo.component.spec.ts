import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { ButtonModule } from '../button/button.module';
import { DatePickerModule } from '../date-time-picker/date-picker/date-picker.module';
import { LabelModule } from '../label/label.module';
import { SelectModule } from '../select/select.module';
import { TextareaModule } from '../textarea/textarea.module';

import { AddTodoComponent } from './add-todo.component';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoComponent ],
      imports: [
        MaterialCustomModule,
        FormsModule,
        ButtonModule,
        DatePickerModule,
        LabelModule,
        SelectModule,
        CommonModule,
        TextareaModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("ngOnInit()", () => {
    it("window.innerWidth > 834 ", () => {
      // arrange
      global.innerWidth = 1000;
      component.colSpan= 1;
      component.LabelCategory.size = 2;
      component.LabelTodoName.size = 1;
      component.LabelDatePicker.size = 1;
      component.LabelImportance.size = 1;
      component.LabelDescription.size = 1;
      
      const expected = {
        colSpan : 2,
        LabelCategory : 15,
        LabelTodoName : 15,
        LabelDatePicker : 15,
        LabelImportance : 15,
        LabelDescription : 15,
      }
      fixture.detectChanges();
      // act
      component.ngOnInit();
      // assert
      expect(component.colSpan).toEqual(expected.colSpan);
      expect(component.LabelCategory.size).toEqual(expected.LabelCategory);
      expect(component.LabelTodoName.size).toEqual(expected.LabelTodoName);
      expect(component.LabelImportance.size).toEqual(expected.LabelImportance);
      expect(component.LabelDatePicker.size).toEqual(expected.LabelDatePicker);
      expect(component.LabelDescription.size).toEqual(expected.LabelDescription);

    });

    it("window.innerWidth < 834 ", () => {
      // arrange
      global.innerWidth = 600;
      component.colSpan= 1;
      component.LabelCategory.size = 2;
      component.LabelTodoName.size = 1;
      component.LabelDatePicker.size = 1;
      component.LabelImportance.size = 1;
      component.LabelDescription.size = 1;
      
      const expected = {
        colSpan : 4,
        LabelCategory : 12,
        LabelTodoName : 12,
        LabelDatePicker : 12,
        LabelImportance : 12,
        LabelDescription : 12,
      }
      fixture.detectChanges();
      // act
      component.ngOnInit();
      // assert
      expect(component.colSpan).toEqual(expected.colSpan);
      expect(component.LabelCategory.size).toEqual(expected.LabelCategory);
      expect(component.LabelTodoName.size).toEqual(expected.LabelTodoName);
      expect(component.LabelImportance.size).toEqual(expected.LabelImportance);
      expect(component.LabelDatePicker.size).toEqual(expected.LabelDatePicker);
      expect(component.LabelDescription.size).toEqual(expected.LabelDescription);

    });
  });

  describe("cancel()", () => {
    it("should emit data ", () => {
      // arrange
      fixture.detectChanges();
      const spy = jest.spyOn(component.cancelTodo, "emit");
      // act
      component.cancel();
      // assert
      expect(spy).toHaveBeenCalled();
    });
  });

  describe("changeValueTodo()", () => {
    it("should set todoName ", () => {
      // arrange
      component.todoName = "Test todoName";
      let data = "todoName expected"
      fixture.detectChanges();
      // act
      component.changeValueTodo(data );
      // assert
      expect(component.todoName).toEqual(data);
    });
  });

  describe("setCategory()", () => {
    it("should set category ", () => {
      // arrange
      component.todoCategory = 1;
      let category = "2";
      fixture.detectChanges();
      // act
      component.setCategory(category);
      // assert
      expect(component.todoCategory).toEqual(Number(category));
    });
  });

  describe("setImportant()", () => {
    it("should set important ", () => {
      // arrange
      component.todoImportant = "Hight";
      let important = "Normal";
      fixture.detectChanges();
      // act
      component.setImportant(important);
      // assert
      expect(component.todoImportant).toEqual(important);
    });
  });

  describe("setDatePicker()", () => {
    it("should set datePicker ", () => {
      // arrange
      component.todoDatePicker = "1/1/2019";
      let datePicker = "12/12/2020";
      fixture.detectChanges();
      // act
      component.setDatePicker(datePicker);
      // assert
      expect(component.todoDatePicker).toEqual(datePicker);
    });
  });

  describe("setDescription()", () => {
    it("should set description ", () => {
      // arrange
      component.todoDescription = "Description test";
      let description = "This is a description";
      fixture.detectChanges();
      // act
      component.setDescription(description);
      // assert
      expect(component.todoDescription).toEqual(description);
    });
  });

  describe("getToDate()", () => {
    it("should set value  ", () => {
      // arrange
      component.valueGetToDate = "value get to date test";
      let valueGetToDate = "value get";
      fixture.detectChanges();
      // act
      component.getToDate(valueGetToDate);
      // assert
      expect(component.valueGetToDate).toEqual(valueGetToDate);
    });
  });

  describe("onResize()", () => {
    it("set properties for window.innerWidth > 834 ", () => {
      //arrange
      global.innerWidth = 1000;
      component.colSpan= 1;
      component.LabelCategory.size = 2;
      component.LabelTodoName.size = 1;
      component.LabelDatePicker.size = 1;
      component.LabelImportance.size = 1;
      component.LabelDescription.size = 1;
      
      const expected = {
        colSpan : 2,
        LabelCategory : 15,
        LabelTodoName : 15,
        LabelDatePicker : 15,
        LabelImportance : 15,
        LabelDescription : 15,
      }
      fixture.detectChanges();
      // act
      component.onResize();

      // assert
      expect(component.colSpan).toEqual(expected.colSpan);
      expect(component.LabelCategory.size).toEqual(expected.LabelCategory);
      expect(component.LabelTodoName.size).toEqual(expected.LabelTodoName);
      expect(component.LabelImportance.size).toEqual(expected.LabelImportance);
      expect(component.LabelDatePicker.size).toEqual(expected.LabelDatePicker);
      expect(component.LabelDescription.size).toEqual(expected.LabelDescription);
    });

    it("set properties window.innerWidth < 834 ", () => {
      // arrange
      global.innerWidth = 600;
      component.colSpan= 1;
      component.LabelCategory.size = 2;
      component.LabelTodoName.size = 1;
      component.LabelDatePicker.size = 1;
      component.LabelImportance.size = 1;
      component.LabelDescription.size = 1;
      
      const expected = {
        colSpan : 4,
        LabelCategory : 12,
        LabelTodoName : 12,
        LabelDatePicker : 12,
        LabelImportance : 12,
        LabelDescription : 12,
      }
      fixture.detectChanges();
      // act
      component.onResize();

      // assert
      expect(component.colSpan).toEqual(expected.colSpan);
      expect(component.LabelCategory.size).toEqual(expected.LabelCategory);
      expect(component.LabelTodoName.size).toEqual(expected.LabelTodoName);
      expect(component.LabelImportance.size).toEqual(expected.LabelImportance);
      expect(component.LabelDatePicker.size).toEqual(expected.LabelDatePicker);
      expect(component.LabelDescription.size).toEqual(expected.LabelDescription);

    });
  });

  describe("onSubmit()", () => {
    it("valueGetToDate is an empty string ", () => {
      // arrange
      component.valueGetToDate = "";
      component.todoName = "test TodoName";
      component.todoCategory = 1;
      component.todoImportant = "hight";
      component.todoDescription = "Description Testing";
      component.userId = 1;
      let addTodoModel = {
        todoName: component.todoName,
        todoCategoryId: component.todoCategory,
        deadline: component.valueGetToDate === ''? undefined: component.valueGetToDate+"T00:00:00.000Z" ,
        importance: component.todoImportant,
        description: component.todoDescription,
        userId : component.userId,
      };
      fixture.detectChanges();
      // act
      const spy = jest.spyOn(component.addTodo, 'emit');
      component.onsubmit();

      // assert
      expect(spy).toHaveBeenCalledWith(addTodoModel);
    });

    it("valueGetToDate has string value ", () => {
      // arrange
      component.valueGetToDate = "20/10/2020";
      component.todoName = "test TodoName";
      component.todoCategory = 1;
      component.todoImportant = "hight";
      component.todoDescription = "Description Testing";
      component.userId = 1;
      let addTodoModel = {
        todoName: component.todoName,
        todoCategoryId: component.todoCategory,
        deadline: component.valueGetToDate === ''? undefined: component.valueGetToDate+"T00:00:00.000Z" ,
        importance: component.todoImportant,
        description: component.todoDescription,
        userId : component.userId,
      };
      fixture.detectChanges();
      // act
      const spy = jest.spyOn(component.addTodo, 'emit');
      component.onsubmit();
      // assert
      expect(spy).toHaveBeenCalledWith(addTodoModel);
    });
  });
});
