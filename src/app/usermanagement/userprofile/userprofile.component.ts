import { Component, OnInit } from '@angular/core';

import { HttpClientModule,HttpClient } from '@angular/common/http';
import { IUser } from '../../shared/interfaces';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { UserService } from '../../services/user.service';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  model:any;
  constructor(private service: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    console.log("-------id-----------"+id);
    this.service.getUserDetails(id).subscribe(
      data => {
          console.log("---getUserDetails---data----");
           this.model=data ; 
     // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log("-----getUserDetails----errr-");
        console.log (err.message);
      }
    );
  }
  editUser(model){
    this.service.updateUser(model).subscribe(
      data => {
          console.log("------update---data----");
            
      //  this.model = data as string[];		// FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log("-----updateEmployee----errr-");
        console.log (err.message);
      }
    );
  }
}
