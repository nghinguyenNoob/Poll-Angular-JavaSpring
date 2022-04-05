import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleFilter } from '../../store/actions/schedule.action';
import { configButton } from '../../store/models/button.i';
import { Category } from '../../store/models/category.i';
import { Column, SortItem } from '../../store/models/column.i';
import { LabelInterface } from '../../store/models/label.i';
import { LabelledValue } from '../../store/models/labelvalue.i';
import {
  ButtonFilterSchedule,
  LabelFilterSchedule,
  PlaceholderFilterSchedule,
} from '../../store/models/schedule-filter.i';
import {
  FilterSchedule,
  Schedule,
} from '../../store/models/schedule.i';
import { ScheduleList } from '../../store/models/scheduleList.i';
import { ScheduleState } from '../../store/reducers/schedule.reducer';
import { StoreFacade } from '../../store/store-facades/schedule.store-facade';
import { UserNames } from '../../store/models/schedule.i';
import { formatDate } from '@angular/common';

@Component({
  selector: 'brc-schedule-list-page',
  templateUrl: './schedule-list-page.component.html',
  styleUrls: ['./schedule-list-page.component.scss'],
})
export class ScheduleListPageComponent implements OnInit {
  private filter: FilterSchedule = this.storeFacade.filter;
  public scheduleTotalRecords: number = 100;
  public scheduleRecordsPerPage: number = 5;
  public schedulePageIndex: number = 0;
  public scheduleShowRowSelection: boolean = false;
  public scheduleColumns: Column[] = columns;
  public scheduleDataSource = [];
  buttonFilterSchedule: ButtonFilterSchedule<
    configButton
  > = configButtonFilterSchedule;
  labelScheduleFilter: LabelFilterSchedule<
    LabelInterface
  > = configLabelScheduleFilter;
  placeholderFilterSchedule: PlaceholderFilterSchedule = configPlaceholderFilterSchedule;
  scheduleDataCategory: Category[];
  scheduleDataImportance: LabelledValue<string>[] = dataImportance;
  configScheduleList: ScheduleList = {
    filterBox: 'Filter Box',
    title: 'Schedule List',
    btnAdd: 'Add Schedule',
  };
  constructor(private storeFacade: StoreFacade, private _router: Router) {}
  ngOnInit(): void {
    this.storeFacade.getValuePaginationAndFilter();
  //  this.storeFacade.getCategorySchedule();
    this.storeFacade.dispatchCategory();
    //thực hiện action filter schedule để gán giá trị vào store
    this.storeFacade.filterSchedule(
      this.storeFacade.pagination,
      this.storeFacade.filter
    );
    this.storeFacade.getValueScheduleTablePage().subscribe((schedule) => {
      this.updateData(schedule);
    });
  }
  updateData(schedule: ScheduleState) {
    let categories: Category[] = [];
    schedule.categories?.forEach((schedule) => {
      categories.push({
        categoryName: schedule.name,
        categoryId: schedule.scheduleCategoryId,
      });
    });
    this.scheduleDataCategory = categories;
    this.scheduleDataSource = this.convertDataSchedule(schedule.listSchedule);
    this.scheduleTotalRecords = schedule.pagination.total;
    this.scheduleRecordsPerPage = schedule.pagination.pageSize;
    this.schedulePageIndex = schedule.pagination.page - 1;
  }

  convertDataSchedule(schedule: Schedule[]): Schedule[] {
    var dataFake = [];
    schedule.forEach((item) => {
      let data = {
        scheduleId: item.scheduleId,
        title: item.title,
        description: item.description,
        place: item.place,
        importance: item.importance,
        typeRepeat: item.typeRepeat,
        time: `${formatDate(
          new Date(item.timeStart),
          'yyyy-MM-dd HH:mm ',
          'en'
        )} - ${formatDate(new Date(item.dueTime), 'yyyy-MM-dd HH:mm ', 'en')}`,
        dueTime: item.dueTime,
        scheduleCategoryId: item.scheduleCategoryId,
        scheduleCategoryName: item.scheduleCategoryName,
        timeStart: item.timeStart,
        userName: item.userName,
        users: this.convertUserToString(JSON.parse(item.users)),
      };
      dataFake.push(data);
    });
    return dataFake;
  }

  convertUserToString(users: UserNames[]): string {
    if (users == null) return '';
    return users.map((e) => e.userName).join(', ') + '.';
  }

  scheduleFilter(data: FilterSchedule) {
    this.filter = data;
    let pagination = Object.assign({}, this.storeFacade.pagination);
    pagination.page = 1;
    this.storeFacade.filterSchedule(pagination, this.filter);
  }

  scheduleClick(data: Object) {
    this._router.navigateByUrl(`schedule/detail/${data['scheduleId']}`);
  }

  scheduleSelect(data: ScheduleFilter) {
    console.log(data);
  }

  scheduleSort(data: SortItem[]) {
    this.filter = {
      textSearch: this.filter.textSearch,
      category: this.filter.category,
      importance: this.filter.importance,
      fromDateList: this.filter.fromDateList,
      toDateList: this.filter.toDateList,
      sort: data,
    };
    let pagination = Object.assign({}, this.storeFacade.pagination);
    this.storeFacade.filterSchedule(pagination, this.filter);
  }

  scheduleAdd(data) {
    this._router.navigateByUrl('schedule/add');
  }

  changePage(data) {
    let pagination = Object.assign({}, this.storeFacade.pagination);
    pagination.page = Number(data.pageIndex) + 1;
    this.storeFacade.filterSchedule(pagination, this.filter);
  }
  btnClickEmt(){
    this._router.navigate(['/schedule']);
  }
}
// mock data
const columns: Column[] = [
  {
    title: 'Title Schedule',
    dataIndex: 'title',
    sort: true,
  },
  {
    title: 'Time',
    dataIndex: 'time',
  },
  {
    title: 'Category',
    dataIndex: 'scheduleCategoryName',
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

//filter
const configPlaceholderFilterSchedule: PlaceholderFilterSchedule = {
  placeholderSearch: 'search schedule...',
  titleImportance: 'importance',
  titleCategory: 'category',
};

const configLabelScheduleFilter: LabelFilterSchedule<LabelInterface> = {
  labelImportance: {
    content: 'Importance',
    size: 15,
    color: '',
    backgroundColor: '',
  },
  labelFromDate: {
    content: 'From date',
    size: 15,
    color: '',
    backgroundColor: '',
  },
  labelToDate: {
    content: 'To date',
    size: 15,
    color: '',
    backgroundColor: '',
  },
  labelCategory: {
    content: 'Category',
    size: 15,
    color: '',
    backgroundColor: '',
  },
};

const configButtonFilterSchedule: ButtonFilterSchedule<configButton> = {
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
    label: 'High',
    value: 'High',
  },
  {
    label: 'Medium',
    value: 'Medium',
  },
  {
    label: 'Normal',
    value: 'Normal',
  },
];
