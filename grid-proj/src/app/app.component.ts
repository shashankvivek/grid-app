import { IAnalysisData, IUpdationEvent } from './analysis-grid/grid.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readOnly = false;
  analysisData: IAnalysisData[];
  changedData: IUpdationEvent;

  ngOnInit(): void {
    this.analysisData = [
      {
        key: 'Min',
        element_values: [
          { key: 'C', value: 0.12, format: 'X.XXX' },
          { key: 'Si', value: 0.349, format: 'X.XX' },
          { key: 'Mi', value: 0.9, format: 'X.XX' },
          { key: 'C', value: 0.12, format: 'X.XXX' },
          { key: 'Si', value: 0.349, format: 'X.XX' },
          { key: 'Mi', value: 0.9, format: 'X.XX' },
          { key: 'C', value: 0.12, format: 'X.XXX' },
          { key: 'Si', value: 0.349, format: 'X.XX' },
          { key: 'Mi', value: 0.9, format: 'X.XX' },
        ],
      },
      {
        key: 'Max',
        element_values: [
          { key: 'C', value: 0.141, format: 'X.XXX' },
          { key: 'Si', value: 0.45, format: 'X.XX' },
          { key: 'Mi', value: 0.77, format: 'X.XX' },
          { key: 'C', value: 0.12, format: 'X.XXX' },
          { key: 'Si', value: 0.349, format: 'X.XX' },
          { key: 'Mi', value: 0.9, format: 'X.XX' },
          { key: 'C', value: 0.12, format: 'X.XXX' },
          { key: 'Si', value: 0.349, format: 'X.XX' },
          { key: 'Mi', value: 0.9, format: 'X.XX' },
        ],
      },
    ];
  }

  public onDataUpdate(event: IUpdationEvent): void {
    // TODO: Make call to backend server to save this value
    this.changedData = event;
  }

  public toggle(): void {
    this.readOnly = !this.readOnly;
  }
}
