import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'brc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() { }


  @Input() placeholder: string;
  @Input() searchText: string = '';
  @Input() eventResetSearch: Observable<void> = new Observable<void>();
  @Output() textSearch = new EventEmitter<string>();

  ngOnInit(): void {
    this.eventResetSearch.subscribe(() => {
      this.searchText = "";
    })
  }
  search(value: string) {
    this.textSearch.emit(value);
  }
}
