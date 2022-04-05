import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LabelComponent } from '../label/label.component';
import { ButtonComponent } from '../button/button.component';
import { DatePickerComponent } from '../date-time-picker/date-picker/date-picker.component';
import { TimePickerComponent } from '../date-time-picker/time-picker/time-picker.component';
import { SelectComponent } from '../select/select.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { AddScheduleComponent } from './add-schedule.component';
import { CheckboxComponent } from '../checkbox/item/checkbox.component';
import { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { Category } from '../../../store/models/category.i';
import { SelectMultipleSearchComponent } from '../select-multiple-search/select-multiple-search.component';
import { AddScheduleModule } from './add-schedule.module';

storiesOf('Pages/Add Schedule', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [
      ],
      imports: [BrowserAnimationsModule, MaterialCustomModule, AddScheduleModule ],
    })
  )
  .add('Add Schedule', () => ({
    component: AddScheduleComponent,
    props: {
      selectTypeSchedule: selectTypeScheduleFake,
      selectImportant: selectImportantFake,
      selectWeekly: selectWeeklyFake,
      selectMonthly: selectMonthlyFake,
      selectUserIds: selectUserIdsFake,
      selectEquipment: selectEquipmentFake,
      CategoryArray: [
        {
          label: 'Todo',
          value: 'Todo',
        },
        {
          label: 'Schedule',
          value: 'Schedule',
        },
      ],
      ImportanceArray: [
        {
          label: 'Important',
          value: 'Important',
        },
        {
          label: 'No Important',
          value: 'No Important',
        },
      ],
      addTodo: action('Add todo'),
      addCancel: action('Cancel'),
      addSubmit: action('Submit'),
      checkFreeTimePraticipant: action('Check pracicipant'),
      checkFreeTimeEquipment: action('Check equipment'),
    },
  }));

const selectTypeScheduleFake: LabelledValue<string>[] = [
  {
    label: 'meeting',
    value: '1',
  },
  {
    label: 'event',
    value: '2',
  },
];

const selectImportantFake: LabelledValue<string>[] = [
  {
    label: 'high',
    value: '1',
  },
  {
    label: 'normal',
    value: '2',
  },
];

const selectWeeklyFake: LabelledValue<string>[] = [];

for (let i = 2; i <= 7; i++) {
  selectWeeklyFake.push({
    label: `day ${i}`,
    value: `${i}`,
  });
}

selectWeeklyFake.push({
  label: `last of week`,
  value: `lastOfWeek`,
});

let selectMonthlyFake: LabelledValue<string>[] = [];

for (let i = 1; i <= 30; i++) {
  selectMonthlyFake.push({
    label: `date ${i}`,
    value: `${i}`,
  });
}

selectMonthlyFake.push({
  label: `last of month`,
  value: `lastOfMonth`,
});

const selectUserIdsFake: Category[] = [
  {
    categoryName: 'user 1',
    categoryId: 1,
  },
  {
    categoryName: 'user 2',
    categoryId: 2,
  },
  {
    categoryName: 'user 3',
    categoryId: 3,
  },
  {
    categoryName: 'user 4',
    categoryId: 4,
  },
];

const selectEquipmentFake: Category[] = [
  {
    categoryName: 'laptop',
    categoryId: 1,
  },
  {
    categoryName: 'micro',
    categoryId: 2,
  },
  {
    categoryName: 'projector ',
    categoryId: 3,
  },
  {
    categoryName: 'TV',
    categoryId: 4,
  },
];
