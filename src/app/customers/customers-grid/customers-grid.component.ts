import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../../core/services/data.service';
//import { SorterService } from '../../core/services/sorter.service';
//import { TrackByService } from '../../core/services/trackby.service';
import { ICustomer } from '../../shared/interfaces';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customers-grid',
  templateUrl: './customers-grid.component.html',
  styleUrls: ['./customers-grid.component.css'],
  // When using OnPush detectors, then the framework will check an OnPush
  // component when any of its input properties changes, when it fires
  // an event, or when an observable fires an event 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersGridComponent implements OnInit {

  @Input() customers: ICustomer[] = [];

  constructor(//private sorterService: SorterService, public trackbyService: TrackByService
    private dataService:DataService, private router: Router,public route: ActivatedRoute) { }

  ngOnInit() {

  }

  sort(prop: string) {
  //  this.sorterService.sort(this.customers, prop);
  }
  deleteUser(customer: ICustomer): void {
    this.dataService.deleteCustomer(customer.customerId)
      .subscribe( data => {
       // this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(customer: ICustomer): void {
    localStorage.removeItem("editCustomerId");
    localStorage.setItem("editCustomerId", customer.customerId.toString());
    this.router.navigate(['/customers',customer.customerId,'details']);
  };

}
