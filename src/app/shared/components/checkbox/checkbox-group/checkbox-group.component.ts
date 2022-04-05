import { ICheckBoxItem } from './../../../../store/models/checkbox-item.i';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const transform = (data = []) => {
  const mappedData = {};
  data.forEach((item) => (mappedData[item.value] = item));
  return mappedData;
};
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'brc-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
})
export class CheckboxGroupComponent implements OnInit {
  @Output() dataCheckBox = new EventEmitter();
  @Input() checkboxField: ICheckBoxItem[];
  @Input() titleGroup: string;
  constructor() {}
  tempArr = [];
  ngOnInit(): void {
    // this.checkboxDefault = this.checkboxField;
    this.tempArr = this.checkboxField.map((rs) => {
      return rs;
    });
  }
  get(value: ICheckBoxItem) {
    let dataTransform = transform(this.tempArr);
    /**
     * Update check
     */
    let newData = Object.values({
      ...dataTransform,
      [value.value]: {
        ...value,
        checked: value.checked,
      },
    });
    this.tempArr = newData;
    this.dataCheckBox.emit(newData);
  }
}
