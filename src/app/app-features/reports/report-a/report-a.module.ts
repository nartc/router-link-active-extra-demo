import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportARoutingModule } from './report-a-routing.module';
import { ReportAComponent } from './report-a.component';


@NgModule({
  declarations: [ReportAComponent],
  imports: [
    CommonModule,
    ReportARoutingModule
  ]
})
export class ReportAModule { }
