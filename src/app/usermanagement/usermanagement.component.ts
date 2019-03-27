import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { IUser } from '../shared/interfaces';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { UserService } from '../services/user.service';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
const ELEMENT_DATA: IUser[] = [];
@Component({
  selector: 'cm-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  
  ngOnInit() {
     
  }
 
  constructor (private service:UserService ){  this.displayMode = DisplayModeEnum.Card; this.getUsersPage(1);
  }
    user:IUser;
    model=new IUser();
    users:IUser[]=[];

  changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
  }

  pageChanged(page: number) {
    this.getUsersPage(page);
  }

  getUsersPage(page: number) {
   /* this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
        .subscribe((response: IPagedResults<ICustomer[]>) => {
          this.customers = this.filteredCustomers = response.results;
          this.totalRecords = response.totalRecords;
          this.dataSource = new MatTableDataSource(this.customers);
        },
        (err: any) => //this.logger.log(err)
        console.log("-------errr------------"+err),
        () => console.log('getCustomersPage() retrieved customers for page: ' + page)
        );*/
        this.service.listUsers().subscribe(
          data => {
           this.users = data;
           console.log("----------this.users---"+this.users);
          },
          (err: HttpErrorResponse) => {
            console.log (err.message);
          }
        );
  }
  
  

deleteUser(id){
  this.service.deleteUser(id).subscribe(
    data => {
        console.log("-----deleteEmployee---data----");
          
    //  this.model = data as string[];		// FILL THE ARRAY WITH DATA.
    },
    (err: HttpErrorResponse) => {
      console.log("-----updateEmployee----errr-");
      console.log (err.message);
    }
  );
}
}
enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}