import { NgModule,Component, ViewChild,OnInit, Input,Output } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { IOrder,ICustomer,IPagedResults} from '../shared/interfaces';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { DataService } from './../core/services/data.service';
import {AuthService } from './../core/services/auth.service';
import {MatSort,MatPaginator, MatTableDataSource,MatTableModule} from '@angular/material';
const ELEMENT_DATA: IOrder[] = [];


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers:[DataService]
})
export class OrdersComponent implements OnInit {
  customers: ICustomer[];
  totalRecords = 0;
  pageSize = 5;
 
  
  constructor(private dataService: DataService, private authService:AuthService
    ) { 
     this.authService.currentUser.subscribe(
        data => {
       
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
     }

  ngOnInit() {
      this.getCustomersPage(1);
  }

  pageChanged(page: number) {
      this.getCustomersPage(page);
  }

  getCustomersPage(page: number) {
    this.dataService.listCustomers().subscribe(
      data => {
       this.customers = data;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}