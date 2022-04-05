import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { FilterNotificationComponent } from '../filter-notification/filter-notification.component';
import { FilterNotificationModule } from '../filter-notification/filter-notification.module';
import { LabelledValue } from '../../../store/models/labelvalue.i';

storiesOf('Filter notification', module).add('Filter notification', () => ({
  component: FilterNotificationComponent,
  props: {
    buttonGroup: btnGroup,
    dataSelect: cateSelect,
    labelSelect: 'Category',
    categorySelected: action('value select'),
    statusFilter: action('button emit'),
  },
  moduleMetadata: {
    imports: [FilterNotificationModule],
  },
}));

var cateSelect: LabelledValue<string>[] = [
    {
      label: 'All',
      value: 'all',
    },
    {
      label: 'System',
      value: 'system'
    },
    {
      label: 'Todo',
      value: 'todo'
    },
    {
      label: 'Schedule',
      value: 'schedule'
    },
    {
      label: 'Workflow',
      value: 'workflow'
    },
];

var btnGroup = [
  {
    value: 'all',
    displayValue: 'All',
  },
  {
    value: 'read',
    displayValue: 'Already Read',
  },
  {
    value: 'unread',
    displayValue: 'Unread',
  },
  {
    value: 'remove',
    displayValue: 'Remove ',
  },
];