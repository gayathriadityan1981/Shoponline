import {NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import {FormsModule} from "@angular/forms";
import { CommonModule} from '@angular/common';
import { StockstatusComponent } from './stockstatus/stockstatus.component';
@NgModule({
    imports:[ProductsRoutingModule, CommonModule,FormsModule ],
    declarations:[ProductsRoutingModule.components, StockstatusComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA ] ,

})

export class ProductsModule{

}