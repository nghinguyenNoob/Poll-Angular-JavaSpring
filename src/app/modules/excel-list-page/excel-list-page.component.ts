import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Column } from 'src/app/store/models/column.i';

import { NotificationStoreFacade } from '../../store/store-facades/notification.store-facade';
@Component({
  selector: 'brc-import-page',
  templateUrl: './excel-list-page.component.html',
  styleUrls: ['./excel-list-page.component.scss'],
})
export class ExcelListPageComponent implements OnInit {
  
  notification_columns: Column[] = [];
  notification_dataSource: Object[] = [];
  notification_showRowSelection: boolean = false;
  showBtn: boolean = true;
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
    this.router.navigateByUrl('import-excel/add');
  }
  handleDetail(){
    
  }
  onSubmit() {
    
  }
  columns: Column[] = [
    {
      title: 'Template Name',
      dataIndex: 'template_name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Date',
      dataIndex: 'date'
    }
  ];
  
  dataSource = [
    {
      id: '1',
      template_name: 'Template 1',
      description: '123',
      date: '02/02/2020',
    },
    {
      id: '2',
      template_name: 'Template 2',
      description: '123',
      date: '02/02/2020',
    },
    {
      id: '3',
      template_name: 'Template 3',
      description: '123',
      date: '02/02/2020',
    },
    {
      id: '4',
      template_name: 'Template 4',
      description: '123',
      date: '02/02/2020',
    },
  ];
}
