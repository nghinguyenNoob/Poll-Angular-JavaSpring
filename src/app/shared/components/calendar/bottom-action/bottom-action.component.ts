import { CalendarEvent } from 'angular-calendar';
import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'brc-bottom-action',
  templateUrl: './bottom-action.component.html',
  styleUrls: ['./bottom-action.component.scss'],
})
export class BottomActionComponent implements OnInit {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomActionComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  name: string;
  dataEvent: CalendarEvent;
  ngOnInit() {
    this.dataEvent = this.data;
  }
}
