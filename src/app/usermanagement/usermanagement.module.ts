import {NgModule} from '@angular/core';
import {UserManagementRoutingModule} from './usermanagement-routing.module';
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
    MatToolbarModule,MatTableModule,MatSelectModule
    } from '@angular/material';
import { EdituserComponent } from './edituser/edituser.component';
@NgModule({
    imports:[SharedModule,UserManagementRoutingModule ,
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
        MatIconModule,
        MatSelectModule],
    declarations:[UserManagementRoutingModule.components, EdituserComponent],
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
        MatSelectModule
      ]
})


export class UserManagementModule{   
}