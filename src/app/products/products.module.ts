import {NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import {FormsModule} from "@angular/forms";
import { CommonModule} from '@angular/common';
import { StockstatusComponent } from './stockstatus/stockstatus.component';
import {ListproductsComponent} from '../products/listproducts/listproducts.component';
import { EditproductComponent } from './editproduct/editproduct.component';
@NgModule({
    imports:[ProductsRoutingModule, CommonModule,FormsModule ],
    declarations:[ProductsRoutingModule.components, StockstatusComponent,ListproductsComponent, EditproductComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA ] ,

})

export class ProductsModule{

}