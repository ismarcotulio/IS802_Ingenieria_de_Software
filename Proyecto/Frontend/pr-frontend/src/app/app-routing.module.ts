import { DefaultGuard } from './core/guards/default.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';
import { LayoutUserComponent } from './layouts/layout-user/layout-user.component';

import { UserGuardGuard } from './core/guards/user-guard.guard';

const routes: Routes = [
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
        path: "category",
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
      },
      {
        path: "product",
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
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
         path: "",
         loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: "category",
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
      },
      {
        path: "",
        redirectTo: "",
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
