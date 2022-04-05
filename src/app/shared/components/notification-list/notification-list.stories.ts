import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { Column } from '../../../store/models/column.i';
import { NotificationListModule } from './notification-list.module';
import { NotificationListComponent } from './notification-list.component';
import { LabelledValue } from '../../../store/models/labelvalue.i';

storiesOf('Pages/Notification List', module).add(
  'NotificationList Component',
  () => ({
    component: NotificationListComponent,
    moduleMetadata: {
      imports: [NotificationListModule],
    },
    props: {
      //Input
      notification_columns: columns,
      notification_dataSource: dataSource,
      notification_totalRecords: 100,
      notification_recordsPerPage: 5,
      notification_showRowSelection: false,
      searchText: '',
      searchPlaceholder: 'Search ...',
      buttonGroup: btnGroup,
      dataSelect: cateSelect,
      labelSelect: 'Category',
      //OutPut
      onPageChange: action('page changes'),
      rowClicked: action('handlerClickRow'),
      sort: action('handlersort'),
      rowsSelected: action('handleselectrow'),
      textSearch: action('handler seacrh'),
      categorySelected: action('handler category'),
      statusFilter: action('handler status'),
    },
  })
);

// mock data
const columns: Column[] = [
  {
    title: 'Title',
    dataIndex: 'title',
    sort: true,
  },
  {
    title: 'From',
    dataIndex: 'from',
    sort: true,
  },
  {
    title: 'Time',
    dataIndex: 'time',
    sort: true,
  },
  {
    title: 'Sub description',
    dataIndex: 'subDescription',
  },
];

const dataSource = [
  {
    title: 'Update your account',
    from: 'nv_quoc',
    time: '08:00:00 01/01/2020',
    subDescription: 'Please update your information',
  },
  {
    title: 'Update your account',
    from: 'nv_quoc',
    time: '08:00:00 01/01/2020',
    subDescription: 'Please update your information',
  },
  {
    title: 'Update your account',
    from: 'nv_quoc',
    time: '08:00:00 01/01/2020',
    subDescription: 'Please update your information',
  },
  {
    title: 'Update your account',
    from: 'nv_quoc',
    time: '08:00:00 01/01/2020',
    subDescription: 'Please update your information',
  },
  {
    title: 'Update your account',
    from: 'nv_quoc',
    time: '08:00:00 01/01/2020',
    subDescription: 'Please update your information',
  },
  {
    title: 'Update your account',
    from: 'nv_quoc',
    time: '08:00:00 01/01/2020',
    subDescription: 'Please update your information',
  },
  {
    title: 'Update your account',
    from: 'nv_quoc',
    time: '08:00:00 01/01/2020',
    subDescription: 'Please update your information',
  },
  {
    title: 'Update your account',
    from: 'nv_quoc',
    time: '08:00:00 01/01/2020',
    subDescription: 'Please update your information',
  },
  {
    title: 'Update your account',
    from: 'nv_quoc',
    time: '08:00:00 01/01/2020',
    subDescription: 'Please update your information',
  },
  {
    title: 'Update your account',
    from: 'nv_quoc',
    time: '08:00:00 01/01/2020',
    subDescription: 'Please update your information',
  },
];

var cateSelect: LabelledValue<string>[] = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'System',
    value: 'system',
  },
  {
    label: 'Todo',
    value: 'todo',
  },
  {
    label: 'Schedule',
    value: 'schedule',
  },
  {
    label: 'Workflow',
    value: 'workflow',
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