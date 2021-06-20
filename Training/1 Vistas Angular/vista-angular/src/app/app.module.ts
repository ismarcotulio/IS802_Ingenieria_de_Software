import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaMarco1Component } from './vista-marco1/vista-marco1.component';
import { VistaMarco2Component } from './vista-marco2/vista-marco2.component';
import { HijoMarco1Component } from './hijo-marco1/hijo-marco1.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaMarco1Component,
    VistaMarco2Component,
    HijoMarco1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
