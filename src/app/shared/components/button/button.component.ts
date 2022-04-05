import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { configButton } from '../../../store/models/button.i';

@Component({
  selector: 'brc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  constructor() {
    this.defaultColor = this.configButton.colorButton;
    this.defaultColorOver = this.configButton.colorMouseOver;
  }

  @Output() btnClickEmt: EventEmitter<string> = new EventEmitter<string>();
  @Input() configButton: configButton = {
    colorButton: 'primary',
    colorMouseOver: 'warn',
    colorMouseOut: 'primary',
    type: 'submit',
    text: 'Click me!',
  };
  defaultColor;
  defaultColorOver;
  active = 'true';

  onBtnClick() {
    if (this.active == 'true') {
      this.configButton.colorMouseOut = this.configButton.colorMouseOver;
      this.active = 'false';
      this.configButton.colorMouseOver = this.defaultColor;
      this.btnClickEmt.emit(this.configButton.type);
      return 0;
    } else {
      this.configButton.colorMouseOut = this.defaultColor;
      this.active = 'true';
      this.configButton.colorMouseOver = this.defaultColorOver;
      this.btnClickEmt.emit(this.configButton.type);
      return 0;
    }
  }
}
