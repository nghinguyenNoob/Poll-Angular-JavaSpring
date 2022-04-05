import { BottomActionComponent } from './bottom-action/bottom-action.component';
import { Subject, of, Observable } from 'rxjs';
import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  Inject,
  ContentChild,
  TemplateRef,
  AfterViewInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { collapseAnimation } from 'angular-calendar';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarMonthViewDay,
  DAYS_OF_WEEK,
} from 'angular-calendar';
import {
  addDays,
  endOfMonth,
  getHours,
  isSameDay,
  isSameMonth,
  startOfDay,
  subDays,
  getMinutes,
  differenceInMinutes,
  startOfHour,
} from 'date-fns';
import { addHours } from 'date-fns/esm';
import { EventColor } from 'calendar-utils';
import { NgScrollbar } from 'ngx-scrollbar';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { takeUntil, tap } from 'rxjs/operators';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'brc-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  animations: [collapseAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit, OnDestroy {
  static COLORS: EventColor[] = [
    { primary: '#1e90ff', secondary: '#D1E8FF' },
    { primary: '#39c052', secondary: '#c1f4be' },
    { primary: '#ad2121', secondary: '#f2b5b5' },
    { primary: '#4f4f4f', secondary: '#c2c2c2' },
  ];
  constructor(
    @Inject(DOCUMENT) document,
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef,
    public bottomSheet: MatBottomSheet
  ) {
    // Set the defaults
    this.viewDate = new Date();
    this.activeDayIsOpen = false;
    this.selectedDay = { date: startOfDay(new Date()) };
  }
  @ViewChild('currentTimeMarkerTemplate', { static: false }) curr: TemplateRef<
    any
  >;
  @ViewChild('scrollContainer') scrollContainer: ElementRef<HTMLElement>;
  @Output() onDayClick: EventEmitter<Date> = new EventEmitter();
  @Output() onEventClick: EventEmitter<any> = new EventEmitter();
  @Output() onMonthChange: EventEmitter<Date> = new EventEmitter<Date>();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter<Date>();
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  activeDayIsOpen: boolean;
  @Input() events$: Observable<CalendarEvent[]>;
  @Input() scrollbar: NgScrollbar;
  refresh: Subject<any> = new Subject();
  @Input() selectedDay: any;
  @Input() view: 'month' | 'week' | 'day' = 'month';
  viewDate: Date;
  panelOpenState = false;
  visibilityScroll = 'hover';
  daysInWeek = 7;
  destroy$ = new Subject();
  ngOnInit(): void {
    //Responsive week view
    const CALENDAR_RESPONSIVE = {
      small: {
        breakpoint: '(max-width: 576px)',
        daysInWeek: 2,
      },
      medium: {
        breakpoint: '(max-width: 768px)',
        daysInWeek: 3,
      },
      large: {
        breakpoint: '(max-width: 960px)',
        daysInWeek: 5,
      },
    };
    this.breakpointObserver
      .observe(
        Object.values(CALENDAR_RESPONSIVE).map(({ breakpoint }) => breakpoint)
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe((state: BreakpointState) => {
        const foundBreakpoint = Object.values(CALENDAR_RESPONSIVE).find(
          ({ breakpoint }) => !!state.breakpoints[breakpoint]
        );
        if (foundBreakpoint) {
          this.daysInWeek = foundBreakpoint.daysInWeek;
        } else {
          this.daysInWeek = 7;
        }
        this.cd.markForCheck();
      });
    /**
     * Watch re-render-refresh for updating db
     */
    this.selectedDay = { date: new Date() };
  }
  beforeMonthViewRender({ header, body }): void {
    /**
     * Get the selected day
     */

    const _selectedDay = body.find((_day) => {
      return _day.date.getTime() === this.selectedDay.date.getTime();
    });

    if (_selectedDay) {
      /**
       * Set selected day style
       * @type {string}
       */
      _selectedDay.cssClass = 'cal-selected';
    }
  }
  /**
   * Day clicked
   *
   * @param {MonthViewDay} day
   */
  dayClicked(day: CalendarMonthViewDay): void {
    const date: Date = day.date;
    const events: CalendarEvent[] = day.events;
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
    this.selectedDay = day;
    this.refresh.next();
    this.onDayClick.emit(date);
  }
  /**
   * Event times changed
   * Event dropped or resized
   *
   * @param {CalendarEvent} event
   * @param {Date} newStart
   * @param {Date} newEnd
   */
  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    // console.warn('Dropped or resized', event);
    this.refresh.next(true);
  }

  viewDateChangeNextTodayPrevious(date) {
    this.selectedDay = { date };
    this.viewDateChange.emit(date);
  }

  castToHoursAndminutes(start: Date, end: Date): string {
    return `${getHours(start)}:${getMinutes(start)} - ${getHours(
      end
    )}:${getMinutes(end)}`;
  }
  scrollTo() {
    this.cd.detectChanges();
    if (this.view === 'week' || this.view === 'day') {
      const minutesSinceStartOfDay = differenceInMinutes(
        startOfHour(new Date()),
        startOfDay(new Date())
      );
      const headerHeight = this.view === 'week' ? 30 : 0;
      if (this.scrollbar) {
        setTimeout(() => {
          this.scrollbar.scrollTo({
            top: minutesSinceStartOfDay + headerHeight,
            duration: 0,
          });
        }, 300);
      }
    }
  }
  changeScroll(x) {}
  ngOnDestroy() {
    this.destroy$.next();
  }
  openBottomSheet(folder) {
    let sheetRef = this.bottomSheet.open(BottomActionComponent, {
      data: folder,
    });
    sheetRef.afterDismissed();
    //   .subscribe((data) => {
    //   console.log('after close data :', data);
    //   if (data && data.message == 'Cancel') {
    //     alert('Cancel was clicked in bottomsheet');
    //   }
    //   if (data && data.message == 'Status') {
    //     alert('Change Status was clicked in bottomsheet');
    //   }
    // });
  }
}
