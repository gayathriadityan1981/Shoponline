import {NgModule} from '@angular/core';
import {CustomersRoutingModule} from './customers-routing.module';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    imports:[CustomersRoutingModule,SharedModule],
    declarations:[CustomersRoutingModule.components, CustomersGridComponent, CustomersCardComponent]
})

export class CustomersModule{
    
}