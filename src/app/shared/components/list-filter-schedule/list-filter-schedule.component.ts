import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import type { configButton } from '../../../store/models/button.i';
import { Category } from '../../../store/models/category.i';
import { ICheckBoxItem } from '../../../store/models/checkbox-item.i';
import type { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { FilterTodo } from '../../../store/models/todo-filter.i';
import { CheckboxNewComponent } from '../checkbox/checkbox-new/checkbox-new.component';
import { SelectMultipleComponent } from '../select-multiple/select-multiple.component';

@Component({
  selector: 'brc-list-filter',
  templateUrl: './list-filter-schedule.component.html',
  styleUrls: ['./list-filter-schedule.component.scss'],
})
export class ListFilterScheduleComponent implements OnInit {
  public valueSearch: string = '';
  public incomplete: string = 'false';
  public complete: string = 'false';
  public valueImportance: string = '';
  public valueCategory: string[] = [];
  public valueGetToDate: string = '';
  public valueGetToTimeNow: string = '';
  public valueGetToHour: string = '';
  public valueGetToMinute: string = '';
  public valueGetFromDate: string = '';
  public valueGetFromTimeNow: string = '';
  public valueGetFromHour: string = '';
  public valueGetFromMinute: string = '';
  constructor() {}
  @Input() buttonSubmit: configButton;
  @Input() buttonReset: configButton;
  @Input() labelImportance: LabelInterface;
  @Input() labelFromDate: LabelInterface;
  @Input() labelToDate: LabelInterface;
  @Input() labelCategory: LabelInterface;
  @Input() placeholderSearch: string = 'search todo ...';
  @Input() titleGroupCheckbox: string = 'Status';
  @Input() titleImportance: string = 'Importance';
  @Input() titleCategory: string = 'Category';
  @Input() dataCheckbox: CheckboxNewComponent[];
  @Input() dataCategory: Category[] = [];
  @Input() dataImportance: LabelledValue<string>[];
  @Output() valueFilter = new EventEmitter();
  @ViewChild(SelectMultipleComponent) selectMultiple: SelectMultipleComponent;
  @ViewChild(CheckboxNewComponent) checkBoxNew: CheckboxNewComponent;
  ngOnInit(): void {}
  textSearch(data: string) {
    this.valueSearch = data;
  }
  getDataCheckBox(data: Object) {
    this.incomplete = String(data[1].checked);
    this.complete = String(data[0].checked);
  }
  getValueImportance(data: string) {
    this.valueImportance = data;
  }
  outputSelected(data: string[]) {
    this.valueCategory = data;
  }
  getToDate(data: string) {
    this.valueGetToDate = data;
  }
  getToHour(data: string) {
    this.valueGetToHour = data;
  }
  getToMinute(data: string) {
    this.valueGetToMinute = data;
  }

  getFromDate(data: string) {
    this.valueGetFromDate = data;
  }
  getFromTimeNow(data: string) {
    this.valueGetFromTimeNow = data;
  }
  getFromHour(data: string) {
    this.valueGetFromHour = data;
  }
  getFromMinute(data: string) {
    this.valueGetFromMinute = data;
  }
  onSubmit() {
    let sta = '';
    if (this.complete === 'true' && this.incomplete === 'true') {
      sta = '';
    } else if (this.incomplete === 'true') {
      sta = 'incomplete';
    } else if (this.complete === 'true') {
      sta = 'complete';
    } else {
      sta = '';
    }

    let fromHour = this.valueGetFromHour === '' ? '00' : this.valueGetFromHour;
    let fromMinute =this.valueGetFromMinute === '' ? '00' : this.valueGetFromMinute;
    let toHour = this.valueGetToHour === '' ? '00' : this.valueGetToHour;
    let toMinute = this.valueGetToMinute === '' ? '00' : this.valueGetToMinute;
    let model: FilterTodo = {
      textSearch: this.valueSearch,
      importance: this.valueImportance,
      category: this.valueCategory,
      status: sta,
      fromDate:
        this.valueGetFromDate === ''
          ? ''
          : this.valueGetFromDate +
            'T' +
            fromHour +
            ':' +
            fromMinute +
            ':00.000Z',
      toDate:
        this.valueGetToDate === ''
          ? ''
          : this.valueGetToDate + 'T' + toHour + ':' + toMinute + ':00.000Z',
    };
    this.valueFilter.emit(model);
  }
  clear() {
    this.valueSearch = '';
    this.valueImportance = '';
    this.valueCategory = [];
    this.valueGetFromDate = '';
    this.valueGetToDate = '';
    this.valueGetToHour='';
    this.valueGetFromHour='';
    this.complete = '';
    this.incomplete ='';
    this.selectMultiple.clear();
    this.checkBoxNew.clear();
  }
}
