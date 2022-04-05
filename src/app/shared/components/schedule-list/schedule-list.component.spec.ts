import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { configButton } from 'src/app/store/models/button.i';
import { SortItem, SortType } from 'src/app/store/models/column.i';
import { LabelInterface } from 'src/app/store/models/label.i';
import { FilterSchedule } from 'src/app/store/models/schedule.i';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { FilterModule } from '../list-filter-schedule/list-filter-schedule.module';
import { MatPaginatorCustomModule } from '../mat-paginator-custom/mat-paginator-custom.module';
import { ScheduleFilterModule } from '../schedule-filter/schedule-filter.module';
import { TableModule } from '../table/table.module';

import { ScheduleListComponent } from './schedule-list.component';

describe('ScheduleListComponent', () => {
  let component: ScheduleListComponent;
  let fixture: ComponentFixture<ScheduleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleListComponent],
      imports: [
        FlexLayoutModule,
        FormsModule,
        FilterModule,
        MatPaginatorCustomModule,
        TableModule,
        MaterialCustomModule,
        CommonModule,
        BrowserAnimationsModule,
        ScheduleFilterModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleListComponent);
    component = fixture.componentInstance;
    const buttonFilterSchedule = {
      buttonSubmit: {
        colorButton: '',
        type: '',
        text: '',
      },
      buttonReset: {
        colorButton: '',
        type: '',
        text: '',
      },
    };
    const labelScheduleFilter = {
      labelImportance: {
        content: '',
        size: 15,
        color: '',
        backgroundColor: '',
      },
      labelFromDate: {
        content: '',
        size: 15,
        color: '',
        backgroundColor: '',
      },
      labelToDate: {
        content: '',
        size: 15,
        color: '',
        backgroundColor: '',
      },
      labelCategory: {
        content: '',
        size: 15,
        color: '',
        backgroundColor: '',
      },
    };

    component.buttonFilterSchedule = buttonFilterSchedule;
    component.labelScheduleFilter = labelScheduleFilter;
    component.scheduleDataCategory = [];
    component.scheduleDataImportance = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should display data success', () => {
    it('should display data success ', () => {
      // arrange
      component.configScheduleList = {
        filterBox: 'Filter Box',
        title: 'Schedule List13',
        btnAdd: 'Add Schedule13',
      };
      fixture.detectChanges();
      let title = fixture.debugElement.nativeElement.querySelector('b');
      let btnAdd = fixture.debugElement.nativeElement.querySelector(
        '[data-test=submit-action]'
      );
      // act
      component.ngOnInit();

      // assert
      expect(component.configScheduleList.title).toBe(title.textContent);
      expect(component.configScheduleList.btnAdd).toBe(
        btnAdd.textContent.slice(3).trim()
      );
    });
  });

  describe('scheduleValueFilter()', () => {
    it('should emit data ', () => {
      // arrange
      const expected: FilterSchedule = {
        textSearch: 'Testing',
        importance: 'important',
        category: ['test Category 1', 'test cateogory 2', 'test category 3'],
        from: '01/01/2020',
        to: '01/02/2020',
        sort: [
          {
            name: 'sort',
            sort: SortType.asc,
          },
        ],
        fromDateList: '01/01/2020',
        toDateList: '01/07/2020',
      };
      fixture.detectChanges();
      const spy = jest.spyOn(component.valueFilter, 'emit');
      // act
      component.scheduleValueFilter(expected);
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });

  describe('handlerClickRow()', () => {
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

  describe('handlerSort()', () => {
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
      component.handlerSort(expected);
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });

  describe('handlerSelectRow()', () => {
    it('should emit data ', () => {
      // arrange
      const expected = {
        name: 'Uyên Nhi',
        category: 'Todo',
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
      const spy = jest.spyOn(component.btnAddSchedule, 'emit');
      // act
      component.onClickBtnAdd();
      // assert
      expect(spy).toHaveBeenCalledWith();
    });
  });

  describe('onPageEvent()', () => {
    it('should emit data ', () => {
      // arrange
      const expected = 2;
      fixture.detectChanges();
      const spy = jest.spyOn(component.pageOnPageChange, 'emit');
      // act
      component.onPageEvent(expected);
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });
});
