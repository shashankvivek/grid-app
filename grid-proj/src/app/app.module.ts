import { AnalysisService } from './analysis-grid/analysis.service';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './custom-material.module';
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
    BrowserModule,
    FormsModule,
    CustomMaterialModule
  ],
  providers: [AnalysisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
