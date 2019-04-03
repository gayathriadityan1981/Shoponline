import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ProductsComponent} from './products.component';
import {ListproductsComponent} from '../products/listproducts/listproducts.component';
const routes: Routes=[
    {path:'viewProductsClient',component:ProductsComponent},
    {path:'viewPdtsServer',component:ListproductsComponent},
    //{path:'edit',component:CustomerEditComponent},
 //   {path:':id/details',component:CustomerEditComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]

})
export class ProductsRoutingModule{
    static components=[ProductsComponent];
}
