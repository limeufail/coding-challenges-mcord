import { NewsSourcesService } from './services/news-sources.service';
import { Observable } from 'rxjs';
import { NewsFeedsService } from './services/news-feeds.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  newsFeeds$: Observable<any>;
  totalResults$: Observable<number>;
  private sourceID = '';

  constructor(
    private newsFeedsSvc: NewsFeedsService,
    private newsSrcSvc: NewsSourcesService) { }

  ngOnInit() {
    this.newsFeeds$ = this.newsSrcSvc.firstSource$.pipe(
      tap((source: any) => this.sourceID = source.id),
      mergeMap((source: any) => {
        return this.newsFeedsSvc.getNewsFeeds(1, source.id);
      })
    );
    this.totalResults$ = this.newsFeedsSvc.totalResults$;
  }

  onSourceClick(srcID) {
    this.sourceID = srcID;
    this.newsFeeds$ = this.newsFeedsSvc.getNewsFeeds(1, srcID);
  }
  onPageChange(pageIndex) {
    this.newsFeeds$ = this.newsFeedsSvc.getNewsFeeds(pageIndex, this.sourceID);
  }
}
