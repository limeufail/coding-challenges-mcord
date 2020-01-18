import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, ReplaySubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsSourcesService {
  private baseUrl = environment.base_url;
  private firstSource = new ReplaySubject<{}>();
  readonly firstSource$ = this.firstSource.asObservable();

  constructor(private http: HttpClient) { }

  getSources(): Observable<any> {
    return this.http.get(this.baseUrl + '/news/sources').pipe(
      tap(sources => { this.firstSource.next(sources[0]); }),
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}
