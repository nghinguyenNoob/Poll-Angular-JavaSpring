import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { configButton } from '../../../store/models/button.i';
import { Category } from '../../../store/models/category.i';
import { Column } from '../../../store/models/column.i';
import { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { ButtonFilterSchedule, LabelFilterSchedule, PlaceholderFilterSchedule } from '../../../store/models/schedule-filter.i';
import { ScheduleListComponent } from './schedule-list.component';
import { ScheduleListModule } from './schedule-list.module';

storiesOf('Schedule List', module)
    .add('ScheduleList Component', () => ({
        component: ScheduleListComponent,
        moduleMetadata: {
            imports: [
                ScheduleListModule,BrowserAnimationsModule
            ],
          },
        props: {
            //Input
            scheduleColumns: columns,
            scheduleDataSource: dataSource,
            scheduleTotalRecords: 100,
            scheduleRecordsPerPage: 5,
            scheduleShowRowSelection: false,
            scheduleDataImportance: dataImportance,
            scheduleDataCategory: fakeData,
            buttonFilterSchedule: buttonFilterSchedule,
            labelScheduleFilter: labelScheduleFilter,
            placeholderFilterSchedule: placeholderFilterSchedule,
            valueFilter: action('filter'),
            //OutPut
            btnAddSchedule: action('btn add'),
            onPageChange: action('page changes'),
            rowClicked: action('handlerClickRow'),
            sort: action('handlersort'),
            rowsSelected: action('handleselectrow'),
        },

    }));

// mock data
const columns: Column[] = [
    {
        title: 'Title Schedule',
        dataIndex: 'scheduleName',
        sort: true,
    },
    {
        title: 'Time',
        dataIndex: 'time',
        sort: true,
    },
    {
        title: 'Category',
        dataIndex: 'category',
        sort: true,
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
    {
        title: 'Place',
        dataIndex: 'place',
        sort: true,
    },
    {
        title: 'Importance',
        dataIndex: 'importance',
        sort: true,
    },
    {
        title: 'Type Repeat',
        dataIndex: 'typeRepeat',
        sort: true,
    },
    {
        title: 'Users',
        dataIndex: 'users',
    },
];

const dataSource = [
    { id: 1, scheduleName: 'Read book', time: '01/01/2020 10:10 - 10/01/2020 10:10', category: 'Homework',  description: 'Open Library is an open', place: 'room 2 F4', importance: 'Hard', typeRepeat: 'normal', users: 'quoc, hien, my' },
    { id: 2, scheduleName: 'Do homework', time: '01/01/2020 10:10 - 10/01/2020 10:10', category: 'Homework', description: 'Open Library is an open', place: 'room 2 F4', importance: 'Easy', typeRepeat: 'weekly', users: 'quoc, hien, my' },
    { id: 3, scheduleName: 'Play game', time: '01/01/2020 10:10 - 10/01/2020 10:10', category: 'Game', description: 'Open Library is an open', place: 'room 2 F4', importance: 'Hard', typeRepeat: 'weekly', users: 'quoc, hien, my' },
    { id: 4, scheduleName: 'Exercise', time: '01/01/2020 10:10 - 10/01/2020 10:10', category: 'Exercise', description: 'Open Library is an open', place: 'room 2 F6', importance: 'Medium', typeRepeat: 'everyday', users: 'quoc, hien, my' },
    { id: 5, scheduleName: 'Create component', time: '01/01/2020 10:10 - 10/01/2020 10:10', category: 'Homework', description: 'Open Library is an open', place: 'room 2 F4', importance: 'Hard', typeRepeat: 'normal', users: 'quoc, hien, my' },
    { id: 6, scheduleName: 'Meeting', time: '01/01/2020 10:10 - 10/01/2020 10:10', category: 'Home', description: 'Open Library is an open', place: 'room 2 F4', importance: 'Medium', typeRepeat: 'weekly', users: 'quoc, hien, my' },
    { id: 7, scheduleName: 'Go home', time: '01/01/2020 10:10 - 10/01/2020 10:10', category: 'Homework', description: 'Open Library is an open', place: 'room 2 F5', importance: 'Easy', typeRepeat: 'monthly', users: 'quoc, hien, my' },
    { id: 8, scheduleName: 'Time work', time: '01/01/2020 10:10 - 10/01/2020 10:10', category: 'Homework', description: 'Open Library is an open', place: 'room 2 F6', importance: 'Easy', typeRepeat: 'monthly', users: 'quoc, hien, my' },
    { id: 9, scheduleName: 'Time learning NestJS', time: '01/01/2020 10:10 - 10/01/2020 10:10', category: 'Homework', description: 'Open Library is an open', place: 'room 2 F4', importance: 'Hard', typeRepeat: 'normal', users: 'quoc, hien, my' },
    { id: 10, scheduleName: 'Time eat', time: '01/01/2020 10:10 - 10/01/2020 10:10', category: 'Exercise', description: 'Open Library is an open', place: 'room 2 F5', importance: 'Medium', typeRepeat: 'everyday', users: 'quoc, hien, my' }
];

//filter
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

const dataImportance: LabelledValue<string>[] = [
  {
    label: 'high',
    value: '1',
  },
  {
    label: 'medium',
    value: '2',
  },
  {
    label: 'low',
    value: '3',
  },
];

const fakeData: Category[] = [
  { categoryName: 'Python', categoryId: 1 },
  { categoryName: 'React', categoryId: 2 },
  { categoryName: 'PHP', categoryId: 3 },
  { categoryName: 'Laravel', categoryId: 4 },
  { categoryName: 'NestJS', categoryId: 5 },
  { categoryName: 'Spring Boot', categoryId: 6 },
  { categoryName: 'Java', categoryId: 7 },
  { categoryName: 'Ruby', categoryId: 8 },
];
