import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaMarco1Component } from './vista-marco1/vista-marco1.component';
import { VistaMarco2Component } from './vista-marco2/vista-marco2.component';
import { HijoMarco1Component } from './hijo-marco1/hijo-marco1.component';
import { Luis1Component } from './luis1/luis1.component';
import { HijoLuisComponent } from './hijo-luis/hijo-luis.component';
import { BrandoComponent } from './brando/brando.component';
import { BrandoHijoComponent } from './brando-hijo/brando-hijo.component';
import { Tr2VistaDanielComponent } from './tr2-vista-daniel/tr2-vista-daniel.component';
import { Tr2HijoDanielComponent } from './tr2-hijo-daniel/tr2-hijo-daniel.component';
import { VistaDayrielaComponent } from './vista-dayriela/vista-dayriela.component';
import { HijoDayrielaComponent } from './hijo-dayriela/hijo-dayriela.component';


@NgModule({
  declarations: [
    AppComponent,
    VistaMarco1Component,
    VistaMarco2Component,
    HijoMarco1Component,
    Luis1Component,
    HijoLuisComponent,
    BrandoComponent,
    BrandoHijoComponent,
    Tr2VistaDanielComponent,
    Tr2HijoDanielComponent
    VistaDayrielaComponent,
    HijoDayrielaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
