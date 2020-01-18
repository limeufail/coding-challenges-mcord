import { NewsSourcesService } from './services/news-sources.service';
import { Observable } from 'rxjs';
import { NewsFeedsService } from './services/news-feeds.service';
import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  newsFeeds$ = new Observable();

  constructor(
    private newsFeedsSvc: NewsFeedsService,
    private newsSrcSvc: NewsSourcesService) {}

  ngOnInit() {
    this.newsFeeds$ = this.newsSrcSvc.firstSource$.pipe(
      mergeMap((source: any) => {
        return this.newsFeedsSvc.getNewsFeeds(1, source.id);
      })
    );
  }

  onSourceClick(srcID) {
    this.newsFeeds$ = this.newsFeedsSvc.getNewsFeeds(1, srcID);
  }
}
