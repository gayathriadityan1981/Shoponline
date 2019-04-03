import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import {OrderItem, Product,Order,OrderLine} from '../../shared/interfaces';
import {ProductService} from '../../core/services/api/product.service';

@Component({
  selector: 'cm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product:Product;
  order:Order;
  private items:OrderItem[]=[];
  private total:number=0;
  private subtotal:number=0;
  private cartId:number=1;
  value=0;
  constructor(
    private activatedRoute:ActivatedRoute,
    private productService:ProductService
  ) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.params["id"];
    this.getCartItem(id);
  }
  update(value:string,unitprice:string){
    this.value=parseInt(value);
    this.subtotal=parseInt(value)*parseInt(unitprice);
    console.log("------------pdt---------"+parseInt(value));
    console.log("------------unitprice---------"+parseInt(unitprice));
  }
  getCartItem(id: number) {
    let pdtId:number;
    this.productService.findById(id).subscribe((pdt: Product) => {
      this.product = pdt;
      pdtId         =pdt.id;
     
      if (id) {
        var orderItem: OrderItem = {
         cartId:this.cartId,
         product: pdt,
				 quantity: this.value
        };
        if (sessionStorage.getItem('cart') == null) {
            let cart: any = [];
            cart.push(JSON.stringify(orderItem));
            sessionStorage.setItem('cart', JSON.stringify(cart));            
        }
        else {
          console.log("------------else---------")
          let cart: any = JSON.parse(sessionStorage.getItem('cart'));
          let index: number = -1;
          for (var i = 0; i < cart.length; i++) {
           let orderItem: OrderItem = JSON.parse(cart[i]);
            if (pdtId == id) {
              console.log("-----------pdtId == id--------")
              index = i;
              break;
            }
          }
          if (index == -1) {
            console.log("------------index---------"+index)
            cart.push(JSON.stringify(orderItem));
            sessionStorage.setItem('cart', JSON.stringify(cart));
          } else {
            let orderItem: OrderItem = JSON.parse(cart[index]);
            orderItem.quantity += 1;
            orderItem.cartId=this.cartId+1;
            cart[index] = JSON.stringify(orderItem);
            console.log("------------index----68-----"+index)
            sessionStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        this.loadCart();
      } else {
        this.loadCart();
      }
      },
    (err: HttpErrorResponse) => {
      console.log("-----edit cust----errr-");
      console.log (err.message);
    }
  );
      
}

loadCart():void{
  this.total=0;
  this.items=[];
  let cart = JSON.parse(sessionStorage.getItem('cart'));
  
  for (var i = 0; i < cart.length; i++) {
    let item = JSON.parse(cart[i]);
    console.log("----item in session------"+item.product.id);
    this.items.push({
      cartId:this.cartId,
      product: item.product,
      quantity: this.value
    }); console.log("-----cart-----"+cart[i].product);
 //   this.total += item.product.listPrice * item.product.quantity;
    console.log("------load----100-------"+this.items['product'])
  }
}
remove(id: string): void {
  let cart: any = JSON.parse(sessionStorage.getItem('cart'));
  let index: number = -1;
  for (var i = 0; i < cart.length; i++) {
    let item: OrderItem = JSON.parse(cart[i]);
    if ((item.product.id) == parseInt(id)) {
      cart.splice(i, 1);
      break;
    }
  }
  sessionStorage.setItem("cart", JSON.stringify(cart));
  this.loadCart();
}
/* finaliseOrder(){
  this.items=[];
  let cart = JSON.parse(sessionStorage.getItem('cart'));
  
  console.log("------length-----------"+cart.length)
  for (var i = 0; i < cart.length; i++) {
    let item = JSON.parse(cart[i]);
    this.items.push({
      cartId:i,
      product: item.product,
      quantity: item.quantity
    });
    this.total += item.product.price * item.quantity;
    let order:Order = {
      cartId:i,
      orderId:i,
      userId:1,
      paymentType:"cash on delivery",
      total:this.total,
      orderDate:new Date(),
      status:"order confirmed"
    }
    this.productService.saveOrder(order).subscribe((ord: Order) => {
      this.order = order;
    });
}
}*/
}