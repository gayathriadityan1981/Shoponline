import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http/src/response';
import { DataService } from '../../core/services/data.service';

//import { ModalService, IModalContent } from '../../core/modal/modal.service';
import { ICustomer, IState } from '../../shared/interfaces';
@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})


export class CustomerEditComponent implements OnInit {

  model:ICustomer;
  customer: ICustomer;/*=
    {
      customerId: 0,
      firstName: '',
      lastName: '',
      email:'',
      company:'',
      phone:'',
      gender: '',
      address1: '',
      address2: '',
      city: '',
      postalcode:'',
      country:'',
     
     
    };*/
  states: IState[];
 
  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText = 'Insert';
  @ViewChild('customerForm') customerForm: NgForm;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService) {
    
  }

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    console.log("-------id-----------"+id);
    this.getCustomer(id);
  }

  getCustomer(id: number) {
    console.log("--edit get--------"+id);
    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    },
    (err: HttpErrorResponse) => {
      console.log("-----edit cust----errr-");
      console.log (err.message);
    }
  );
}

  submit() {
    //console.log("---this.customer.id --------"+this.customer.customerId)
    if (this.customer.customerId === 0) {
      console.log("---this.customer.id --------"+this.customer.customerId )
      this.dataService.saveCustomer(this.customer)
        .subscribe((insertedCustomer: ICustomer) => {
          console.log("--insertedCustomer ----saved----"+insertedCustomer )
          if (insertedCustomer) {
            // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
          //  this.customerForm.form.markAsPristine();
            this.router.navigate(['/customers']);
          } else {
            const msg = 'Unable to insert customer';
             console.log("--------Unable to insert customer-----"+msg);
          //  this.growler.growl(msg, GrowlerMessageType.Danger);
            this.errorMessage = msg;
          }
        },
          (err: any) => console.log("--------err-----"+err)//this.logger.log(err)
          );
    } else {
      console.log("----else column----");
      this.dataService.updateCustomer(this.customer)
        .subscribe((status: boolean) => {
          if (status) {
            // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
            this.customerForm.form.markAsPristine();
         //   this.growler.growl('Operation performed successfully.', GrowlerMessageType.Success);
            // this.router.navigate(['/customers']);
          } else {
            const msg = 'Unable to update customer';
          //  this.growler.growl(msg, GrowlerMessageType.Danger);
            this.errorMessage = msg;
          }
        },
        (err: any) => console.log("--------err-----"+err)//this.logger.log(err)
        );
    }
  }
  saveCustomer(model:ICustomer){
    console.log("------save-------"+model);
    this.dataService.saveCustomer(model).subscribe(
      data => {         
          this.router.navigate(['/customers']);   
      //  this.model = data as string[];		// FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log("-----save----errr-");
        console.log (err.message);
      }
    );
  }
  cancel(event: Event) {
    event.preventDefault();
    // Route guard will take care of showing modal dialog service if data is dirty
    this.router.navigate(['/customers']);
  }

  delete(event: Event) {
    event.preventDefault();
    this.dataService.deleteCustomer(this.customer.customerId)
      .subscribe((status: any) => {
        console.log("--------status-----"+status);
       /* if (status) {
          this.router.navigate(['/customers']);
        } else {
          this.errorMessage = 'Unable to delete customer';
        }*/
      },
      (err: any) => console.log("--------err-----"+err)//this.logger.log(err)
      );
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.customerForm.dirty) {
      return true;
    }
  }
/*
    // Dirty show display modal dialog to user to confirm leaving
    const modalContent: IModalContent = {
      header: 'Lose Unsaved Changes?',
      body: 'You have unsaved changes! Would you like to leave the page and lose them?',
      cancelButtonText: 'Cancel',
      OKButtonText: 'Leave'
    };
    return this.modalService.show(modalContent);
  }*/

}
