import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules,NoPreloading } from '@angular/router';

const app_routes: Routes = [
  {path:'about',loadChildren:'./about/about.module#AboutModule' },
  {path:'products',loadChildren:'./products/products.module#ProductsModule' },
  {path:'customers',loadChildren:'./customers/customers.module#CustomersModule'},
  {path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},
  {path:'login',loadChildren:'./login/login.module#LoginModule'},
  {path:'reports',loadChildren:'./reports/reports.module#ReportsModule'},
  {path:'users',loadChildren:'./usermanagement/usermanagement.module#UserManagementModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
