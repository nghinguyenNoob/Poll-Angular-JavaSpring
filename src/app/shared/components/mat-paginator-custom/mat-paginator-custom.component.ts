import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'brc-mat-paginator',
  templateUrl: './mat-paginator-custom.component.html',
  styleUrls: ['./mat-paginator-custom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatPaginatorCustomComponent implements OnChanges {
  @Input() pageSize: number;
  @Input() total: number;
  @Input() pageIndex: number = 0;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Output() onPageChange = new EventEmitter();
  constructor() {}
  onPageEvent = ($event) => {
    this.onPageChange.emit($event);
  };
  ngOnChanges() {}
}
