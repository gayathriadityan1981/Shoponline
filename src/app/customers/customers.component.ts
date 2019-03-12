import { Component, OnInit ,ViewChild} from '@angular/core';
import { DataService } from '../core/services/data.service';
import { ICustomer, IPagedResults } from '../shared/interfaces';
import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers:[DataService]
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['image','firstname', 'lastname','gender','address','city','state','phone','action','vieworder'];
  dataSource:any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  //@Input() customers: ICustomer[] = [];
  title:string;
  filterText:string;
  customers:ICustomer[]=[];
  filteredCustomers:ICustomer[]=[];
  displayMode:DisplayModeEnum;
  displayModeEnum:DisplayModeEnum;
  totalRecords:number=0;
  pageSize:10;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.title="Customers";
    this.filterText="Filter Customers";
    this.displayMode=DisplayModeEnum.Card;
  //  this.getCustomersPage(1);
  console.log("-------init--------------")
  this.dataService.listCustomers().subscribe(
    data => {
     this.customers = data;
     this.dataSource = new MatTableDataSource(this.customers);
      console.log("--------cust------"+this.dataSource)	;	// FILL THE ARRAY WITH DATA.
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
  );
  }
  changeDisplayMode(mode:DisplayModeEnum){
    this.displayMode=mode;
  }
  pageChanged(page:number){
    this.getCustomersPage(page);
  }
 /* getCustomersPage(page: number) {
    this.customerService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
        .subscribe((response: IPagedResults<ICustomer[]>) => {
          this.customers = this.filteredCustomers = response.results;
          this.totalRecords = response.totalRecords;
        },
        (err: any) => //this.logger.log(err),
        () => console.log('getCustomersPage() retrieved customers for page: ' + page));
  }*/
  getCustomersPage(page: number) {
    console.log("--------get cust page---");
    this.dataService.listCustomers().subscribe(
      data => {
       this.customers = data;
       this.dataSource = new MatTableDataSource(this.customers);
        console.log("--------cust------"+this.dataSource)	;	// FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  /*
   filterChanged(data: string) {
      if (data && this.customers) {
          data = data.toUpperCase();
          const props = ['firstName', 'lastName', 'city', 'state.name'];
          this.filteredCustomers = this.filterService.filter<ICustomer>(this.customers, data, props);
      } else {
        this.filteredCustomers = this.customers;
      }
    }*/
  }
enum DisplayModeEnum{
  Card=0,  Grid=1,  Map=2
}
