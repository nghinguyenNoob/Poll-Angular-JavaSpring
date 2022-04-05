import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'brc-poll-main-popup',
  templateUrl: './poll-main-popup.component.html',
  styleUrls: ['./poll-main-popup.component.scss']
})
export class PollMainPopupComponent implements OnInit {

  @Input() statusAddPopup: string;
  @Output() dataFormOption: EventEmitter<any> = new EventEmitter<any>();
  @Output() confirmCancel: EventEmitter<any> = new EventEmitter<any>();

  public optionName: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  onClickBtnSave(data){
    this.dataFormOption.emit(data);
  }
  popupConfirmCancel() {
    this.confirmCancel.emit();
  }

}
