import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Marco1RoutingModule } from './marco1-routing.module';
import { VistaMarco1Component } from './vista-marco1/vista-marco1.component';


@NgModule({
  declarations: [
    VistaMarco1Component
  ],
  imports: [
    CommonModule,
    Marco1RoutingModule
  ]
})
export class Marco1Module { }
