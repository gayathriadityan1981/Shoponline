import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { IUser } from '../../shared/interfaces';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { UserService } from '../../services/user.service';
import {ActivatedRoute,Router} from "@angular/router";
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css'],
  providers:[UserService]
})
export class RegisteruserComponent implements OnInit {
  model:IUser;
  securityQuestions: any = ["In Progress", "Completed", "Closed"];
  constructor(private service: UserService, private route: ActivatedRoute, private router: Router) {
    this.model=new IUser();
  }
  ngOnInit() {
  }
  saveUser(model){
    console.log("------save-------"+model);
    this.service.saveUser(model).subscribe(
      data => {
          console.log("------save---data----"+data.toString);
          this.router.navigate(['/login']);   
      //  this.model = data as string[];		// FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log("-----save----errr-");
        console.log (err.message);
      }
    );
  }
  refresh(){
    this.model=new IUser();
  }
}
