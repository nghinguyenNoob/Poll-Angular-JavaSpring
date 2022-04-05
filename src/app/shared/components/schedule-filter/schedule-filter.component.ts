import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { configButton } from '../../../store/models/button.i';
import { Category } from '../../../store/models/category.i';
import { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import type {
  ButtonFilterSchedule,
  FilterSchedule,
  LabelFilterSchedule,
  PlaceholderFilterSchedule,
  ValueFilterSchedule,
} from '../../../store/models/schedule-filter.i';
import { SelectMultipleComponent } from '../select-multiple/select-multiple.component';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'brc-schedule-filter',
  templateUrl: './schedule-filter.component.html',
  styleUrls: ['./schedule-filter.component.scss'],
})
export class ScheduleFilterComponent {
  public model: FilterSchedule;
  public valueFilterSchedule: ValueFilterSchedule = {
    valueSearch: '',
    valueImportance: '',
    valueCategory: [],
    valueGetToDate: '',
    valueGetToTimeNow: '',
    valueGetToHour: '',
    valueGetToMinute: '',
    valueGetFromDate: '',
    valueGetFromTimeNow: '',
    valueGetFromHour: '',
    valueGetFromMinute: '',
  };
  constructor() {}
  @Input() buttonFilterSchedule: ButtonFilterSchedule<configButton>;
  @Input() labelScheduleFilter: LabelFilterSchedule<LabelInterface>;
  @Input() placeholderFilterSchedule: PlaceholderFilterSchedule;
  @Input() dataCategory: Category[] = [];
  @Input() dataImportance: LabelledValue<string>[];
  @Output() valueFilter = new EventEmitter();
  @ViewChild(SelectMultipleComponent) selectMultiple: SelectMultipleComponent;
  @ViewChild(SelectComponent) selectOne: SelectComponent;

  textSearch(data: string) {
    this.valueFilterSchedule.valueSearch = data;
  }
  getValueImportance(data: string) {
    this.valueFilterSchedule.valueImportance = data;
  }
  outputSelected(data: string[]) {
    this.valueFilterSchedule.valueCategory = data;
  }
  getToDate(data: string) {
    this.valueFilterSchedule.valueGetToDate = data;
  }
  getToHour(data: string) {
    this.valueFilterSchedule.valueGetToHour = data;
  }
  getToMinute(data: string) {
    this.valueFilterSchedule.valueGetToMinute = data;
  }

  getFromDate(data: string) {
    this.valueFilterSchedule.valueGetFromDate = data;
  }
  getFromTimeNow(data: string) {
    this.valueFilterSchedule.valueGetFromTimeNow = data;
  }
  getFromHour(data: string) {
    this.valueFilterSchedule.valueGetFromHour = data;
  }
  getFromMinute(data: string) {
    this.valueFilterSchedule.valueGetFromMinute = data;
  }
  onSubmit() {
    let fromHour =
      this.valueFilterSchedule.valueGetFromHour === ''
        ? '00'
        : this.valueFilterSchedule.valueGetFromHour;
    let fromMinute =
      this.valueFilterSchedule.valueGetFromMinute === ''
        ? '00'
        : this.valueFilterSchedule.valueGetFromMinute;
    let toHour =
      this.valueFilterSchedule.valueGetToHour === ''
        ? '00'
        : this.valueFilterSchedule.valueGetToHour;
    let toMinute =
      this.valueFilterSchedule.valueGetToMinute === ''
        ? '00'
        : this.valueFilterSchedule.valueGetToMinute;
    this.model = {
      textSearch: this.valueFilterSchedule.valueSearch,
      importance: this.valueFilterSchedule.valueImportance,
      category: this.valueFilterSchedule.valueCategory,
      fromDateList:
        this.valueFilterSchedule.valueGetFromDate === ''
          ? ''
          : this.valueFilterSchedule.valueGetFromDate +
            'T' +
            fromHour +
            ':' +
            fromMinute +
            ':00.000Z',
      toDateList:
        this.valueFilterSchedule.valueGetToDate === ''
          ? ''
          : this.valueFilterSchedule.valueGetToDate +
            'T' +
            toHour +
            ':' +
            toMinute +
            ':00.000Z',
    };
    this.valueFilter.emit(this.model);
  }
  clear() {
    this.valueFilterSchedule.valueSearch = '';
    this.valueFilterSchedule.valueImportance = '';
    this.valueFilterSchedule.valueCategory = [];
    this.valueFilterSchedule.valueGetFromDate = '';
    this.valueFilterSchedule.valueGetToDate = '';
    this.valueFilterSchedule.valueGetToHour = '';
    this.valueFilterSchedule.valueGetFromHour = '';
    this.selectMultiple.clear();
    this.selectOne.clear();
  }
}
