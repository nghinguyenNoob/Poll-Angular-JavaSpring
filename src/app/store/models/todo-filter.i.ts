import { SortItem } from './column.i';

export interface FilterTodo {
  textSearch?: string;
  importance?: string;
  category?: string[];
  status?: string;
  fromDate?: string;
  toDate?: string;
  sort?: SortItem[];
}
