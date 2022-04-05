import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brc-datetime-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss']
})
export class DateTimePickerComponent implements OnInit {
  @Input() Day: string ="";
  @Input() times: string ="";

  @Output() getDay : EventEmitter<string> = new EventEmitter<string>();
  @Output() getTimeNow = new EventEmitter<string>();
  @Output() getHour = new EventEmitter<string>();
  @Output() getMinute = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  getDate(data:string){
    this.getDay.emit(data);
  }

  getHours(data:string){
    this.getHour.emit(data);
  }
  getMinutes(data:string){
    this.getMinute.emit(data);
  }

}
