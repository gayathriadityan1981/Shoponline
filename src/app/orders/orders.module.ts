import {NgModule} from '@angular/core';
import {OrdersRoutingModule} from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    imports:[SharedModule,OrdersRoutingModule],
    declarations:[OrdersRoutingModule.components]
})

export class OrdersModule{   
}