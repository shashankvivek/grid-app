import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisGridComponent } from './analysis-grid.component';

describe('AnalysisGridComponent', () => {
  let component: AnalysisGridComponent;
  let fixture: ComponentFixture<AnalysisGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
