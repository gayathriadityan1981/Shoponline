import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ProductsComponent} from './products.component';
import {EditproductComponent} from './editproduct/editproduct.component';
import {ListproductsComponent} from '../products/listproducts/listproducts.component';
const routes: Routes=[
    {path:'viewProductsClient',component:ProductsComponent},
    {path:'viewPdtsServer',component:ListproductsComponent},
    {path:':id/details',component:EditproductComponent},
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
