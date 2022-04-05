import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brc-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.scss'],

})
export class PollDetailComponent implements OnInit {

  @Input() voters: any[];
  @Input() optionName: string;
  @Input() topvote: number;

  @Output() backScreenOption: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  backScreen(){
    this.backScreenOption.emit();
  }
}
