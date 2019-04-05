import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http/src/response';
import { ProductService } from '../../core/services/api/product.service';
import {Product} from '../../shared/interfaces';
import { UserInfoService } from 'src/app/core/services/api/user-info.service';
@Component({
  selector: 'cm-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  product:Product;
  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText = 'Insert';
  orderCondition:boolean;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private pdtService: ProductService,private userInfoService:UserInfoService) { 
    
  }

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    this.getProduct(id);
    if(this.userInfoService.getUserInfo()!=null){
      this.orderCondition=true;
    }
    else
     this.orderCondition=false;
    if(this.userInfoService.getUserInfo().role.toString()==="USER")
     {
              this.orderCondition=true;
             
      }
     if(this.userInfoService.getUserInfo().role.toString()==="ADMIN")
      {
             
              this.orderCondition=false;
      }
  }

  getProduct(id: number) {
    console.log("--edit get--------"+id);
    this.pdtService.getProduct(id).subscribe((pdt: Product) => {
      this.product = pdt;
    },
    (err: HttpErrorResponse) => {
      console.log("-----edit product----errr-");
      console.log (err.message);
    }
  );
}

  
}

