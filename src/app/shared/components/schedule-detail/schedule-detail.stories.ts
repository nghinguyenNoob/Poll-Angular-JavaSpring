import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { ScheduleDetail } from '../../../store/models/schedule.i';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { ScheduleDetailComponent } from './schedule-detail.component';
import { ScheduleDetailModule } from './schedule-detail.module';

storiesOf('Pages/Schedule Detail', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [],
      imports: [
        BrowserAnimationsModule,
        MaterialCustomModule,
        ScheduleDetailModule,
      ],
    })
  )
  .add('detail', () => ({
    component: ScheduleDetailComponent,
    props: {
      typeCheck: true,
      scheduleDetail: scheduleDetail,
      scheduleTime: scheduleTime,
      click: action('btnClickEmt'),
    },
  }));
const scheduleDetail: ScheduleDetail = {
  scheduleId: '12',
  title: 'Schedule detail',
  description: 'description',
  startDate: '',
  dueDate: '',
  timeDueRepeat: '14:30',
  timeStartRepeat: '15:30',
  createBy: '1',
  createdByName: 'nghia',
  scheduleCategoryId: '15',
  scheduleCategoryName: 'meeting',
  created: '2020-01-01',
  modified: '2020-01-01',
  place: 'F4',
  important: 'Hight',
  equipmentNames: '',
  type: 'Normal',
  valueRepeat: '',
  userNames: 'nghia nghia',
};
const scheduleTime: string = 'Tuesday, November 10, 11:59 AM - 12:50 PM';
