import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketClientService } from 'src/app/socket-client/socket-client.service';
import { IsRead } from 'src/app/store/models/is_read.i';
import { LabelInterface } from 'src/app/store/models/label.i';
import { ReminderNotification } from 'src/app/store/models/reminder-notification.i';
import { NotificationService } from 'src/app/store/services/notification.service';
import { NotificationStoreFacade } from 'src/app/store/store-facades/notification.store-facade';
import { Column } from 'src/app/store/models/column.i';
@Component({
  selector: 'brc-add-excel',
  templateUrl: './add-list-excel.component.html',
  styleUrls: ['./add-list-excel.component.scss'],
})

// na-khanh
export class AddListExcelComponent implements OnInit {
  @Input() labelExcel: LabelInterface = {
    content: 'Add New',
    size: 30,
    color: '',
    backgroundColor: '',
  };

  columns: Column[] = [
      {
        title: 'Họ và tên nhân viên',
        dataIndex: 'Employees',
        sort: true,
      },
      {
        title: 'Tên vợ / chồng ',
        dataIndex: 'Employees1'
      },
      {
        title: 'Tên con',
        dataIndex: 'Employees2',
      },
      {
        title: 'Tuổi',
        dataIndex: 'Employees3',
      },
      {
        title: 'Đăng ký suất ăn',
        dataIndex: 'Employees4',
      },
      {
        title: 'Không đăng ký suất ăn',
        dataIndex: 'Employees5',
      },
    ];
    rows: Column[] = [
      {
        title: 'na',
        dataIndex: 'Employees',
        sort: true,
      },
      {
        title: 'na ',
        dataIndex: 'Employees1'
      },
      {
        title: 'na',
        dataIndex: 'Employees2',
      },
      {
        title: 'na',
        dataIndex: 'Employees3',
      },
      {
        title: 'Đăng ký suất ăn',
        dataIndex: 'Employees4',
      },
      {
        title: 'Không đăng ký suất ăn',
        dataIndex: 'Employees5',
      },
    ];
  // // @Input() configButtonAdd: configButton = {
  // //   colorButton: 'primary',
  // //   colorMouseOver: 'Basic',
  // //   colorMouseOut: 'primary',
  // //   type: 'submit',
  // //   text: 'Add ideal',
  // // }

  // @Input() configButtonAdd: ScheduleList = {
  //   filterBox: 'Filter Box',
  //   title: 'Schedule List',
  //   btnAdd: 'Add list',
  // };

  // @Input() notification_columns: Column[] = [];
  // @Input() notification_dataSource: Object[] = [];
  // @Input() notification_showRowSelection: boolean = false;
  // //Input pagination
  // @Input() notification_totalRecords: number = 0;
  // @Input() notification_recordsPerPage: number = 0;
  // //Input notificationList
  // @Input() configNotificationList: string = "Notifications List";

  // @Input() showRowAction : true;

  // @Output() rowClicked = new EventEmitter<Object>();
  // @Output() rowsSelected = new EventEmitter<Object>();
  // @Output() sort = new EventEmitter<SortItem[]>();
  // handleClickRow(data: Object) {
  //   this.rowClicked.emit(data);
  // }

  // handleSelectRow(data: Object) {
  //   this.rowsSelected.emit(data);
  // }

  // handlesort(data: SortItem[]) {
  //   this.sort.emit(data);
  // }
  constructor( ) {
  }
  ngOnInit(): void {}
}