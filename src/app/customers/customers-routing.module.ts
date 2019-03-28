import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { CustomersComponent } from './customers.component';
import {CustomersCardComponent} from '../customers/customers-card/customers-card.component';
import {CustomersGridComponent} from '../customers/customers-grid/customers-grid.component';
import {CustomerEditComponent} from '../customer/customer-edit/customer-edit.component';
const routes:Routes=[
    {path:'',component:CustomersComponent},
    {path:'edit',component:CustomerEditComponent},
    {path:':id/details',component:CustomerEditComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class CustomersRoutingModule{
    static components=[CustomersComponent, CustomersCardComponent, CustomersGridComponent,CustomerEditComponent ];
}