import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnalysisGridComponent } from './analysis-grid/analysis-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
