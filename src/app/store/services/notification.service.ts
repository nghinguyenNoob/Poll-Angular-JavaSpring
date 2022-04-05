import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { EventNotification } from '../models/event-notification.i';
import { IsRead } from '../models/is_read.i';
import { FilterNotification } from '../models/notificaiton-filter.i';
import { Page } from '../models/page.i';
import { Notification } from './../models/notification.i';
import { Pagination } from './../models/pagination.i';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}
  getAllNotification(
    pagination: Pagination,
    filter: FilterNotification
  ): Observable<Page<Notification>> {
    const page = pagination.page;
    const pageSize = pagination.pageSize;
    const httpfilter = {};
    if (filter.textSearch !== '') {
      httpfilter['search'] = filter.textSearch;
    }
    if (filter.sort != [] && filter.sort != undefined) {
      filter.sort.forEach((e) => {
        if (e.sort != 'none')
          if (e.name !== null) {
            httpfilter['sortName'] = e.name;
            httpfilter['sortBy'] = e.sort;
          }
      });
    }
    if (filter.event !== "") {
      httpfilter["eventTypeName"] = filter.event;
    }
    if (filter.status !== -1) {
      httpfilter["isRead"] = filter.status;
    }
    const params = new HttpParams({
      fromObject: {
        ...httpfilter,
        pageSize: String(pageSize),
        page: String(page),
      },
    });
    return this.http.get<Page<Notification>>(environment.urlNotification, {
      params
    });
  }

  getAllEvent(): Observable<EventNotification[]> {
    return this.http.get<EventNotification[]>(environment.urlEvent);
  }
  getCountNotification(): Observable<number> {
    return this.http.get<number>(environment.urlCountNotification);
    // TODO : fake value vì chưa có api
    // return of(12);
  }
  updateIsRead(data: IsRead): Observable<any> {
    return this.http.put<void>(environment.urlNotification, data);
  }
}
