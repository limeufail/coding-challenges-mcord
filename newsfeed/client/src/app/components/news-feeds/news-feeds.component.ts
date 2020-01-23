import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsFeedsComponent implements OnInit {
  @Input() newsFeeds$;
  @Input() totalResults$;
  @Output() newsFeedsPageChange = new EventEmitter();

  pageSize = 10;

  constructor() { }

  ngOnInit() {
  }

  onPageChange(e) {
    this.newsFeedsPageChange.emit(e.pageIndex);0
  }
}
