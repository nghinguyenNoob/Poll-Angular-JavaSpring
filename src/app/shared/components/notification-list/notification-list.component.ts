import { AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Column, SortItem } from '../../../store/models/column.i';
@Component({
  selector: 'brc-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit, AfterViewChecked {
  constructor(private cdRef: ChangeDetectorRef) { }
  ngOnChanges(): void {
    //Responsive
    if (window.innerWidth > 1000) {
      this.sizeFlexFilter = 20;
      this.fontSizeTitle = 25;
      this.filterButton = false;
      this.showToolbar = false;
    }
    else if (window.innerWidth < 600) {
      this.filterButton = true;
      this.fontSizeTitle = 15;
      this.sizeFlexFilter = 0;
    }
    else {
      this.filterButton = true;
      this.sizeFlexFilter = 0;
      this.fontSizeTitle = 20;
    }
  }
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }
  public sizeFlexFilter: number = 20;
  public fontSizeTitle: number = 25;
  public filterButton: boolean = false;
  public showToolbar: boolean = false;
  public eventsSubject: Subject<void> = new Subject<void>();
  public eventPagination: Subject<void> = new Subject<void>();
  public eventSearch: Subject<void> = new Subject<void>();
  ngOnInit(): void {
  }
  //Input table
  @Input() notification_columns: Column[] = [];
  @Input() notification_dataSource: Object[] = [];
  @Input() notification_showRowSelection: boolean = false;
  //Input pagination
  @Input() notification_totalRecords: number = 0;
  @Input() notification_recordsPerPage: number = 0;
  //Input notificationList
  @Input() configNotificationList: string = "Notifications List";
  //Input search
  @Input() searchText: string = '';
  @Input() searchPlaceholder = 'Search ...';
  @Input() dataSelect = [];
  @Input() labelSelect = 'Category';
  //Input ResetPage
  //Output table
  @Output() rowClicked = new EventEmitter<Object>();
  @Output() rowsSelected = new EventEmitter<Object>();
  @Output() sort = new EventEmitter<SortItem[]>();
  //Output pagination
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();
  //Output text search
  @Output() textSearch: EventEmitter<string> = new EventEmitter<string>();
  //Output filter
  @Output() categorySelected = new EventEmitter<string>();
  @Output() statusFilter: EventEmitter<string> = new EventEmitter();
  @Output() resetPage: EventEmitter<string> = new EventEmitter();
  handleonPageChange(data: number) {
    this.onPageChange.emit(data);
  }
  handleClickRow(data: Object) {
    this.rowClicked.emit(data);
  }
  handlesort(data: SortItem[]) {
    this.sort.emit(data);
  }
  handleSelectRow(data: Object) {
    this.rowsSelected.emit(data);
  }
  handleSearch(textSearch: string) {
    this.textSearch.emit(textSearch);
  }
  //Responsive
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    if (window.innerWidth > 1000) {
      this.sizeFlexFilter = 20;
      this.fontSizeTitle = 25;
      this.filterButton = false;
      this.showToolbar = false;
    }
    else if (window.innerWidth < 600) {
      console.log(2)
      this.filterButton = true;
      this.fontSizeTitle = 15;
      this.sizeFlexFilter = 0;
    }
    else {
      console.log(3)
      this.filterButton = true;
      this.sizeFlexFilter = 0;
      this.fontSizeTitle = 20;
    }
  }
  changeShowToolbar() {
    this.showToolbar = !this.showToolbar;
  }
  getValueCategory(value) {
    this.eventPagination.next()
    this.categorySelected.emit(value);
  }
  getValueStatus(value) {
    this.eventPagination.next()
    this.statusFilter.emit(value);
  }
  clickResetPage() {
    this.resetPage.emit("Reset Page");
    this.eventsSubject.next();
    this.eventPagination.next();
    this.eventSearch.next();
  }

}
