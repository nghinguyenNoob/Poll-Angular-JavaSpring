import { ICheckBoxItem } from '../../../../store/models/checkbox-item.i';
import {
  Component,
  Input,
  forwardRef,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'brc-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() label: string;
  @Input() isChecked = false;
  @Input() disabled = true;
  @Input() className: string;
  @Input() valueField: string;
  @Output() getChange: EventEmitter<ICheckBoxItem> = new EventEmitter();
  get value(): boolean {
    return this.isChecked;
  }

  set value(value: boolean) {
    this.isChecked = value;
  }

  writeValue(value: boolean): void {
    if (value !== this.isChecked) {
      this.isChecked = value;
    }
    else return;
  }

  onChange(isChecked) {
    this.value = isChecked;
    this.getChange.emit({
      label: this.label,
      checked: this.isChecked,
      value: this.valueField,
    });
  }

  ngOnInit(): void {}
}
