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
