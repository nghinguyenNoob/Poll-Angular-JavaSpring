export interface Column {
  title: string;
  dataIndex: string;
  sort?: boolean;
}

export enum SortType {
  asc = 'asc',
  desc = 'desc',
  none = 'none',
}

export interface SortItem {
  name: string;
  sort: SortType;
}
