import { Router } from '@angular/router';
import { EventColor } from 'calendar-utils';
import { CalendarComponent } from './../../shared/components/calendar/calendar.component';
import {
  Schedule,
  FilterSchedule,
  CategorySchedule,
} from './../../store/models/schedule.i';
import { map, catchError, filter, mergeMap } from 'rxjs/operators';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar';
import { StoreFacade } from '../../store/store-facades/schedule.store-facade';
import { of, Observable, throwError, zip, combineLatest } from 'rxjs';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import {
  endOfMonth,
  startOfMonth,
  endOfWeek,
  startOfWeek,
  format,
} from 'date-fns';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { NgScrollbar } from 'ngx-scrollbar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ButtonFilterSchedule, LabelFilterSchedule, PlaceholderFilterSchedule } from 'src/app/store/models/schedule-filter.i';
import { configButton } from 'src/app/store/models/button.i';
import { LabelInterface } from 'src/app/store/models/label.i';
import { Category } from 'src/app/store/models/category.i';
import { LabelledValue } from 'src/app/store/models/labelvalue.i';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss'],
})
export class SchedulePageComponent implements OnInit {
  constructor(
    private storeFacade: StoreFacade,
    private router: Router,
    private bottomSheet: MatBottomSheet
  ) {
    this.selectedDate = { date: new Date() };
    this.calendarView = 'month';
  }
  @ViewChild('calendar', { static: true }) calendar: MatCalendar<Date>;
  @ViewChild(CalendarComponent) caledarComp: CalendarComponent;
  @ViewChild(NgScrollbar, { static: true }) scrollbarRef: NgScrollbar;
  @ViewChildren('checkBox') checkBox: QueryList<any>;
  visibilityScroll = 'always';
  visibilityScrollNavBar = 'hover';
  calendarView: string;
  events: Observable<CalendarEvent[]>;
  eventsToday: Observable<CalendarEvent[]>;
  eventsTomorrow: Observable<CalendarEvent[]>;
  eventsAfterTomorrow: Observable<CalendarEvent[]>;
  categoryEvent: Observable<CategorySchedule[]>;
  checked: boolean;
  actions = [
    {
      label: '<i class="material-icons">event_note</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.router.navigate(['/schedule/detail', event.id]);
      },
    },
    {
      label: '<i class="material-icons s-10">edit</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.router.navigate(['/schedule/edit', event.id]);
      },
    },
    {
      label: '<i class="material-icons">delete</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.storeFacade.delSchedule(event.meta);
        this.bottomSheet.dismiss();
      },
    },
  ];
  selectedDate: any;
  today: number = Date.now();
  tomorrow = new Date(this.today).setDate(new Date(this.today).getDate() + 1);
  afterTomorrow = new Date(this.today).setDate(
    new Date(this.today).getDate() + 2
  );
  nameAfterTomorrow = format(this.afterTomorrow, 'iiii');
  checkedArr = [];
  onSelect(dayClick) {
    this.selectedDate = { date: dayClick };
    this.caledarComp.view = 'week';
    this.caledarComp.viewDate = dayClick;
  }
  buttonFilterSchedule: ButtonFilterSchedule<configButton> = buttonFilterSchedule;
  labelScheduleFilter: LabelFilterSchedule<LabelInterface> = labelScheduleFilter;
  placeholderFilterSchedule: PlaceholderFilterSchedule = {
    placeholderSearch: 'search schedule...',
    titleImportance: 'Importance',
    titleCategory: 'Category',
  };
  scheduleDataCategory: Category[] = fakeData;
  scheduleDataImportance: LabelledValue<string>[] = dataImportance;
  ngOnInit(): void {
    // Init data for schedule
    const today = new Date();
    const filter: FilterSchedule = {
      from: startOfWeek(startOfMonth(today)).toISOString(),
      to: endOfWeek(endOfMonth(today)).toISOString(),
    };
    this.storeFacade.dispatchSchedule(filter);
    this.storeFacade.getSchedules();
    this.storeFacade.getFilter();
    this.storeFacade.getEventsInSiderBar();
    this.storeFacade.getCategorySchedule();
    this.categoryEvent = this.storeFacade.categories$;

    // end Init
    this.events = combineLatest([
      this.storeFacade.schedules$,
      this.storeFacade.categories$,
    ]).pipe(
      map(([schedule, category]) => {
        return schedule.map((rs) => {
          return this.convertDataScheduleToEvent(rs, category);
        });
      }),
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
    this.eventsToday = combineLatest([
      this.storeFacade.eventsToday$,
      this.storeFacade.categories$,
    ]).pipe(
      map(([schedule, category]) => {
        return schedule.map((rs) => {
          return this.convertDataScheduleToEvent(rs, category);
        });
      }),
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
    this.eventsTomorrow = combineLatest([
      this.storeFacade.eventsTomorrow$,
      this.storeFacade.categories$,
    ]).pipe(
      map(([schedule, category]) => {
        return schedule.map((rs) => {
          return this.convertDataScheduleToEvent(rs, category);
        });
      }),
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
    this.eventsAfterTomorrow = combineLatest([
      this.storeFacade.eventsAfterTomorrow$,
      this.storeFacade.categories$,
    ]).pipe(
      map(([schedule, category]) => {
        return schedule.map((rs) => {
          return this.convertDataScheduleToEvent(rs, category);
        });
      }),
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
    this.checked = true;
  }
  getEventToday() {}

  onMonthChange(date) {
    this.selectedDate = { date };
    this.calendar._goToDateInView(date, 'month');
    this.storeFacade.getFilter();
    const filter: FilterSchedule = {
      ...this.storeFacade.filter,
      from: startOfWeek(startOfMonth(date)).toISOString(),
      to: endOfWeek(endOfMonth(date)).toISOString(),
    };
    this.storeFacade.dispatchScheduleOnMonthChange(filter);
  }
  onDayClick(date) {
    this.selectedDate = { date };
    this.calendar._goToDateInView(date, 'month');
  }
  currentPeriodClicked(date) {
    console.log(date);
  }

  private getColor(category: CategorySchedule[], id: number): EventColor {
    let data: CategorySchedule;
    if (category.length > 0) {
      data = category.filter((x) => x.scheduleCategoryId === id)[0];
    }
    return data?.colors;
  }
  private convertDataScheduleToEvent(
    schedule: Schedule,
    category: CategorySchedule[]
  ): CalendarEvent {
    let calendarEvent: CalendarEvent;
    if (schedule !== null && schedule.scheduleId !== null) {
      calendarEvent = {
        id: schedule.scheduleId,
        title: schedule.title,
        start: new Date(schedule.timeStart),
        end: new Date(schedule.dueTime),
        allDay: schedule.allDay,
        color: this.getColor(category, schedule.scheduleCategoryId),
        meta: Object.assign(
          {},
          {
            users: JSON.parse(schedule.users),
            scheduleCategoryName: schedule.scheduleCategoryName,
            scheduleCategoryId: schedule.scheduleCategoryId,
            userName: schedule.userName,
            createdBy: schedule.createdBy,
            scheduleId: schedule.scheduleId,
            title: schedule.title,
            timeStart: schedule.timeStart,
            dueTime: schedule.dueTime,
            allDay: schedule.allDay,
            description: schedule.description,
            status: schedule.status,
          }
        ),
        actions: this.actions,
      };
    }
    return calendarEvent;
  }
  setColorCheckbox(value) {
    return {
      'border-style': 'solid',
      'border-color': value.colors?.primary,
    };
  }
  onClickCheckBox(checkbox) {
    this.checkedArr = [];
    let ids: number[] = [];
    // tslint:disable-next-line: no-shadowed-variable
    const checked = this.checkBox.filter((checkbox) => checkbox.checked);
    checked.forEach((data) => {
      this.checkedArr.push({
        checked: data.checked,
        value: data.value,
      });
      ids.push(data.value?.scheduleCategoryId);
    });
    this.storeFacade.dispatchFilterByCategory(ids);
    this.events = combineLatest([
      this.storeFacade.getDataFilterByCategory$(),
      this.storeFacade.categories$,
    ]).pipe(
      map(([schedule, category]) => {
        return schedule.map((rs) => {
          return this.convertDataScheduleToEvent(rs, category);
        });
      }),
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
  scheduleValueFilter(data){
    this.storeFacade.filter= data;
    this.router.navigateByUrl(`/schedule/scheduleList`);
  }
}
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
    size: 15,
    color: '',
    backgroundColor: '',
  },
  labelFromDate: {
    content: 'From date',
    size: 15,
    color: '',
    backgroundColor: '',
  },
  labelToDate: {
    content: 'To date',
    size: 15,
    color: '',
    backgroundColor: '',
  },
  labelCategory: {
    content: 'Category',
    size: 15,
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
