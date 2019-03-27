import {NgModule} from '@angular/core';
import {CustomersRoutingModule} from './customers-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,MatTableModule
    } from '@angular/material';
@NgModule({
    imports:[CustomersRoutingModule,SharedModule, //material io
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatToolbarModule,
        MatTableModule, 
        MatIconModule],
    declarations:[CustomersRoutingModule.components],
    exports:[
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatTableModule, 
        MatIconModule,
        MatToolbarModule
      ]
})

export class CustomersModule{
    
}