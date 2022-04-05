import { SortItem } from './column.i';

export interface FilterNotification {
  textSearch?: string;
  category?: string;
  event?: string;
  sort?: SortItem[];
  status : number;
}
