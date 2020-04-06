import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportAComponent } from './report-a.component';


const routes: Routes = [
  {
    path: '',
    component: ReportAComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportARoutingModule { }
