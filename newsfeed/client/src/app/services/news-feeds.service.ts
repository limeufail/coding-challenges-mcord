import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, ReplaySubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedsService {
  private baseUrl = environment.base_url + '/api';
  private totalResults = new ReplaySubject<number>();
  readonly totalResults$ = this.totalResults.asObservable();

  constructor(private http: HttpClient) { }

  getNewsFeeds(page = 1, source: string): Observable<any> {
    return this.http.get(this.baseUrl + `/news/${page}/${source}`).pipe(
      tap((sources: any) => this.totalResults.next(sources.totalResults)),
      map((feeds: any) => feeds.articles),
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}
