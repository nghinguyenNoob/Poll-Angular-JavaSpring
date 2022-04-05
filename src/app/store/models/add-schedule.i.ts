export interface AddSchedule {
  title: string;
  description: string;
  timeStart?: Date;
  dueDate?: Date;
  timeStartRepeat?: string;
  timeDueRepeat?: string;
  important?: string;
  place: string;
  userIds: number[];
  equipmentName?: Equipment[];
  scheduleCategoryId?: number;
  createBy?: number;
  typeRepeat: string;
  valueRepeat?: string;
  scheduleId?: number;
  isDelete?: boolean;
  created?: Date;
  modified?: Date;
}

export interface Equipment {
  equipmentId: number;
  timeStart?: Date;
  timeDue?: Date;
}
export interface CheckFreeTimeParams {
  startTime: Date;
  dueTime: Date;
  equipmentId: number[];
}

export interface CheckFreeTimeResponse {
  count: number,
  records:RecordsCheckTime[];
}
export interface RecordsCheckTime {
  equipment_id: number;
}


