import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { configButton } from '../../../store/models/button.i';
import { Category } from '../../../store/models/category.i';
import { Column, SortItem } from '../../../store/models/column.i';
import { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { ButtonFilterSchedule, FilterSchedule, LabelFilterSchedule, PlaceholderFilterSchedule } from '../../../store/models/schedule-filter.i';
import { ScheduleList } from '../../../store/models/scheduleList.i';

@Component({
  selector: 'brc-list-detail-excel',
  templateUrl: './list-detail-excel.component.html',
  styleUrls: ['./list-detail-excel.component.scss'],
})

//na-khanh
export class ListDetailExcelComponent implements OnInit {
  @Input() labelExcel: LabelInterface = {
    content: 'Name file excel',
    size: 30,
    color: '',
    backgroundColor: '',
  };
  // @Input() configButtonAdd: configButton = {
  //   colorButton: 'primary',
  //   colorMouseOver: 'Basic',
  //   colorMouseOut: 'primary',
  //   type: 'submit',
  //   text: 'Add ideal',
  // }

  @Input() configButtonAdd: ScheduleList = {
    filterBox: 'Filter Box',
    title: 'Schedule List',
    btnAdd: 'Add list',
  };

  @Input() list_detail_excel_columns: Column[] = [];
  @Input() list_detail_excel_dataSource: Object[] = [];
  @Input() list_detail_excel_showRowSelection: boolean = false;
  //Input pagination
  @Input() notification_totalRecords: number = 0;
  @Input() notification_recordsPerPage: number = 0;
  //Input notificationList
  @Input() configNotificationList: string = "Notifications List";

  @Input() showRowAction :boolean = false;

  @Output() rowClicked = new EventEmitter<Object>();
  @Output() rowsSelected = new EventEmitter<Object>();
  @Output() sort = new EventEmitter<SortItem[]>();
  @Output() btnAddTodo: EventEmitter<string> = new EventEmitter<string>();


  // pagination 
  @Input() todoTotalRecords: number = 100;
  @Input() todoRecordsPerPage: number = 10;
  @Input() todoPageIndex: number = 0;

  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

handleronPageChange(data: number) {
  this.onPageChange.emit(data);
}


  handleClickRow(data: Object) {
    this.rowClicked.emit(data);
  }

  handleSelectRow(data: Object) {
    this.rowsSelected.emit(data);
  }

  handlesort(data: SortItem[]) {
    this.sort.emit(data);
  }

  onClickBtnAdd() {
    this.btnAddTodo.emit();
  }
  onPageEvent($event){}
  constructor() {}
  ngOnInit(): void {}
}