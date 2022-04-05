import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { configButton } from '../../../store/models/button.i';
import { Category } from '../../../store/models/category.i';
import { Column, SortItem } from '../../../store/models/column.i';
import { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { ButtonFilterSchedule, FilterSchedule, LabelFilterSchedule, PlaceholderFilterSchedule } from '../../../store/models/schedule-filter.i';
import { ScheduleList } from '../../../store/models/scheduleList.i';
import * as XLSX from 'xlsx';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { UploaderService } from './list-excel.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../../environments/environment'
type AOA = any[][];

@Component({
  selector: 'brc-list-excel',
  templateUrl: './list-excel.component.html',
  styleUrls: ['./list-excel.component.scss'],
})

//na-khanh
export class ListExcelComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  sheet_name: string;
  dateNow : Date = new Date();

  data: AOA = [[1, 2], [3, 4]];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';

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

  @Input() notification_columns: Column[] = [];
  @Input() notification_dataSource: Object[] = [];
  @Input() notification_showRowSelection: boolean = false;
  @Input() showBtn: boolean = true;
  @Input() file: File = null;
  //Input pagination
  @Input() notification_totalRecords: number = 0;
  @Input() notification_recordsPerPage: number = 0;
  //Input notificationList
  @Input() configNotificationList: string = "Notifications List";

  @Input() showRowAction :boolean = false;

  @Output() rowClicked = new EventEmitter<Object>();
  @Output() rowID = new EventEmitter<Object>();
  @Output() rowsSelected = new EventEmitter<Object>();
  @Output() sort = new EventEmitter<SortItem[]>();
  @Output() btnAddTodo: EventEmitter<string> = new EventEmitter<string>();
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

  onFileInput(evt: any){
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      this.sheet_name = String(wb.SheetNames[0]);
    };
    const apiUrl = 'http://192.168.4.29:8080/api/exceltemplate';
    this.http.get(apiUrl).subscribe(val => console.log(val));
    const req = new HttpRequest('POST', environment.urlImport, 
    {	
      "excel_table_name": target.files[0].name,
      "excel_table_sheet_name": "Sheet-1",
      "title": "Test",
      "note": "hahaha",
      "column_header": "name_column_stt, name_column_name, name_column_progress",
      "create_date": this.dateNow.toISOString(),
      "update_date": this.dateNow.toISOString(),
      "time": this.dateNow.toISOString(),
      "is_delete": 0,
      "create_by": 2000,
      "update_by": 2000,
    });

    this.http.request(req).subscribe(val => console.log(val));
  }

  handlerDetail(data: Object) {
    this.rowID.emit(data);
  }
}
