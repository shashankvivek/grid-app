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
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'AnalysisGrid',
  templateUrl: './analysis-grid.component.html',
  styleUrls: ['./analysis-grid.component.scss'],
})
export class AnalysisGridComponent implements OnInit, OnDestroy {
  public tableData: ITransformedData[];
  @Input() readOnly: boolean;
  @Input() set analysisData(data: IAnalysisData[]) {
    this.tableData = this.analysisSvc.transformData(data);
  }
  @Output() onDataUpdate = new EventEmitter<IUpdationEvent>();
  private modelChanged: Subject<IUpdationEvent> = new Subject<IUpdationEvent>();

  // TODO: make sure Min and Max have keys in same order

  constructor(public analysisSvc: AnalysisService) {}


  ngOnInit(): void {
    this.modelChanged
      .pipe(
        debounceTime(1000),
        distinctUntilChanged((val1, val2) => {
          return val1.value === val2.value;
        })
      )
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
