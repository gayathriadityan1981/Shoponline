import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ValidationService} from '../core/services/validation.service';
import { AuthService } from '../core/services/auth.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {IUserLogin} from '../shared/interfaces';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ValidationService,AuthService]
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  errorMessage:string;
  submitted = false;


  constructor(private formBuilder:FormBuilder,private validationService:ValidationService,
    private authService:AuthService, private router: Router,) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,ValidationService.emailValidator]],
      password:['',[Validators.required,ValidationService.passwordValidator]]
    });
  }
  submit({ value, valid }: { value: IUserLogin, valid: boolean }) {
    this.authService.login(value)
        .subscribe((status: boolean) => {
            if (status) {
              console.log("-------logged in----"+status);
                //this.growler.growl('Logged in', GrowlerMessageType.Info);
                if (this.authService.redirectUrl) {
                    const redirectUrl = this.authService.redirectUrl;
                    this.authService.redirectUrl = '';
                    this.router.navigate([redirectUrl]);
                } else {
                    this.router.navigate(['/orders']);
                }
            } else {
                const loginError = 'Unable to login';
                this.errorMessage = loginError;
               // this.growler.growl(loginError, GrowlerMessageType.Danger);
            }
        },
        (err: any) => console.log("-------errr----"+err)//this.logger.log(err)
        );
}
  }