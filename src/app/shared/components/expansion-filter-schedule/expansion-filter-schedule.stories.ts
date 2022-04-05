import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { configButton } from 'src/app/store/models/button.i';
import { Category } from 'src/app/store/models/category.i';
import { LabelInterface } from 'src/app/store/models/label.i';
import { LabelledValue } from 'src/app/store/models/labelvalue.i';
import { ButtonFilterSchedule, LabelFilterSchedule, PlaceholderFilterSchedule } from 'src/app/store/models/schedule-filter.i';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { ExpansionFilterScheduleComponent } from './expansion-filter-schedule.component';
import { ExpansionFilterScheduleModule } from './expansion-filter-schedule.module';


storiesOf('Expansion Filter Schedule', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [],
      imports: [
        BrowserAnimationsModule,
        ExpansionFilterScheduleModule,
      ],
    })
  )
  .add('detail', () => ({
    component: ExpansionFilterScheduleComponent,
    props: {
      scheduleDataImportance: dataImportance,
      scheduleDataCategory: fakeData,
      buttonFilterSchedule: buttonFilterSchedule,
      labelScheduleFilter: labelScheduleFilter,
      placeholderFilterSchedule: placeholderFilterSchedule,
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
