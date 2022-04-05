import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'brc-filter-notification',
  templateUrl: './filter-notification.component.html',
  styleUrls: ['./filter-notification.component.scss']
})
export class FilterNotificationComponent implements OnInit {
  public valueFocus: number = -1;
  public categorySelect: boolean = true;
  @Input() events: Observable<void> = new Observable<void>();
  @Input() dataSelect = [];
  @Input() labelSelect;
  @Output() categorySelected = new EventEmitter<string>();
  @Output() statusFilter: EventEmitter<string> = new EventEmitter();
  public valueCategory = 0;
  constructor() { }
  ngOnInit(): void {
    this.events.subscribe(
      () => {
        this.valueFocus = -1;
        this.valueCategory = 0;
      }
    )
  }
  handlerButton(value) {
    this.valueFocus = value
    console.log(this.valueFocus)
    this.statusFilter.emit(value);
  }

  handlerSelect(value :string) {

    this.categorySelected.emit(value);
  }


}
