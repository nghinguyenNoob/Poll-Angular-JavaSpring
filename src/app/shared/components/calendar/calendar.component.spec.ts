import { BottomActionComponent } from './bottom-action/bottom-action.component';
import { CalendarComponent } from './calendar.component';
import {
  ComponentFixture,
  fakeAsync,
  inject,
  TestBed,
  tick,
} from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarModule as AngularCalendarModule,
  CalendarMonthViewDay,
  DateAdapter,
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  BreakpointObserver,
  BreakpointState,
  MediaMatcher,
} from '@angular/cdk/layout';
import { from, Observable, of } from 'rxjs';
import {
  addDays,
  addMonths,
  differenceInMinutes,
  getHours,
  getMinutes,
  startOfDay,
  startOfHour,
  subDays,
} from 'date-fns';
import { Injectable, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [CommonModule],
  declarations: [BottomActionComponent],
  entryComponents: [BottomActionComponent],
})
export class FakeTestBottomActionModule {}

describe('Calendar Component', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;
  let breakpointObserver: BreakpointObserver;
  let fakeResponsive = {
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
  const actions = [
    {
      label: '<i class="material-icons">event_note</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        alert(event);
      },
    },
    {
      label: '<i class="material-icons s-10">edit</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        alert(event);
      },
    },
    {
      label: '<i class="material-icons">delete</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        alert(event);
      },
    },
  ];

  let event: Observable<CalendarEvent[]> = of([
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      allDay: true,
      color: {
        primary: '#F44336',
        secondary: '#FFCDD2',
      },
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: false,
      meta: {
        eventId: 1,
        location: 'Los Angeles',
        notes:
          'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.',
        equipments: ['tivi', 'laptop', 'tủ lạnh'],
        participants: ['dt_hieu', 'ln_thi', 'lt_nghia'],
        typeSchedule: 'metting',
        importance: 'normal',
        createdBy: 'dt_hieu',
        scheduleCategoryName: 'test',
        description: 'this is test',
      },
      actions,
    },
    {
      start: new Date(),
      end: new Date(),
      title: 'A 3 day event',
      allDay: true,
      color: {
        primary: '#F44336',
        secondary: '#FFCDD2',
      },
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: false,
      meta: {
        eventId: 1,
        location: 'Los Angeles',
        notes:
          'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.',
        equipments: ['tivi', 'laptop', 'tủ lạnh'],
        participants: ['dt_hieu', 'ln_thi', 'lt_nghia'],
        typeSchedule: 'metting',
        importance: 'normal',
        createdBy: 'dt_hieu',
        scheduleCategoryName: 'test',
        description: 'this is test',
      },
      actions,
    },
  ]);
  let mediaMatcher: FakeMediaMatcher;

  class FakeMediaQueryList {
    /** The callback for change events. */
    private listeners: ((mql: MediaQueryListEvent) => void)[] = [];

    constructor(public matches: boolean, public media: string) {}

    /** Toggles the matches state and "emits" a change event. */
    setMatches(matches: boolean): void {
      this.matches = matches;

      /** Simulate an asynchronous task. */
      setTimeout(() => {
        // tslint:disable-next-line: no-any
        this.listeners.forEach((listener) => listener(this as any));
      });
    }

    /** Registers a callback method for change events. */
    addListener(callback: (mql: MediaQueryListEvent) => void): void {
      this.listeners.push(callback);
    }

    /** Removes a callback method from the change events. */
    removeListener(callback: (mql: MediaQueryListEvent) => void): void {
      const index = this.listeners.indexOf(callback);

      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    }
  }

  @Injectable()
  class FakeMediaMatcher {
    /** A map of match media queries. */
    private queries = new Map<string, FakeMediaQueryList>();

    /** The number of distinct queries created in the media matcher during a test. */
    get queryCount(): number {
      return this.queries.size;
    }

    /** Fakes the match media response to be controlled in tests. */
    matchMedia(query: string): FakeMediaQueryList {
      const mql = new FakeMediaQueryList(true, query);
      this.queries.set(query, mql);
      return mql;
    }

    /** Clears all queries from the map of queries. */
    clear(): void {
      this.queries.clear();
    }

    /** Toggles the matching state of the provided query. */
    setMatchesQuery(query: string, matches: boolean): void {
      const mediaListQuery = this.queries.get(query);
      if (mediaListQuery) {
        mediaListQuery.setMatches(matches);
      }
    }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarComponent],
      imports: [
        CommonModule,
        MatButtonModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatTooltipModule,
        MatMenuModule,
        MatExpansionModule,
        AngularCalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory,
        }),
        FlexLayoutModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatChipsModule,
        MatBadgeModule,
        NgScrollbarModule,
        MatBottomSheetModule,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        FakeTestBottomActionModule,
      ],
      providers: [{ provide: MediaMatcher, useClass: FakeMediaMatcher }],
    }).compileComponents();
  });
  beforeEach(inject(
    [BreakpointObserver, MediaMatcher],
    (bm: BreakpointObserver, mm: FakeMediaMatcher) => {
      breakpointObserver = bm;
      mediaMatcher = mm;
    }
  ));
  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    component.events$ = event;
    component.activeDayIsOpen = true;
    component.selectedDay = { date: new Date() };
    fixture.detectChanges();
  });
  afterEach(() => {
    mediaMatcher.clear();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('retrieves the whether a query is currently matched', fakeAsync(() => {
    const query = 'everything starts as true in the FakeMediaMatcher';
    expect(breakpointObserver.isMatched(query)).toBeTruthy();
  }));
  // con 1 case dayInWeek = 7
  describe('ngOnInit()', () => {
    it('emits an event on the observable when values change', fakeAsync(() => {
      // Arrange
      const query = '(width: 999px)';
      let queryMatchState = false;

      // Act
      breakpointObserver.observe(query).subscribe((state: BreakpointState) => {
        queryMatchState = state.matches;
      });
      // Assert
      tick();
      expect(queryMatchState).toBeTruthy();
      mediaMatcher.setMatchesQuery(query, false);
      tick();
      expect(queryMatchState).toBeFalsy();
    }));
    it('should emit value 2 when the media query 768px', () => {
      mediaMatcher.setMatchesQuery('(max-width: 768px)', true);
      component.ngOnInit();

      expect(component.daysInWeek).toBe(2);
    });
    it('should emit value 7 when the media query does not match', () => {
      // atc
      mediaMatcher.setMatchesQuery('(max-width: 1280px)', false);

      component.ngOnInit();

      // Assert
      expect(component.daysInWeek).toEqual(2);
    });
  });
  describe('dayClicked()', () => {
    let fakeEvents: CalendarEvent[] = [
      {
        start: subDays(startOfDay(new Date()), 1),
        end: addDays(new Date(), 1),
        title: 'A 3 day event',
        color: null,
        actions: null,
        allDay: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        draggable: true,
      },
    ];

    let day = {
      date: new Date(),
      events: fakeEvents,
    };
    it('should activeDayIsOpen emit false value when click cell day', () => {
      component.viewDate = new Date();

      component.dayClicked(day as any);

      // Assert

      expect(component.activeDayIsOpen).toBe(false);
      expect(component.selectedDay).toBe(day);
    });
    it('should activeDayIsOpen emit false value when length event = 0', () => {
      // Arrange
      let dayFake = { date: new Date(), events: [] };
      component.viewDate = new Date();
      component.activeDayIsOpen = false;

      // Act
      component.dayClicked(dayFake as any);

      // Assert

      expect(component.activeDayIsOpen).toBe(false);
      expect(component.selectedDay).toBe(dayFake);
    });
    it('should activeDayIsOpen emit true value when click cell day', () => {
      // Arrange
      let dayFake = { date: addDays(new Date(), 1), events: fakeEvents };
      component.activeDayIsOpen = false;

      // Act
      component.dayClicked(dayFake as any);

      // Assert
      expect(component.activeDayIsOpen).toBe(true);
      expect(component.viewDate).toBe(dayFake.date);
    });
    it('should emit value onDayClick when trigger dayClick', () => {
      // arrange
      let dayFake = { date: addMonths(new Date(), 1), events: fakeEvents };
      spyOn(component.onDayClick, 'emit').and.returnValue({
        ...dayFake,
      });
      const expected = { date: addMonths(new Date(), 1) };
      // assertion
      component.onDayClick.subscribe(
        (res) => expect(res).toEqual(expected),
        (err) => fail(err)
      );

      // act
      component.dayClicked(dayFake as any);
    });
  });

  describe('eventTimesChanged()', () => {
    let fakeEvents: CalendarEvent[] = [
      {
        start: subDays(startOfDay(new Date()), 1),
        end: addDays(new Date(), 1),
        title: 'A 3 day event',
        color: null,
        actions: null,
        allDay: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        draggable: true,
      },
    ];

    let eventTimeFake = {
      event: fakeEvents as any,
      newStart: subDays(startOfDay(new Date()), 1),
    };
    it('should emit value refresh when trigger eventTimesChanged', () => {
      // assertion
      component.refresh.subscribe(
        (res) => expect(res).toEqual(true),
        (err) => fail(err)
      );
      // act

      component.eventTimesChanged(eventTimeFake as any);
    });
  });
  describe('viewDateChangeNextTodayPrevious()', () => {
    it('should emit value viewDateChange when trigger viewDateChangeNextTodayPrevious', () => {
      // arrange
      let date = new Date();
      spyOn(component.viewDateChange, 'emit').and.returnValue(date);

      // assertion
      component.viewDateChange.subscribe(
        (res) => expect(res).toEqual(date),
        (err) => fail(err)
      );

      //act
      component.viewDateChangeNextTodayPrevious(date);
    });
  });
  describe('castToHoursAndminutes()', () => {
    it('should return string time ', () => {
      // arrange
      let start = new Date();
      let end = new Date();
      const expected = `${getHours(start)}:${getMinutes(start)} - ${getHours(
        end
      )}:${getMinutes(end)}`;

      //act
      let act = component.castToHoursAndminutes(start, end);

      // assertion
      expect(act).toEqual(expected);
    });
  });

  describe('scrollTo()', () => {
    it('should scroll to 30 top when view is month', () => {
      component.view = 'month';
      component.scrollTo();
    });
    it('should scroll to 30 top when view is week', () => {
      component.view = 'week';
      component.scrollbar = null;
      spyOn(window, 'setTimeout');
      component.scrollTo();
      expect(setTimeout).not.toHaveBeenCalled();
    });
    it('should scroll to when view is day', (done) => {
      jest.setTimeout(400);

      // arrange
      component.view = 'day';
      component.scrollbar = {
        scrollTo: jest.fn().mockImplementation((a, b, c) => null),
      } as any;
      const minutesSinceStartOfDay = differenceInMinutes(
        startOfHour(new Date()),
        startOfDay(new Date())
      );

      spyOn(window, 'setTimeout').and.callThrough();
      // act
      component.scrollTo();

      // assertion
      expect(setTimeout).toHaveBeenCalled();
      setTimeout(() => {
        expect(component.scrollbar.scrollTo).toHaveBeenCalledWith({
          top: minutesSinceStartOfDay + 0,
          duration: 0,
        });
        done();
      }, 300);
    });
  });
  describe('openBottomSheet()', () => {
    it('should open bottom sheet', () => {
      // spyOn(component.bottomSheet, 'open')
      let fake = {
        start: subDays(startOfDay(new Date()), 1),
        end: addDays(new Date(), 1),
        title: 'A 3 day event',
        allDay: true,
        color: {
          primary: '#F44336',
          secondary: '#FFCDD2',
        },
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        draggable: false,
        meta: {
          eventId: 1,
          location: 'Los Angeles',
          notes:
            'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.',
          equipments: ['tivi', 'laptop', 'tủ lạnh'],
          participants: ['dt_hieu', 'ln_thi', 'lt_nghia'],
          typeSchedule: 'metting',
          importance: 'normal',
          createdBy: 'dt_hieu',
          scheduleCategoryName: 'test',
          description: 'this is test',
        },
        actions,
      };
      component.openBottomSheet(fake);
    });
  });
});
