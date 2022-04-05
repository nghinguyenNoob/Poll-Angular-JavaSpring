import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { configButton } from '../../../store/models/button.i';
import { Category } from '../../../store/models/category.i';
import { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { ButtonFilterSchedule, LabelFilterSchedule, PlaceholderFilterSchedule } from '../../../store/models/schedule-filter.i';
import { FilterSchedule } from '../../../store/models/schedule.i';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { ScheduleFilterModule } from '../schedule-filter/schedule-filter.module';
import { ExpansionFilterScheduleComponent } from './expansion-filter-schedule.component';


describe('ExpansionFilterScheduleComponent', () => {
  let component: ExpansionFilterScheduleComponent;
  let fixture: ComponentFixture<ExpansionFilterScheduleComponent>;

  const placeholderFilterSchedule: PlaceholderFilterSchedule = {
    placeholderSearch: 'search schedule...',
    titleImportance: 'importance',
    titleCategory: 'category',
  };
  const dataImportance: LabelledValue<string>[] = [
    {
      label: 'Normal',
      value: 'Normal',
    },
    {
      label: 'Hight',
      value: 'Hight',
    },
    {
      label: 'Medium',
      value: 'Medium',
    },
  ];
  const fakeData: Category[] = [
    { categoryName: 'Meeting', categoryId: 1 },
    { categoryName: 'Event', categoryId: 2 },
  ];
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionFilterScheduleComponent ],
      imports: [
        CommonModule,
        MaterialCustomModule,
        FlexLayoutModule,
        FormsModule,
        ScheduleFilterModule,
        BrowserAnimationsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionFilterScheduleComponent);
    component = fixture.componentInstance;
    component.buttonFilterSchedule = buttonFilterSchedule;
    component.labelScheduleFilter = labelScheduleFilter;
    component.placeholderFilterSchedule = placeholderFilterSchedule;
    component.scheduleDataCategory = fakeData;
    component.scheduleDataImportance = dataImportance
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('On Display default', () => {
    it('should return filter is default', () => {
      const matTitle = fixture.nativeElement.querySelector('mat-panel-title');
      const matDes = fixture.nativeElement.querySelector(
        'mat-panel-description'
      );
      const divFilter = fixture.debugElement.query(
        By.css('.mat-expansion-panel')
      );
      divFilter.nativeElement.click();
      expect(component.scheduleFilterExpansionLabel.title).toEqual(
        matTitle.textContent.trim()
      );
      expect(component.scheduleFilterExpansionLabel.description).toEqual(
        matDes.textContent.trim()
      );
      expect(divFilter.classes['mat-expanded']).toEqual(false);
    });
  });

describe('On Display when click', () => {
  beforeEach(() => {
    const header = fixture.debugElement.query(
      By.css('mat-expansion-panel-header')
    ).nativeElement;
    header.click();
    fixture.detectChanges();
  });
  it('should return filter is expanded', () => {
    const matTitle = fixture.nativeElement.querySelector('mat-panel-title');
    const matDes = fixture.nativeElement.querySelector('mat-panel-description');
    const divFilter = fixture.debugElement.query(
      By.css('.mat-expansion-panel')
    );
    divFilter.nativeElement.click();
    expect(component.scheduleFilterExpansionLabel.title).toEqual(
      matTitle.textContent.trim()
    );
    expect(component.scheduleFilterExpansionLabel.description).toEqual(
      matDes.textContent.trim()
    );
    expect(divFilter.classes['mat-expanded']).toEqual(true);
  });
});
  describe('On Filter', () => {
    beforeEach(() => {
      const header = fixture.debugElement.query(
        By.css('mat-expansion-panel-header')
      ).nativeElement;
      header.click();
      fixture.detectChanges();
    });
    it('return value when filter', () => {
      const matExpansion = fixture.debugElement.query(
        By.css('mat-expansion-panel')
      );
      const spy = spyOn(component.valueFilter, 'emit');
      const data: FilterSchedule = {
        textSearch: 'test',
        importance: '',
        from: '',
        to: '',
        category: Array(0),
      };
      component.scheduleValueFilter(data);
      expect(matExpansion.classes['mat-expanded']).toEqual(true);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(data);
    });
  });
});
