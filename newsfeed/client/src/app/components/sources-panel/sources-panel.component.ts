import { NewsSourcesService } from './../../services/news-sources.service';
import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sources-panel',
  templateUrl: './sources-panel.component.html',
  styleUrls: ['./sources-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SourcesPanelComponent implements OnInit {
  @Output() sourcesPanelClick = new EventEmitter();
  newsSources$ = this.newsSourcesSvc.getSources();

  constructor(private newsSourcesSvc: NewsSourcesService) { }

  ngOnInit() {
  }

  onClickSource(srcID) {
    this.sourcesPanelClick.emit(srcID);
  }
}
