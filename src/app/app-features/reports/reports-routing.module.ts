import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'report-a',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'report-a',
        loadChildren: () => import('./report-a/report-a.module').then(m => m.ReportAModule)
      },
      {
        path: 'report-b',
        loadChildren: () => import('./report-b/report-b.module').then(m => m.ReportBModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {
}
