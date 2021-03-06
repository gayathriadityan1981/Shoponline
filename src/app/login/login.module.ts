import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UsernameComponent } from './username/username.component';

@NgModule({
  imports: [ ReactiveFormsModule, SharedModule, 
    LoginRoutingModule ],
  declarations: [ LoginRoutingModule.components, UsernameComponent ],
  exports:[LoginComponent],
 
})
export class LoginModule { }