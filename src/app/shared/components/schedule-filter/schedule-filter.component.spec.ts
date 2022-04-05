import { ValueFilterSchedule } from './../../../store/models/schedule-filter.i';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { configButton } from '../../../store/models/button.i';
import { ButtonFilterSchedule } from '../../../store/models/schedule-filter.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { LabelInterface } from '../../../store/models/label.i';
import { PlaceholderFilterSchedule, LabelFilterSchedule } from '../../../store/models/schedule-filter.i';
import { SelectMultipleModule } from './../select-multiple/select-multiple.module';
import { SearchModule } from './../search/search.module';
import { LabelModule } from './../label/label.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialCustomModule } from './../../material-custom/material-custom.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateTimePickerModule } from '../date-time-picker/date-time-picker.module';
import { ScheduleFilterComponent } from './schedule-filter.component';
import { ButtonModule } from '../button/button.module';
import { SelectModule } from '../select/select.module';
describe('ScheduleFilterComponent', () => {
  let component: ScheduleFilterComponent;
  let fixture: ComponentFixture<ScheduleFilterComponent>;

  const placeholderFilterSchedule: PlaceholderFilterSchedule = {
    placeholderSearch: 'search schedule...',
    titleImportance: 'importance',
    titleCategory: 'category',
  };

  const labelScheduleFilter: LabelFilterSchedule<LabelInterface> = {
    labelImportance: {
      content: 'Importance',
      size: 17,
      color: '',
      backgroundColor: '',
    },
    labelFromDate: {
      content: 'From date',
      size: 17,
      color: '',
      backgroundColor: '',
    },
    labelToDate: {
      content: 'To date',
      size: 17,
      color: '',
      backgroundColor: '',
    },
    labelCategory: {
      content: 'Category',
      size: 17,
      color: '',
      backgroundColor: '',
    },
  };

  const buttonFilterSchedule: ButtonFilterSchedule<configButton> = {
    buttonSubmit: {
      colorButton: 'primary',
      colorMouseOver: 'primary',
      colorMouseOut: 'primary',
      type: 'submit',
      text: 'Filter',
    },
    buttonReset: {
      colorButton: 'basic',
      colorMouseOver: 'basic',
      colorMouseOut: 'basic',
      type: 'reset',
      text: 'Clear',
    },
  };
  const valueFilterSchedule: ValueFilterSchedule = {
    valueSearch: '',
    valueImportance: '',
    valueCategory: [],
    valueGetToDate: '',
    valueGetToTimeNow: '',
    valueGetToHour: '',
    valueGetToMinute: '',
    valueGetFromDate: '',
    valueGetFromTimeNow: '',
    valueGetFromMinute: '',
    valueGetFromHour: '',
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleFilterComponent ],
      imports: [
        MaterialCustomModule,
        FlexLayoutModule,
        FormsModule,
        ButtonModule,
        DateTimePickerModule,
        LabelModule,
        SelectModule,
        SearchModule,
        SelectMultipleModule,
        BrowserAnimationsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFilterComponent);
    component = fixture.componentInstance;
    component.placeholderFilterSchedule = placeholderFilterSchedule;
    component.labelScheduleFilter = labelScheduleFilter;
    component.buttonFilterSchedule = buttonFilterSchedule;
    component.valueFilterSchedule = valueFilterSchedule;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('textSearch', () =>{
    beforeEach(() => {
    });

    it('should return success', () => {
      // arrange
      // act
      component.textSearch('textSearch');
      // assert
      expect(component.valueFilterSchedule.valueSearch).toEqual('textSearch');
    })
  })

  describe('getValueImportance', () =>{
    beforeEach(() => {
    });

    it('should return success', () => {
      // arrange
      // act
      component.getValueImportance('getValueImportance');
      // assert
      expect(component.valueFilterSchedule.valueImportance).toEqual('getValueImportance');
    })
  })

  describe('getToDate', () =>{
    beforeEach(() => {
    });

    it('should return success', () => {
      // arrange
      // act
      component.getToDate('test');
      // assert
      expect(component.valueFilterSchedule.valueGetToDate).toEqual('test');
    })
  })

  describe('getToHour', () =>{
    beforeEach(() => {
    });

    it('should return success', () => {
      // arrange
      // act
      component.getToHour('test');
      // assert
      expect(component.valueFilterSchedule.valueGetToHour).toEqual('test');
    })
  })

  describe('getToMinute', () =>{
    beforeEach(() => {
    });

    it('should return success', () => {
      component.getToMinute('test');
      expect(component.valueFilterSchedule.valueGetToMinute).toEqual('test');
    })
  })

  describe('getFromDate', () =>{
    beforeEach(() => {
    });

    it('should return success', () => {
      // arrange
      // act
      component.getFromDate('test');
      // assert
      expect(component.valueFilterSchedule.valueGetFromDate).toEqual('test');
    })
  })

  describe('getFromTimeNow', () =>{
    beforeEach(() => {
    });

    it('should return success', () => {
      component.getFromTimeNow('getFromTimeNow');
      expect(component.valueFilterSchedule.valueGetFromTimeNow).toEqual('getFromTimeNow');
    })
  })

  describe('getFromHour', () =>{
    beforeEach(() => {
    });

    it('should return success', () => {
      // arrange
      // act
      component.getFromHour('test');
      // assert
      expect(component.valueFilterSchedule.valueGetFromHour).toEqual('test');
    })
  })

  describe('getFromMinute', () =>{
    beforeEach(() => {
    });

    it('should return success', () => {
      // arrange
      // act
      component.getFromMinute('test');
      // assert
      expect(component.valueFilterSchedule.valueGetFromMinute).toEqual('test');
    })
  })

  describe('outputSelected', () =>{
    beforeEach(() => {
    });

    it('should return success', () => {
      // arrange
      let expected = ['thi','nghia'];
      // act
      component.outputSelected(expected);
      // assert
      expect(component.valueFilterSchedule.valueCategory).toEqual(expected);
    })
  })

  describe('clear', () =>{
    beforeEach(() => {
    });

    it('should return success', () => {
      // arrange
      let expected = valueFilterSchedule as any;
      fixture.detectChanges();
      // act
      component.clear();
      // assert
      expect(component.valueFilterSchedule).toEqual(expected);
    })
  })

  describe('onSubmit', () =>{
    let model = {
      textSearch : '',
      importance: '',
      category: [],
      fromDateList: '',
      toDateList : '',
    }
    const valueFilterSchedule: ValueFilterSchedule = {
      valueSearch: '',
      valueImportance: '',
      valueCategory: [],
      valueGetToDate: '',
      valueGetToTimeNow: '',
      valueGetToHour: '',
      valueGetToMinute: '',
      valueGetFromDate: '',
      valueGetFromTimeNow: '',
      valueGetFromMinute: '',
      valueGetFromHour: '',
    };
    beforeEach(() => {
    });

    it('should return success when all empty', () => {
      // arrange
      let expected = model;
      component.valueFilterSchedule = valueFilterSchedule;
      const spy = jest.spyOn(component.valueFilter, 'emit');
      fixture.detectChanges();
      // act
      component.onSubmit();
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    })

    it('should return success when valueGetFromHour != "" ', () => {
      // arrange
      component.valueFilterSchedule = {...valueFilterSchedule,valueGetFromHour:'09:02:00'};
      let expected = model;
      fixture.detectChanges();
      // act
      const spy = jest.spyOn(component.valueFilter, 'emit');
      component.onSubmit();
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    })

    it('should return success when valueGetFromMinute != "" ', () => {
      // arrange
      component.valueFilterSchedule = {...valueFilterSchedule,valueGetFromMinute:'09:02:00'};
      let expected = model;
      fixture.detectChanges();
      // act
      const spy = jest.spyOn(component.valueFilter, 'emit');
      component.onSubmit();
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    })

    it('should return success when valueGetToHour  != "" ', () => {
      // arrange
      component.valueFilterSchedule = {...valueFilterSchedule,valueGetToHour :'09:02:00'};
      let expected = model;
      fixture.detectChanges();
      // act
      const spy = jest.spyOn(component.valueFilter, 'emit');
      component.onSubmit();
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    })

    it('should return success when valueGetToHour  != "" ', () => {
      // arrange
      component.valueFilterSchedule = {...valueFilterSchedule,valueGetToMinute :'09:02:00'};
      let expected = model;
      fixture.detectChanges();
      // act
      const spy = jest.spyOn(component.valueFilter, 'emit');
      component.onSubmit();
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    })

    it('should return success when valueGetFromDate  != "" ', () => {
      // arrange
      component.valueFilterSchedule = {...valueFilterSchedule,valueGetFromDate :'2020-10-10'};
      let expected = {...model,fromDateList:'2020-10-10T00:00:00.000Z'};
      fixture.detectChanges();
      // act
      const spy = jest.spyOn(component.valueFilter, 'emit');
      component.onSubmit();
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    })

    it('should return success when valueGetToDate  != "" ', () => {
      // arrange
      component.valueFilterSchedule = {...valueFilterSchedule,valueGetToDate :'2020-10-10'};
      let expected = {...model,toDateList:'2020-10-10T00:00:00.000Z'};
      fixture.detectChanges();
      // act
      const spy = jest.spyOn(component.valueFilter, 'emit');
      component.onSubmit();
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    })
  })
});
