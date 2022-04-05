import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Column } from 'src/app/store/models/column.i';

import { NotificationStoreFacade } from '../../store/store-facades/notification.store-facade';
@Component({
  selector: 'brc-excel-detail-page',
  templateUrl: './excel-detail-page.component.html',
  styleUrls: ['./excel-detail-page.component.scss'],
})
export class ExcelDetailPageComponent implements OnInit {
  
  notification_columns: Column[] = [];
  notification_dataSource: Object[] = [];
  notification_showRowSelection: boolean = false;
  //Input pagination
  notification_totalRecords: number = 0;
  notification_recordsPerPage: number = 0;
  //Input notificationList
  configNotificationList: string = "Notifications List";

  showRowAction : boolean = true;
  
  constructor(
    public http: HttpClient,
    private router: Router,
    private notificationStore: NotificationStoreFacade
  ) {}

  ngOnInit(): void {
    this.notification_columns = this.columns;
    this.notification_dataSource = this.dataSource;
  }
  pageOnClickBtnAdd() {
    this.router.navigateByUrl('excel-detail-page/add');
  }
  onSubmit() {
    
  }
  columns: Column[] = [
    {
      title: 'Stt',
      dataIndex: 'Stt',
      sort: true,
    },
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
  
  dataSource = [
    {
      Stt: '1',
      Employees: 'nv_quoc',
      Employees1: 'Spider men',
      Employees3: '3',
      Employees4: 'X',
      Employees5: '',
    },
    {
      Stt: '2',
      Employees: 'n_anh',
      Employees1: 'Iron men',
      Employees3: '3',
      Employees4: 'X',
      Employees5: '',
    },
    {
      Stt: '3',
      Employees: 'nv_quoc',
      Employees1: 'abc',
      Employees3: '3',
      Employees4: 'X',
      Employees5: '',
    },
    {
      Stt: '4',
      Employees: 'nv_quoc',
      Employees1: 'abc',
      Employees3: '3',
      Employees4: 'X',
      Employees5: '',
    },
    {
      Stt: '5',
      Employees: 'nv_quoc',
      Employees1: 'abc',
      Employees3: '3',
      Employees4: 'X',
      Employees5: '',
    },
  ];
}
