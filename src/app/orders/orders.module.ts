import {NgModule} from '@angular/core';
import {OrdersRoutingModule} from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';
@NgModule({
    imports:[SharedModule,OrdersRoutingModule],
    declarations:[OrdersRoutingModule.components, CartComponent]
})

export class OrdersModule{   
}