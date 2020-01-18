import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedsService {
  private baseUrl = environment.base_url;

  constructor(private http: HttpClient) { }

  getNewsFeeds(page = 1, source: string): Observable<any> {
    return this.http.get(this.baseUrl + `/news/${page}/${source}`).pipe(
      tap(sources => console.log(sources)),
      map((feeds: any) => feeds.articles),
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}
