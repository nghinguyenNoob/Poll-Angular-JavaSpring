import { of } from 'rxjs';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar.component';
import { CalendarModule } from './calendar.module';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { addDays, addHours, endOfMonth, startOfDay, subDays } from 'date-fns';
import { CalendarEvent } from 'angular-calendar';
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
  ]
storiesOf('Pages/Calendar', module).add('Calendar Component', () => ({
  component: CalendarComponent,

  props: {
    events : of([
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
      },
      actions,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      allDay: false,
      color: {
        primary: '#FF9800',
        secondary: '#FFE0B2',
      },
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: false,
      meta: {
        eventId: 2,
        location: 'Los Angeles',
        notes:
          'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.',
        equipments: ['tivi', 'laptop', 'tủ lạnh'],
        participants: ['dt_hieu', 'ln_thi', 'lt_nghia'],
      },
      actions,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      allDay: false,
      color: {
        primary: '#1E90FF',
        secondary: '#D1E8FF',
      },
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: false,
      meta: {
        eventId: 3,
        location: 'Los Angeles',
        notes:
          'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.',
        equipments: ['tivi', 'laptop', 'tủ lạnh'],
        participants: ['dt_hieu', 'ln_thi', 'lt_nghia'],
      },
      actions,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      allDay: false,
      color: {
        primary: '#673AB7',
        secondary: '#D1C4E9',
      },
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: false,
      meta: {
        eventId: 4,
        location: 'Los Angeles',
        notes:
          'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.',
        equipments: ['tivi', 'laptop', 'tủ lạnh'],
        participants: ['dt_hieu', 'ln_thi', 'lt_nghia'],
      },
    },
  ])
  },
  moduleMetadata: {
    imports: [CalendarModule, BrowserAnimationsModule],
  },
}));
