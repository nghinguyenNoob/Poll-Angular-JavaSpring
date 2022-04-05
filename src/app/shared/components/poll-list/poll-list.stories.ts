import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { PollList } from 'src/app/store/models/poll.i';
import { Column } from '../../../store/models/column.i';
import { PollListComponent } from './poll-list.component';
import { PollListModule } from './poll-list.module';

storiesOf('Poll List', module)
  .add('PollList Component', () => ({
    component: PollListComponent,
    moduleMetadata: {
      imports: [
        PollListModule, BrowserAnimationsModule
      ],
    },
    props: {
      //Input table
      pollColumns: columns,
      pollDataSource: dataSource,
      pollShowButtonSelection: true,
      //Input pagination
      pollTotalRecords: 10,
      pollRecordsPerPage: 3,
      pollPageIndex: 0,
      //Input polllist config
      configPollList: configPollList,
      //Input search
      searchText: '',
      placeholder: '',
      //Out put poll
      btnAddPoll: action('btn add poll'),
      rowDetail: action('row detail'),
      rowDelete: action('row delete'),
      pageOnPageChange: action('page change'),
      onChangeSearch: action('page search'),
    },

  }));

const columns: Column[] = [
  {
    title: 'STT',
    dataIndex: 'stt',
    sort: true,
  },
  {
    title: 'Question',
    dataIndex: 'question',
    sort: true,
  },
  {
    title: 'Expiration',
    dataIndex: 'expiration',
    sort: true,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sort: true,
  },
  {
    title: 'Created by',
    dataIndex: 'create_by',
    sort: true,
  },
  {
    title: 'Top votes',
    dataIndex: 'topvotes',
    sort: false,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    sort: false,
  },
];

const configPollList: PollList = {
  filterBox: 'Filter Box',
  title: 'Poll List',
  btnAdd: 'Add Poll',
};

const topvotes = [
  "top",
  {optionName: "Đi dạo phố", voteCount: 4},
  {optionName: "Đi nhậu", voteCount: 2},
  {optionName: "Lập team giao lưu liên quân", voteCount: 2}
]

const dataSource = [
  { id: 1, stt: '1', question: 'Giải đấu Liên Quân', expiration: '31/12/2020 17:30', status: 'In process', create_by: 'Phuong Dung',topvotes, action: 'action' },
  { id: 2, stt: '2', question: 'Cuối tuần bạn muốn đi đâu?', expiration: '25/12/2020 11:30', status: 'In process', create_by: 'Thach monus',topvotes, action: 'action' },
  { id: 3, stt: '3', question: 'Tiệc Noel ăn gì?', expiration: '18/12/2020 17:30', status: 'In process', create_by: 'nc_nghi',topvotes, action: 'action' },
  { id: 4, stt: '4', question: 'Teambuilding', expiration: '31/11/2020 17:30', status: 'Expired', create_by: 'Phuong Dung',topvotes, action: 'action' },
  { id: 5, stt: '5', question: 'Mùa hè sôi động', expiration: '25/5/2020 17:30', status: 'Expired', create_by: 'Phuong Dung',topvotes, action: 'action' },
];


