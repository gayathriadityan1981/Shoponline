import {NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {FormsModule} from "@angular/forms";
import { CommonModule} from '@angular/common';
import { LoginComponent } from '../../login/login.component';
@NgModule({
    imports:[ CommonModule,FormsModule ],
    declarations:[LoginComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA ] ,

})

export class NavbarModule{

}