import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brc-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements OnInit {
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() initValue: string = '';
  @Input() row: number = 3;
  @Input() readonly : boolean = false;

  @Output() value = new EventEmitter<string>();

  handlerChangeTextarea() {
    this.initValue.trim() !== ''
      ? this.value.emit(this.initValue)
      : this.value.emit(null);
  }

  constructor() {}

  ngOnInit(): void {}
}
