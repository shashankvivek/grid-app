import { IAnalysisData } from './analysis-grid/grid.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readOnly: boolean;
  analysisData: IAnalysisData[];

  ngOnInit(): void {
    this.analysisData = [
      {
        key: 'Min',
        element_values: [
          { key: 'C', value: 0.12, format: 'X.XXX' },
          { key: 'Si', value: 0.349, format: 'X.XX' },
        ],
      },
      {
        key: 'Max',
        element_values: [
          { key: 'C', value: 0.141, format: 'X.XXX' },
          { key: 'Si', value: 0.45, format: 'X.XX' },
        ],
      },
    ];
  }

  public onDataUpdate(event): void {}
}
