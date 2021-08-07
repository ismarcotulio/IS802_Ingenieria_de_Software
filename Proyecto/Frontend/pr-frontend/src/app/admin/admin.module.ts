import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [ViewAdminComponent, StatisticsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SharedModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ]
})
export class AdminModule { }
