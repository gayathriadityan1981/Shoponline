import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ReportsComponent } from './reports.component';
import {UserreportsComponent} from './userreports/userreports/userreports.component';

const routes:Routes=[
    {path:'',component:ReportsComponent},
    {path:'users',component:UserreportsComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule] 
})

export class ReportsRoutingModule{
    static components=[ReportsComponent, UserreportsComponent ];
}