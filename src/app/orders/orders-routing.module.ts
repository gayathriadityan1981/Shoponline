import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { CartComponent } from './cart/cart.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path:':id/cartDetails',component:CartComponent},
  { path:':id/finaliseOrder',component:OrderComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class OrdersRoutingModule {
  static components = [ OrdersComponent,CartComponent ];
}