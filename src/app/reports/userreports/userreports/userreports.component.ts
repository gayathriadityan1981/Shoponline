import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { IUser } from '../../../shared/interfaces';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { UserService } from '../../../services/user.service';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-userreports',
  templateUrl: './userreports.component.html',
  styleUrls: ['./userreports.component.css'],
  providers:[UserService]
})
export class UserreportsComponent implements OnInit {

  userReportView:boolean;
  genReport:boolean;
  user:IUser;
  model=new IUser();
  usr:IUser[]=[];
  userGrid:boolean;
  exportTo:boolean;
  constructor(private service: UserService, private route: ActivatedRoute) {
    this.genReport=true;
    this.userGrid=false;
    this.exportTo=false;
    this.userReportView = true;
  }

  ngOnInit() {
  
  }

  
  generateUserReport(){
    this.service.listUsers().subscribe(
      data => {
       this.usr = data;
       this.userGrid=true;
       this.exportTo=true;
       this.userReportView=false;
        console.log(data)	;	// FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  exportToCSV(empArr){
    this.usr=empArr;
    console.log("------save-------"+this.usr);
    this.service.exportCSV(this.usr).subscribe(
      data => {
          console.log("------export---data----"+data);
            
      //  this.model = data as string[];		// FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log("-----export----errr-");
        console.log (err.message);
      }
    );
  }
}

