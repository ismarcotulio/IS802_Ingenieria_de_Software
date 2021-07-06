import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSesionComponent } from './view-sesion/view-sesion.component';

const routes: Routes = [{path:"", component:ViewSesionComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SesionRoutingModule { }
