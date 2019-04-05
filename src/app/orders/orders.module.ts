import {NgModule} from '@angular/core';
import {OrdersRoutingModule} from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
@NgModule({
    imports:[SharedModule,OrdersRoutingModule],
    declarations:[OrdersRoutingModule.components, CartComponent, OrderComponent]
})

export class OrdersModule{   
}