import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


import { TokenInterceptorService } from './core/services/authorization/token-interceptor.service';
import { LayoutUserComponent } from './layouts/layout-user/layout-user.component';
import { PostAdComponent } from './post-ad/post-ad.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutDefaultComponent,
    LayoutUserComponent,
    PostAdComponent,
    LayoutAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
