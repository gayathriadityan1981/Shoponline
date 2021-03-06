import { Component, OnInit,Input,EventEmitter,Output ,NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService} from '../core/services/validation.service';
import { AuthService } from '../core/services/auth.service';
import {LoginService} from '../core/services/api/login.service';
import {ApiRequestService} from '../core/services/api/api-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ValidationService,AuthService,LoginService]
})
export class LoginComponent implements OnInit {
  public landingPage:string = "/products/viewPdtsServer";
  model:any={};
  errMsg:string='';
  @Output() userNameChanged=new EventEmitter();

  constructor(
    private router :Router,
    private loginService :LoginService,
    private apiRequest:ApiRequestService,
    private authService:AuthService,
    private zone:NgZone
  ){}
  ngOnInit(){
    //reset login status
    this.loginService.logout(false);
  }
  onSignUp(){
    this.router.navigate(['signup']);
  }
setLoginLogoutText(){
  this.authService.isAuthenticated=true;
}
login() {
  this.loginService.getToken(this.model.username, this.model.password)
      .subscribe(resp => {
              if (resp.user === undefined || resp.user.token === undefined || resp.user.token === "INVALID" ){
                  this.errMsg = 'Username or password is incorrect';
                  return;
              }
              this.userNameChanged.emit({ username:this.model.username});
              console.log("=========resp.user.role========"+resp.user.role)
          
              this.zone.run(() => {                
                this.router.navigate([resp.landingPage]);                
            
              });
             
              
          },
          errResponse => {
            switch(errResponse.status){
              case 401:
                this.errMsg = 'Username or password is incorrect';
                break;
              case 404:
                this.errMsg = 'Service not found';
              case 408:
                this.errMsg = 'Request Timedout';
              case 500:
                this.errMsg = 'Internal Server Error';
              default:
                this.errMsg = 'Server Error';
            }
          }
      );
}
changeUsername(data){
console.log("----------data---------"+data);
}
  }
