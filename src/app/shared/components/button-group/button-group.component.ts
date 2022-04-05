import { IButtonGroup } from './../../../store/models/button-group.i';
import { MenuItem } from '../../../store/models/menu-item.i';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'brc-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent implements OnInit {
  value: string;
  @Input() buttonGroup: IButtonGroup<string>[];
  @Output() valueButtonGroup: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  change(event: MatButtonToggleChange) {
    this.value = event.value;
    this.valueButtonGroup.emit(event.value);
  }
}
