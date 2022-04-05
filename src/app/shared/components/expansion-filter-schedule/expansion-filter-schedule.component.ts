import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { configButton } from 'src/app/store/models/button.i';
import { Category } from 'src/app/store/models/category.i';
import { LabelInterface } from 'src/app/store/models/label.i';
import type { LabelledValue, LabelExpansionFilter} from 'src/app/store/models/labelvalue.i';
import type { ButtonFilterSchedule, LabelFilterSchedule, PlaceholderFilterSchedule } from 'src/app/store/models/schedule-filter.i';
import { FilterSchedule } from 'src/app/store/models/schedule.i';

@Component({
  selector: 'brc-expansion-filter-schedule',
  templateUrl: './expansion-filter-schedule.component.html',
  styleUrls: ['./expansion-filter-schedule.component.scss'],
})
export class ExpansionFilterScheduleComponent {
  //Input filter
  @Input() buttonFilterSchedule: ButtonFilterSchedule<configButton>;
  @Input() labelScheduleFilter: LabelFilterSchedule<LabelInterface>;
  @Input() placeholderFilterSchedule: PlaceholderFilterSchedule = {
    placeholderSearch: 'search schedule...',
    titleImportance: 'Importance',
    titleCategory: 'Category',
  };
  @Input() scheduleDataCategory: Category[];
  @Input() scheduleDataImportance: LabelledValue<string>[];
  @Input() scheduleFilterExpansionLabel: LabelExpansionFilter = {
    title: 'Filter Schedule',
    description: 'Click to expansion',
  };
  @Output() valueFilter = new EventEmitter();

  constructor() {}
  scheduleValueFilter(data: FilterSchedule) {
    this.valueFilter.emit(data);
  }
}
