import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportBComponent } from './report-b.component';


const routes: Routes = [
  {
    path: '',
    component: ReportBComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportBRoutingModule {
}
