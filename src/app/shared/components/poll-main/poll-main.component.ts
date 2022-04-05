import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

import { OptionPollResponse } from '../../../store/models/poll.i'
@Component({
  selector: 'brc-poll-main',
  templateUrl: './poll-main.component.html',
  styleUrls: ['./poll-main.component.scss']
})
export class PollMainComponent implements OnInit {

  // input
  @Input() labelQuestion: string;
  @Input() labelExpiration: string;
  @Input() labelResponse: string;
  @Input() titlePoll: string;
  @Input() question: string;
  @Input() expiration: string;
  @Input() typeInput: string;
  @Input() responses: OptionPollResponse[];
  // output
  @Output() addDataOption: EventEmitter<any> = new EventEmitter<any>();
  @Output() changeVoteOption: EventEmitter<any> = new EventEmitter<any>();
  @Output() referOptionPollDetail: EventEmitter<any> = new EventEmitter<any>();
  @Output() backScreenPoll: EventEmitter<any> = new EventEmitter<any>();


  //style progressbar
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  bufferValue = 60;

  public responseForm: FormGroup;
  public statusAddPopup = 'none';
  public optionName: string = '';
  public select: any;

  constructor() {
  }
  ngOnInit() {
  }
  onClickAdd() {
    this.statusAddPopup = 'block';
  }
  saveDataOption(data) {
    this.statusAddPopup = 'none';
    this.addDataOption.emit(data);
  }
  confirmCancel() {
    this.statusAddPopup = 'none';
  }

  changeSelect(optionId: number, data: any) {
    console.log(data.currentTarget.checked);
    console.log(optionId)
    let dataChange = {
      optionId: optionId,
      checked: data.currentTarget.checked
    }
    this.changeVoteOption.emit(dataChange);
  }

  viewMoreVoteOption(optionId: number) {
    this.referOptionPollDetail.emit(optionId);
  }

  backScreen() {
    this.backScreenPoll.emit();
  }

}
