import { SortItem } from './column.i';

export interface Schedule {
  scheduleId: number;
  title: string;
  description: string;
  timeStart: Date;
  dueTime: Date;
  allDay: boolean;
  createByName: string;
  typeSchedule: string;
  users: string;
  scheduleCategoryName: string;
  scheduleCategoryId: number;
  createdBy: number;
  userName: string;
  status: string;
  place?: string;
  importance?: string;
  typeRepeat?: string;
  time?: string;
}

export interface ScheduleData {
  count: number;
  records: Schedule[];
}

export interface FilterSchedule {
  textSearch?: string;
  importance?: string;
  category?: string[];
  from?: string;
  to?: string;
  sort?: SortItem[];
  fromDateList?: string;
  toDateList?: string;
}

export interface CategorySchedule {
  scheduleCategoryId: number;
  name: string;
  description: string;
  created: Date;
  modified: Date;
  colors: {
    primary: string;
    secondary: string;
  };
}
export interface ScheduleDetail {
  scheduleId: string;
  title: string;
  description: string;
  startDate: string;
  dueDate: string;
  timeDueRepeat: string;
  timeStartRepeat: string;
  createBy: string;
  createdByName: string;
  createByFullName?: string;
  scheduleCategoryName: string;
  scheduleCategoryId: string;
  created: string;
  modified: string;
  place: string;
  important: string;
  userNames: string;
  equipmentNames: string;
  type: string;
  valueRepeat: string;
}
export interface UserNames {
  userId: number;
  userName: string;
}
export interface EquipmentNames {
  dueTime: string;
  startTime: string;
  equipmentId: number;
  equipmentName: string;
}
