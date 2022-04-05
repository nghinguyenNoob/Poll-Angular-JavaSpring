import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterTodo } from 'src/app/store/models/todo-filter.i';
import { CheckboxNewModule } from '../checkbox/checkbox-new/checkbox-new.module';
import { SelectMultipleComponent } from '../select-multiple/select-multiple.component';
import { ListFilterScheduleComponent } from './list-filter-schedule.component';
import { configButton } from '../../../store/models/button.i';
import { CheckboxInterface } from 'src/app/store/models/checkbox-item.i';
import { LabelInterface } from 'src/app/store/models/label.i';
import { Category } from 'src/app/store/models/category.i';
import { LabelledValue } from 'src/app/store/models/labelvalue.i';

describe('ListFilterComponent', () => {
  let component: ListFilterScheduleComponent;
  let fixture: ComponentFixture<ListFilterScheduleComponent>;

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
  const dataCategory: Category[] = [
    { categoryName: 'Python', categoryId: 1 },
    { categoryName: 'React', categoryId: 2 },
    { categoryName: 'PHP', categoryId: 3 },
    { categoryName: 'Laravel', categoryId: 4 },
    { categoryName: 'NestJS', categoryId: 5 },
    { categoryName: 'Spring Boot', categoryId: 6 },
    { categoryName: 'Java', categoryId: 7 },
    { categoryName: 'Ruby', categoryId: 8 },
  ];
  const dataImportance: LabelledValue<string>[] = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
    {
      label: '3',
      value: '3',
    },
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFilterScheduleComponent, SelectMultipleComponent ],
      imports: [
        CheckboxNewModule,
     ],
      schemas: [NO_ERRORS_SCHEMA]  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilterScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.buttonSubmit = configButtonSubmit;
    component.buttonReset = configButtonReset;
    component.labelImportance = labelImportance;
    component.labelFromDate = labelFromDate;
    component.labelToDate = labelToDate;
    component.labelCategory = labelCategory;
    component.placeholderSearch = 'search todo ...';
    component.titleGroupCheckbox = 'Status';
    component.titleImportance = 'Importance';
    component.titleCategory = 'Category';
    component.dataCategory = dataCategory;
    component.dataImportance = dataImportance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("textSearch", () => {
    it("textSearch", () => {
      // act
      const text = "dang van hien";
      component.textSearch(text);
      expect(component.valueSearch).toEqual(text)
    });
  });
  describe("getDataCheckBox", () => {
    it("getDataCheckBox", () => {
      const data = [
        {name : "Complete", checked : false},
        {name : "Incomplete", checked : false},
      ]
      // act
      component.getDataCheckBox(data);
      expect(component.incomplete).toEqual(String(data[1].checked))
      expect(component.complete).toEqual(String(data[0].checked))
    });
  });

  describe("getValueImportance", () => {
    it("getValueImportance", () => {
      let data : string = "Test"
      // act
      component.getValueImportance(data);
      expect(component.valueImportance).toEqual(data)
    });
  });

  describe("outputSelected", () => {
    it("outputSelected", () => {
      let data : string[] = ["Test", "Test1"]
      // act
      component.outputSelected(data);
      expect(component.valueCategory).toEqual(data)
    });
  });

  describe("getToDate", () => {
    it("getToDate", () => {
      let data : string = "Test"
      // act
      component.getToDate(data);
      expect(component.valueGetToDate).toEqual(data)
    });
  });

  describe("getToHour", () => {
    it("getToHour", () => {
      let data : string = "Test"
      // act
      component.getToHour(data);
      expect(component.valueGetToHour).toEqual(data)
    });
  });

  describe("getToMinute", () => {
    it("getToMinute", () => {
      let data : string = "Test"
      // act
      component.getToMinute(data);
      expect(component.valueGetToMinute).toEqual(data)
    });
  });

  describe("getFromDate", () => {
    it("getFromDate", () => {
      let data : string = "Test"
      // act
      component.getFromDate(data);
      expect(component.valueGetFromDate).toEqual(data)
    });
  });

  describe("getFromTimeNow", () => {
    it("getFromTimeNow", () => {
      let data : string = "Test"
      // act
      component.getFromTimeNow(data);
      expect(component.valueGetFromTimeNow).toEqual(data)
    });
  });

  describe("getFromHour", () => {
    it("getFromHour", () => {
      let data : string = "Test"
      // act
      component.getFromHour(data);
      expect(component.valueGetFromHour).toEqual(data)
    });
  });

  describe("getFromMinute", () => {
    it("getFromMinute", () => {
      let data : string = "Test"
      // act
      component.getFromMinute(data);
      expect(component.valueGetFromMinute).toEqual(data)
    });
  });

  describe("onSubmit", () => {
    it("status = '' ", () => {
      let sta = "";
      component.complete = 'true'
      component.incomplete = 'true'
      let model : FilterTodo = {
        "category": [],
        "fromDate": "",
        "importance": "",
        "status": "",
        "textSearch": "",
        "toDate": "",
      }
      const spy = jest.spyOn(component.valueFilter, "emit");
      const element = fixture.debugElement.nativeElement.querySelector("[data-test=submit-action]");
      element.click()
      expect(spy).toHaveBeenCalledWith(model)
    });
  });

  describe("onSubmit", () => {
    it("status = 'incomplete' ", () => {
      let sta = "";
      component.complete = 'false'
      component.incomplete = 'true'
      let model : FilterTodo = {
        "category": [],
        "fromDate": "",
        "importance": "",
        "status": "incomplete",
        "textSearch": "",
        "toDate": "",
      }
      const spy = jest.spyOn(component.valueFilter, "emit");
      const element = fixture.debugElement.nativeElement.querySelector("[data-test=submit-action]");
      element.click()
      expect(spy).toHaveBeenCalledWith(model)
    });
  });

  describe("onSubmit", () => {
    it("status = 'complete' ", () => {
      let sta = "";
      component.complete = 'true'
      component.incomplete = 'false'
      let model : FilterTodo = {
        "category": [],
        "fromDate": "",
        "importance": "",
        "status": "complete",
        "textSearch": "",
        "toDate": "",
      }
      const spy = jest.spyOn(component.valueFilter, "emit");
      const element = fixture.debugElement.nativeElement.querySelector("[data-test=submit-action]");
      element.click()
      expect(spy).toHaveBeenCalledWith(model)
    });
  });

  describe("onSubmit", () => {
    it("status = '' ", () => {
      let sta = "";
      component.complete = 'false'
      component.incomplete = 'false'
      let model : FilterTodo = {
        "category": [],
        "fromDate": "",
        "importance": "",
        "status": "",
        "textSearch": "",
        "toDate": "",
      }
      const spy = jest.spyOn(component.valueFilter, "emit");
      const element = fixture.debugElement.nativeElement.querySelector("[data-test=submit-action]");
      element.click()
      expect(spy).toHaveBeenCalledWith(model)
    });
  });

  describe("onSubmit", () => {
    it("submit fromDate and toDate ", () => {
      component.valueGetFromHour = '11';
      component.valueGetFromMinute = '00';
      component.valueGetToHour = '00'
      component.valueGetToMinute = '00'
      component.valueGetFromDate  = '15'
      component.valueGetToDate  = '00'
      let model : FilterTodo = {
        "category": [],
        "fromDate": "15T11:00:00.000Z",
        "importance": "",
        "status": "",
        "textSearch": "",
        "toDate": "00T00:00:00.000Z",
      }
      const spy = jest.spyOn(component.valueFilter, "emit");
      const element = fixture.debugElement.nativeElement.querySelector("[data-test=submit-action]");
      element.click()
      expect(spy).toHaveBeenCalledWith(model)
    });
  });

  describe("clear", () => {
    it("clear", () => {
      component.valueSearch = 'test';
      component.valueImportance = 'test';
      component.valueCategory = ['1','2'];
      component.valueGetFromDate = '11';
      component.valueGetToDate = '12';
      component.valueGetToHour='00';
      component.valueGetFromHour='00';
      component.complete = 'true';
      component.incomplete ='true';
     
      const spy = jest.spyOn(component.selectMultiple, "clear");
      const spy1 = jest.spyOn(component.checkBoxNew, "clear");
      component.clear();
      expect(spy).toHaveBeenCalledWith();
      expect(spy1).toHaveBeenCalledWith();
      expect(component.valueSearch).toEqual('');
      expect(component.valueImportance).toEqual('');
      expect(component.valueCategory).toEqual([]);
      expect(component.valueGetFromDate).toEqual('');
      expect(component.valueGetToDate).toEqual('');
      expect(component.valueGetToHour).toEqual('');
      expect(component.complete).toEqual('');
      expect(component.incomplete).toEqual('');
    });
  });

});
