import { DefaultGuard } from './core/guards/default.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';
import { LayoutUserComponent } from './layouts/layout-user/layout-user.component';

import { UserGuardGuard } from './core/guards/user-guard.guard';

import { CardCategoryComponent } from './shared/components/card-category/card-category.component';
const routes: Routes = [
  {path:'card', component:CardCategoryComponent},
  {
    path: "",
    component: LayoutDefaultComponent,
    canActivate: [ DefaultGuard ],
    children: [
      {
         path: "home",
         loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: "register",
        loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
      },
      {
        path: "sesion",
        loadChildren: () => import('./sesion/sesion.module').then(m => m.SesionModule)
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "user",
    component: LayoutUserComponent,
    canActivate: [ UserGuardGuard ],
    children: [
      {
         path: "home",
         loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
