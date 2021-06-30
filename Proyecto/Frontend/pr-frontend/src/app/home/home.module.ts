import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    ViewHomeComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
