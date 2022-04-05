import { SortItem } from './column.i';

export interface FilterSchedule {
  textSearch?: string;
  importance?: string;
  category?: string[];
  fromDateList?: string;
  toDateList?: string;
  sort?: SortItem[];
}

export interface LabelFilterSchedule<T> {
  labelImportance?: T;
  labelFromDate?: T;
  labelToDate?: T;
  labelCategory?: T;
}

export interface PlaceholderFilterSchedule {
  placeholderSearch?: string;
  titleImportance?: string;
  titleCategory?: string;
}

export interface ButtonFilterSchedule<T> {
  buttonSubmit?: T;
  buttonReset?: T;
}

export interface ValueFilterSchedule {
  valueSearch?: string;
  valueImportance?: string;
  valueCategory?: string[];
  valueGetToDate?: string;
  valueGetToTimeNow?: string;
  valueGetToHour?: string;
  valueGetToMinute?: string;
  valueGetFromDate?: string;
  valueGetFromTimeNow?: string;
  valueGetFromHour?: string;
  valueGetFromMinute?: string;
}
