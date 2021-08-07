import { ComplaintsComponent } from './components/complaints/complaints.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent
  },
  {
    path:'complaints',
    component: ComplaintsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
