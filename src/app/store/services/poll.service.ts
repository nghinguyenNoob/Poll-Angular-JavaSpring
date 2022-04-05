import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class PollService {

    private baseUrl = 'http://localhost:8080/';
    constructor(private http: HttpClient) { }

    getListPoll(): Observable<any> {
        return this.http.get(`${this.baseUrl}` + 'pollresponse-list'); // poll-list
    }

    getListOptionPoll(): Observable<any> {
        return this.http.get(`${this.baseUrl}` + 'optionpoll-list');
    }

    getListOptionPollDetail(): Observable<any> {
        return this.http.get(`${this.baseUrl}` + 'optionpolldetail-list');
    }

    getListTopVote(): Observable<any> {
        return this.http.get(`${this.baseUrl}` + 'topvotes-list');
    }

    deletePoll(pollId: any): Observable<any> {
        return this.http.delete(`${this.baseUrl}` + `poll-delete/${pollId}`);
    }

    getPollPagination(request): Observable<any> {
        const params = request;
        return this.http.get(`${this.baseUrl}` + 'pageable', { params });
    }

    savePoll(poll: any): Observable<any> {
        return this.http.post(`${this.baseUrl}` + 'save-poll', poll);
    }

    getPollById(pollId): Observable<any> {
        const params = pollId;
        return this.http.get(`${this.baseUrl}` + 'poll-getbyid', { params });
    }

    getOptionPollByPollId(pollId): Observable<any> {
        const params = pollId;
        return this.http.get(`${this.baseUrl}` + 'optionpoll-getbypollid', {params});
    }

    getOptionPollDetailsByOptionPollId(opId: any[]): Observable<any> {
        let optionPollId = new HttpParams();
        opId.forEach(id => {optionPollId = optionPollId.append('optionPollId', id)});
        return this.http.get(`${this.baseUrl}` + `optionpolldetail-getbyoptionid`, {params:optionPollId});
    }

    saveOptionPoll(optionPoll: any): Observable<any> {
        return this.http.post(`${this.baseUrl}` + 'save-optionpoll', optionPoll);
    }

    saveOptionPollDetail(optionPollDetail: any): Observable<any> {
        return this.http.post(`${this.baseUrl}` + 'save-optionpolldetail', optionPollDetail);
    }
    deleteOptionPollDetail(request): Observable<any> {
        const params = request
        return this.http.delete(`${this.baseUrl}` + 'delete-optionpolldetail', {params})
    }
}