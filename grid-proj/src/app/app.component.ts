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
          { key: 'Mi', value: 0.8, format: 'X.XX' },
          { key: 'B', value: 0.123, format: 'X.XXX' },
          { key: 'O', value: 0.34, format: 'X.XX' },
          { key: 'Br', value: 0.9777, format: 'X.XX' },
          { key: 'Fe', value: 0.1255, format: 'X.XXX' },
          { key: 'S', value: 0.323, format: 'X.XX' },
          { key: 'Na', value: 0.9, format: 'X.XX' },
        ],
      },
      {
        key: 'Max',
        element_values: [
          { key: 'C', value: 0.141, format: 'X.XXX' },
          { key: 'Si', value: 0.45, format: 'X.XX' },
          { key: 'Mi', value: 0.9, format: 'X.XX' },
          { key: 'B', value: 0.143, format: 'X.XXX' },
          { key: 'O', value: 0.44, format: 'X.XX' },
          { key: 'Br', value: 0.98, format: 'X.XX' },
          { key: 'Fe', value: 0.1755, format: 'X.XXX' },
          { key: 'S', value: 0.423, format: 'X.XX' },
          { key: 'Na', value: 0.99, format: 'X.XX' },
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
