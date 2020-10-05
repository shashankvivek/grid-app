import { AnalysisService } from './analysis.service';
import {
  IAnalysisData,
  IUpdationEvent,
  IElement_value,
  ITransformedData,
} from './grid.model';

import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'AnalysisGrid',
  templateUrl: './analysis-grid.component.html',
  styleUrls: ['./analysis-grid.component.scss'],
})
export class AnalysisGridComponent implements OnInit, OnDestroy {

  tableData: ITransformedData[];
  @Input() readOnly: boolean;
  @Input() set analysisData(data: IAnalysisData[]) {
    this.tableData = this.analysisSvc.transformData(data);
  }
  @Output() onDataUpdate = new EventEmitter<IUpdationEvent>();
  modelChanged: Subject<IUpdationEvent> = new Subject<IUpdationEvent>();

  // TODO: make sure Min and Max have keys in same order

  constructor(public analysisSvc: AnalysisService) {}

  ngOnInit(): void {
    this.modelChanged
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((model) => {
        this.onDataUpdate.emit(model);
      });
  }

  changedInput(value: number, unit: string, row: IElement_value): void {
    if (value !== null) {
      this.modelChanged.next({
        elementId: row.key,
        unit,
        value,
      });
    }
  }

  ngOnDestroy(): void {
    this.modelChanged.unsubscribe();
  }
}
