import { Component, OnInit ,ViewChild} from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ICustomer, IPagedResults } from '../../shared/interfaces';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import {Product} from '../../shared/interfaces';
import { UserInfoService } from 'src/app/core/services/api/user-info.service';
@Component({
  selector: 'cm-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css'],
  providers:[DataService,UserInfoService]
})
export class ListproductsComponent implements OnInit {
  products: Product[] = [];
  adminBtnVisibility:boolean;
  userBtnVisibility:boolean;
  constructor(private dataService: DataService,private userInfoService:UserInfoService) { 
    this.getProductsPage(1);
   }

  ngOnInit() {
   
    if(this.userInfoService.getUserInfo().role.toString()==="USER")
     {
              this.adminBtnVisibility=false;
              this.userBtnVisibility=true;
      }
     if(this.userInfoService.getUserInfo().role.toString()==="ADMIN")
      {
              this.adminBtnVisibility=true;
              this.userBtnVisibility=false;
      }
  }
  getProductsPage(page: number) {
         this.dataService.listProducts().subscribe(
           data => {
            this.products = data;          
           },
           (err: HttpErrorResponse) => {
             console.log (err.message);
           }
         );
   }
   
}
