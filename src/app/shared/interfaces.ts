import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface ICustomer {
    customerId: number,
    firstName: string,
    lastName: string,
    email:string,
    company:string,
    phone:string,
    gender: string,
    address1: string,
    address2: string,
    city: string,
    postalcode:string,
    country:string,
    
}
export class IProduct{
    product_id : string;
    product_img : string;
    product_name : string;
    product_price : number;
    product_details : string;
    product_quantity : number;
}
export interface IState {
    stateId:number;
    abbreviation: string;
    name: string;
}

export interface IOrder {
    productName: string;
    itemCost: number;
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IApiResponse {
    status: boolean;
    error?: string;
}
export class IUser{
    customerId:string;
	firstName:string;
	lastName:string;
	customerPhone:string;
	shippingAddress:string;
	gender:string;
    city:string;
    stateId:string;
    userId:string;
    cartId:string;    
}
export class User{
    userId:number;
    email:string;
    password:string;
    firstName:string;
    lastName:string;
    address1:string;
    address2:string;
    company:string;
    country:string;
    role:string;
    phone:string;
   // token:string;
   securityProviderId:number=1234;
   defaultCustomerId:any;
   isActive:boolean;
   secretQuestion:string;
   secretAnswer:string;
   enableBetaTesting:boolean=true;
   enableRenewal:boolean=true;
}
export interface Product{
     id:number;
     productCode:string;
     productName:string;
     description:string;
     standardCost:number;
     listPrice:number;
     targetLevel:number;
     reorderLevel:number;
     minimumReorderQuantity:number;
     quantityPerUnit:string;
     discontinued:number;
     category:string;
}
export interface OrderItem{  
   cartId:number;
   product:Product;
   quantity:number;
   //subtotal:number;

//    // orderItemKey:CompositeOrderProductKey;//orderid+productid is the key
//     productId:number;
//     quantity    :number;
//     unitPrice :number;
//     discount   :number;
//     dateAllocated:string;
//     orderItemStatus :string;
}
export class CompositeOrderProductKey{
    orderId:number;
    productId:number;
}
export class OrderLine{
productId:number;
productCode:string;
productName:string;
category:string;
quantity:number;
unitPrice:number;
discount:number;
dateAllocated:string;
orderItemStatus:string;
}

export interface Order{
    cartId:number;
    orderId:number;
    userId:number;
    paymentType:string;
    total:number;
    orderDate:any;
    status:string;
}
export interface OrderDetail{
    customerName:string;
    customerEmail:string;
    customerMobile:string;
    orderLine:OrderLine[];
}