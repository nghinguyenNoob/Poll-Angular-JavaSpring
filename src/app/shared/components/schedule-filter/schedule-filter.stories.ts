import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { configButton } from '../../../store/models/button.i';
import { Category } from '../../../store/models/category.i';
import { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { ScheduleFilterComponent } from './schedule-filter.component';
import { ScheduleFilterModule } from './schedule-filter.module';
import {
  ButtonFilterSchedule,
  LabelFilterSchedule,
  PlaceholderFilterSchedule,
} from '../../../store/models/schedule-filter.i';

storiesOf('Schedule Filter', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [ScheduleFilterModule, BrowserAnimationsModule],
    })
  )
  .add('filter List', () => ({
    component: ScheduleFilterComponent,
    props: {
      dataImportance: dataImportance,
      dataCategory: fakeData,
      placeholderFilterSchedule: placeholderFilterSchedule,
      labelScheduleFilter: labelScheduleFilter,
      buttonFilterSchedule: buttonFilterSchedule,
      valueFilter: action('filter'),
    },
  }));
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
