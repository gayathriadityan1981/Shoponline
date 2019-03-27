import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermanagementComponent } from './usermanagement.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EdituserComponent } from './edituser/edituser.component';
const routes: Routes = [
  { path: '', component: UsermanagementComponent },
  { path: 'viewUsers', component: ViewusersComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'registeruser', component: RegisteruserComponent },
  {path:'edit',component:EdituserComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserManagementRoutingModule {
  static components = [ UsermanagementComponent,ViewusersComponent,UserprofileComponent,EdituserComponent,RegisteruserComponent ];
}