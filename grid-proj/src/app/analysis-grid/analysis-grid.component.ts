import { IAnalysisData } from './grid.model';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'AnalysisGrid',
  templateUrl: './analysis-grid.component.html',
  styleUrls: ['./analysis-grid.component.scss']
})
export class AnalysisGridComponent implements OnInit {

  @Input() readOnly: boolean;
  @Input() analysisData: IAnalysisData;
  @Output() onDataUpdate = new EventEmitter();

  // make sure Min and Max have keys in same order

  constructor() { }

  ngOnInit(): void {
  }

}
