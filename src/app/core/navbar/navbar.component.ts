import {Component,OnInit,OnDestroy,Input, ViewChild, AfterViewInit, ElementRef, OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../../core/services/api/login.service';
import { UserService } from '../../services/user.service';
import {HttpClient,HttpErrorResponse } from '@angular/common/http';
import { LoginComponent } from 'src/app/login/login.component';
import { User } from 'src/app/shared/interfaces';
@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit,OnDestroy,OnChanges {

isCollapsed:boolean;
loginLogoutText='Login';
subscription:Subscription;
public user: string="";

public currentUserKey:string="currentUser";
public storage:Storage = sessionStorage; 

@ViewChild(LoginComponent) childReference: LoginComponent;
constructor(
    private router:Router,
    private loginService: LoginService,
    public userService: UserService)
    { 
       
       
    }
ngOnInit(){
}


setLoginLogoutText(){
    this.loginLogoutText=(this.loginService.isAuthenticated)?'Logout':'Login';
}

ngOnDestroy(){
    this.subscription.unsubscribe();
}
logout(){
    console.log("------user---logged out-------");
    sessionStorage.removeItem('currentUser');
 //   this.currentUserSubject.next(null);
}

ngOnChanges() {
   
    console.log("-----------"+this.storage.getItem(this.currentUserKey));
  }
 
}