import { Component, OnInit ,ViewChild} from '@angular/core';
import { DataService } from '../core/services/data.service';
import { ICustomer, IPagedResults } from '../shared/interfaces';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http/src/response';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  providers:[DataService]
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['image','firstname', 'lastname','gender','address','city','state','phone','action','vieworder'];
  dataSource:any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  title: string;
  filterText: string;
  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  totalRecords = 0;
  pageSize = 10;

  constructor(private dataService: DataService,
    //private filterService: FilterService,
   // private logger: LoggerService
   ) { }

  ngOnInit() {
    this.title = 'Customers';
    this.filterText = 'Filter Customers:';
    this.displayMode = DisplayModeEnum.Card;

    this.getCustomersPage(1);
  }

  changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
  }

  pageChanged(page: number) {
    this.getCustomersPage(page);
  }

  getCustomersPage(page: number) {
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
        this.dataService.listCustomers().subscribe(
          data => {
           this.customers = data;
          },
          (err: HttpErrorResponse) => {
            console.log (err.message);
          }
        );
  }

 /* filterChanged(data: string) {
    if (data && this.customers) {
        data = data.toUpperCase();
        const props = ['firstName', 'lastName', 'city', 'state.name'];
        this.filteredCustomers = this.filterService.filter<ICustomer>(this.customers, data, props);
    } else {
      this.filteredCustomers = this.customers;
    }
  }*/
}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
