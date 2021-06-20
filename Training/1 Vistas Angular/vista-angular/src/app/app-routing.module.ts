import { VistaMarco2Component } from './vista-marco2/vista-marco2.component';
import { VistaMarco1Component } from './vista-marco1/vista-marco1.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandoComponent } from './brando/brando.component';
import { Tr2VistaDanielComponent} from './tr2-vista-daniel/tr2-vista-daniel.component';

const routes: Routes = [
  { path: "marco1", component: VistaMarco1Component},
  { path: "marco2", component: VistaMarco2Component},
  { path: "daniel1", component: Tr2VistaDanielComponent},
  { path: "", redirectTo: "marco1", pathMatch: "full" },
  { path: "brando", component: BrandoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
