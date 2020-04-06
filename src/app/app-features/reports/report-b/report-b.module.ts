import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportBRoutingModule } from './report-b-routing.module';
import { ReportBComponent } from './report-b.component';


@NgModule({
  declarations: [ReportBComponent],
  imports: [
    CommonModule,
    ReportBRoutingModule
  ]
})
export class ReportBModule { }
