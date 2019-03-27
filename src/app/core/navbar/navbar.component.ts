import {Component,OnInit,OnDestroy,Input, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../services/user.service';
import {HttpClient,HttpErrorResponse } from '@angular/common/http';
import { LoginComponent } from 'src/app/login/login.component';
@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit,OnDestroy {

isCollapsed:boolean;
loginLogoutText='Login';
subscription:Subscription;
public user: string="";
@ViewChild(LoginComponent) childReference: LoginComponent;
constructor(
    private router:Router,
    private authService: AuthService,
    public userService: UserService,private auth :AuthService)
    { 
        this.user = this.authService.getUserName();
        if(this.userService.getUserLoggedIn()===true){
          console.log("already logged in");
          this.setLoginLogoutText();
        }
        if(this.authService.isAuthenticated===true){
            console.log("already logged in");
            this.setLoginLogoutText();
        }
       
    }
ngOnInit(){
 //   this.authService.getLoggedInName.subscribe(name => this.userName = name);
    this.authService.getLoggedInName
    .subscribe(
        (name:string)=>{
            console.log("-------------nav bar---"+name)
            this.user = name;
        },
        (err:any)=>console.log(err)
    );
    this.subscription=this.authService.authChanged
    .subscribe(
        (loggedIn:boolean)=>{
            this.setLoginLogoutText();
        },
        (err:any)=>console.log(err)
    );
 
}


/*
loginOrOut(){
   
    const isAuthenticated=this.authService.isAuthenticated;
    console.log("------------isAuthenticated------------"+isAuthenticated);
    if(isAuthenticated){
        this.authService.logout()
        .subscribe((status:boolean)=>{
            this.setLoginLogoutText();
            //included the next line
            this.user.setUserLoggedIn(true);
             console.log("------------login------------");
            this.router.navigate(['/reports']);
            return;
        },
        (err:any)=>console.log("-------login or logout")
        );
    }
}
redirectToLogin(){
    this.router.navigate(['/login']);
}*/
setLoginLogoutText(){
    this.loginLogoutText=(this.authService.isAuthenticated)?'Logout':'Login';
}
userNameDisplay($event){
    console.log("-----------"+$event);
 // this.userName=$event;
}
ngOnDestroy(){
    this.subscription.unsubscribe();
}
logout(){
    console.log("------user---logged out-------");
    localStorage.removeItem('currentUser');
 //   this.currentUserSubject.next(null);
}
setUserName(){
    this.authService.currentUser.subscribe(
        data => {
     //   this.userName=data.name;
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
}
ngAfterViewInit() {
    //console.log(this.childReference.userName); // 👶 I am a child!
  }
}