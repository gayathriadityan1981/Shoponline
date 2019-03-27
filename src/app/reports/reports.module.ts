import {NgModule} from '@angular/core';
import {ReportsRoutingModule} from './reports-routing.module';
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
    imports:[ReportsRoutingModule,SharedModule, //material io
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
    declarations:[ReportsRoutingModule.components],
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
        MatToolbarModule,
        ReportsRoutingModule
    
      ]
})

export class ReportsModule{
    
}