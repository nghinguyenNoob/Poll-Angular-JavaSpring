import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  format,
  set,
  isBefore,
  getHours,
  addWeeks,
  parseISO,
  getMinutes,
  addMonths,
  addDays,
} from 'date-fns';
import { Observable } from 'rxjs';
import { AddSchedule, CheckFreeTimeParams } from '../models/add-schedule.i';
import { Page } from '../models/page.i';
import { Pagination } from '../models/pagination.i';
import { environment } from './../../../environments/environment';
import {
  CategorySchedule,
  FilterSchedule,
  Schedule,
  ScheduleDetail,
} from './../models/schedule.i';
@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private http: HttpClient) {}
  getAllSchedule(filter: FilterSchedule): Observable<{ records: Schedule[] }> {
    let params = new HttpParams();
    Object.keys(filter).forEach((k) => {
      params = params.set(k, filter[k]);
    });
    return this.http
      .get<{ records: Schedule[] }>(`${environment.urlSchedule}`, { params })
      .pipe(
        map((res) => {
          return this.convertTypeRepeatEvents(res);
        })
      );
  }
  getAllEventsToday(): Observable<{ records: Schedule[] }> {
    const today = new Date().toISOString().split('T')[0];
    const params = new HttpParams()
      .append('sortName', `dueTime`)
      .append('sortBy', `asc`)
      .append('day', `${today}`);

    return this.http.get<{ records: Schedule[] }>(
      `${environment.urlSchedule}/day`,
      { params }
    );
  }
  getAllEventsTomorrow(): Observable<{ records: Schedule[] }> {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const params = new HttpParams()
      .append('sortName', `dueTime`)
      .append('sortBy', `asc`)
      .append('day', `${format(tomorrow, 'yyyy-MM-dd')}`);

    return this.http.get<{ records: Schedule[] }>(
      `${environment.urlSchedule}/day`,
      { params }
    );
  }
  getAllEventsAfterTomorrow(): Observable<{ records: Schedule[] }> {
    const today = new Date();
    const afterTomorrow = new Date(today);
    afterTomorrow.setDate(afterTomorrow.getDate() + 2);
    const params = new HttpParams()
      .append('sortName', `dueTime`)
      .append('sortBy', `asc`)
      .append('day', `${format(afterTomorrow, 'yyyy-MM-dd')}`);

    return this.http.get<{ records: Schedule[] }>(
      `${environment.urlSchedule}/day`,
      { params }
    );
  }
  delEventsSchedule(
    delSchedule: Schedule
  ): Observable<{ userId: number; scheduleId: number; title: string }> {
    const params = new HttpParams().append(
      'scheduleId',
      `${delSchedule.scheduleId}`
    );
    return this.http.delete<{
      userId: number;
      scheduleId: number;
      title: string;
    }>(`${environment.urlSchedule}`, { params });
  }

  undoDelEventSchedule(
    deletedSchedule: Schedule
  ): Observable<{ userId: number; scheduleId: number; title: string }> {
    const params = new HttpParams().append(
      'scheduleId',
      `${deletedSchedule.scheduleId}`
    );
    return this.http.delete<{
      userId: number;
      scheduleId: number;
      title: string;
    }>(`${environment.urlSchedule}/undoDelete`, { params });
  }
  getCategoriesSchedule(): Observable<{ records: CategorySchedule[] }> {
    return this.http.get<{ records: CategorySchedule[] }>(
      `${environment.urlSchedule}/category`
    );
  }
  getDetailSchedule(scheduleId: number): Observable<ScheduleDetail> {
    return this.http.get<ScheduleDetail>(
      environment.urlSchedule + `/${scheduleId}`
    );
  }
  addSchedule(schedule: AddSchedule) {
    return this.http.post(environment.urlSchedule, schedule);
  }
  checkEquipment(equipment: CheckFreeTimeParams) {
    return this.http.post(environment.urlEquipment, equipment);
  }
  public getFilterSchedule(
    pagination: Pagination,
    filters: FilterSchedule
  ): Observable<Page<Schedule>> {
    const page = pagination ? pagination.page : 1;
    const pageSize = pagination ? pagination.pageSize : 10;
    const {
      textSearch = '',
      importance = '',
      category = [],
      sort,
      fromDateList = '',
      toDateList = '',
    } = filters || {};
    const httpFilter = {};
    if (importance != '') {
      httpFilter['importance'] = importance;
    }
    if (category.length > 0) {
      httpFilter['categoryId'] = category;
    }
    if (textSearch != '') {
      httpFilter['keyword'] = textSearch;
    }
    if (fromDateList != '') {
      httpFilter['from'] = fromDateList;
    }
    if (toDateList != '') {
      httpFilter['to'] = toDateList;
    }
    if (sort != [] && sort != undefined) {
      sort.forEach((e) => {
        if (e.sort != 'none')
          if (e.name !== null) {
            httpFilter['sortName'] = e.name;
            httpFilter['sortBy'] = e.sort;
          }
      });
    }
    const params = new HttpParams({
      fromObject: {
        ...httpFilter,
        pageSize: String(pageSize),
        page: String(page),
      },
    });
    return this.http.get<Page<Schedule>>(`${environment.urlSchedule}/filter`, {
      params: params,
    });
  }
  private convertTypeRepeatEvents(data: any) {
    let arr = [];
    data.records?.map((rs) => {
      switch (rs.typeRepeat) {
        case 'weekly':
          let week = parseISO(rs.timeStart);
          while (isBefore(week, parseISO(rs.dueTime))) {
            const timeStart = rs.repeatStartTime?.split(':');
            const timeEnd = rs.repeatDueTime?.split(':');
            const data = {
              ...rs,
              timeStart: set(week, {
                hours: Number(timeStart[0]),
                minutes: Number(timeStart[1]),
              }),
              dueTime: set(week, {
                hours: Number(timeEnd[0]),
                minutes: Number(timeEnd[1]),
              }),
            };
            arr.push(data);
            week = addWeeks(week, 1);
          }
          break;
        case 'monthly':
          let month = parseISO(rs.timeStart);
          while (isBefore(month, parseISO(rs.dueTime))) {
            const timeStart = rs.repeatStartTime?.split(':');
            const timeEnd = rs.repeatDueTime?.split(':');
            const dataMonly = {
              ...rs,
              timeStart: set(month, {
                hours: Number(timeStart[0]),
                minutes: Number(timeStart[1]),
              }),
              dueTime: set(month, {
                hours: Number(timeEnd[0]),
                minutes: Number(timeEnd[1]),
              }),
            };
            arr.push(dataMonly);
            month = addMonths(month, 1);
          }
          break;
        case 'everyday':
          let day = parseISO(rs.timeStart);
          while (isBefore(day, parseISO(rs.dueTime))) {
            const timeStart = rs.repeatStartTime?.split(':');
            const timeEnd = rs.repeatDueTime?.split(':');
            const dataEveryday = {
              ...rs,
              timeStart: set(day, {
                hours: Number(timeStart[0]),
                minutes: Number(timeStart[1]),
              }),
              dueTime: set(day, {
                hours: Number(timeEnd[0]),
                minutes: Number(timeEnd[1]),
              }),
            };
            arr.push(dataEveryday);
            day = addDays(day, 1);
          }
          break;
        case 'normal':
          arr.push(rs);
      }
    });
    return {
      count: arr?.length,
      records: arr,
    };
  }
}
