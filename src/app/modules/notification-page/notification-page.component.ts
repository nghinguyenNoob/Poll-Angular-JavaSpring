import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Column, SortItem } from '../../store/models/column.i';
import { FilterNotification } from '../../store/models/notificaiton-filter.i';
import { Pagination } from '../../store/models/pagination.i';
import { NotificationStoreFacade } from '../../store/store-facades/notification.store-facade';
import { Notification } from '../../store/models/notification.i';

const columns: Column[] = [
  {
    title: 'Title',
    dataIndex: 'title',
    sort: true,
  },
  {
    title: 'Event Type',
    dataIndex: 'eventTypeName',
    sort: true,
  },
  {
    title: 'Start Time',
    dataIndex: 'eventStartTime',
    sort: true,
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sort: true,
  },
];

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss'],
})
export class NotificationPageComponent implements OnInit {
  public dataEvent = [];
  public totalColumns = columns;
  public notification_dataSource: Object[];
  public notification_totalRecords: number = 100;
  public notification_recordsPerPage: number = 5;
  public notification_showRowSelection: boolean = false;
  public filter: FilterNotification = {
    textSearch: '',
    category: '',
    sort: [],
    event: '',
    status: -1,
  };
  public eventButton = [];
  public defaultPagination: Pagination = {
    page: 1,
    pageSize: 10,
    total: 10,
  };

  constructor(
    private storeFacade: NotificationStoreFacade,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.storeFacade.loadValueEvent();

    this.defaultPagination = this.storeFacade.pagination
      ? this.storeFacade.pagination
      : this.defaultPagination;
    this.storeFacade.loadAllNotification(this.defaultPagination, this.filter);
    this.storeFacade.getValueTablePage().subscribe((notification) => {
      if (notification.listNotification.length > 0) {
        this.notification_dataSource = this.convertIsRead(
          notification.listNotification
        );
      } else {
        this.notification_dataSource = [];
      }
      (this.notification_totalRecords = notification.pagination.total),
        (this.notification_recordsPerPage = notification.pagination.pageSize);
      this.dataEvent = notification.listEvent;
    });
  }
  convertIsRead(data: Notification[]) {
    return data.map((n) => ({
      ...n,
      status: n.isRead == 1 ? 'Readied' : 'Unread',
    }));
  }
  rowClicked(data: any) {
    this.router.navigate([data?.eventPath, data?.eventId]);
  }
  rowsSelected(data: Object) {
    console.log(data);
  }
  pageSort(data: SortItem[]) {
    this.filter = {
      textSearch: this.filter.textSearch,
      category: this.filter.category,
      sort: data,
      event: this.filter.event,
      status: this.filter.status,
    };
    this.storeFacade.loadAllNotification(this.defaultPagination, this.filter);
  }
  onPageChange(data: number) {
    this.defaultPagination = {
      page: data,
      pageSize: this.defaultPagination.pageSize,
      total: this.defaultPagination.total,
    };
    this.storeFacade.loadAllNotification(this.defaultPagination, this.filter);
  }
  textSearch(textSearch: string) {
    this.filter = {
      textSearch: textSearch,
      category: this.filter.category,
      sort: this.filter.sort,
      event: this.filter.event,
      status: this.filter.status,
    };
    this.defaultPagination = {
      page: 1,
      pageSize: this.defaultPagination.pageSize,
      total: this.defaultPagination.total,
    };
    this.storeFacade.loadAllNotification(this.defaultPagination, this.filter);
  }
  statusFilter(value: number) {
    this.filter = {
      textSearch: this.filter.textSearch,
      category: this.filter.category,
      sort: this.filter.sort,
      event: this.filter.event,
      status: value,
    };
    this.defaultPagination = {
      page: 1,
      pageSize: this.defaultPagination.pageSize,
      total: this.defaultPagination.total,
    };
    this.storeFacade.loadAllNotification(this.defaultPagination, this.filter);
  }
  categorySelected(value: string) {
    this.filter = {
      textSearch: this.filter.textSearch,
      category: this.filter.category,
      sort: this.filter.sort,
      event: value,
      status: this.filter.status,
    };
    this.defaultPagination = {
      page: 1,
      pageSize: this.defaultPagination.pageSize,
      total: this.defaultPagination.total,
    };
    this.storeFacade.loadAllNotification(this.defaultPagination, this.filter);
  }
  resetPage() {
    //default filter
    this.filter = {
      textSearch: '',
      category: '',
      sort: [],
      event: '',
      status: -1,
    };
    //default pagination , page 1
    this.defaultPagination = {
      page: 1,
      total: this.notification_totalRecords,
      pageSize: this.notification_recordsPerPage,
    };
    this.storeFacade.loadAllNotification(this.defaultPagination, this.filter);
  }
}
