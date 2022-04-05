import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PollList } from 'src/app/store/models/poll.i';
import { Column } from '../../../store/models/column.i';

@Component({
  selector: 'brc-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss'],
})
export class PollListComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }

  //Input table
  @Input() pollColumns: Column[] = [];
  @Input() pollDataSource: Object[] = [];
  @Input() pollShowButtonSelection: boolean = false;
  //Input pagination
  @Input() pollTotalRecords: number = 0;
  @Input() pollRecordsPerPage: number = 0;
  @Input() pollPageIndex: number = 0;
  //Input polllist config
  @Input() configPollList: PollList;

  //Input search
  @Input() searchText: string = '';
  @Input() placeholder: string = '';

  //Out put poll
  @Output() btnAddPoll: EventEmitter<string> = new EventEmitter<string>();
  @Output() rowDetail = new EventEmitter<Object>();
  @Output() rowDelete = new EventEmitter<Object>();
  @Output() pageOnPageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() onChangeSearch: EventEmitter<string> = new EventEmitter<string>();

  onClickBtnAdd() {
    this.btnAddPoll.emit();
  }
  onPageEvent(data: number) {
    this.pageOnPageChange.emit(data);
  }
  rowDetailEvent(data: Object) {
    this.rowDetail.emit(data);
  }
  rowDeleteEvent(data: Object) {
    this.rowDelete.emit(data);
  }
  onChangeSearchEvent(data: string) {
    this.onChangeSearch.emit(data);
  }
}
