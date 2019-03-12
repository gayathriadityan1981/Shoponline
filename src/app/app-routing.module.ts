import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules,NoPreloading } from '@angular/router';

const app_routes: Routes = [
  {path:'about',loadChildren:'./about/about.module#AboutModule' },
  {path:'customers',loadChildren:'./customers/customers.module#CustomersModule'},
  {path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},
  {path:'login',loadChildren:'./login/login.module#LoginModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
