import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map,catchError} from 'rxjs/operators';
import {ICustomer,IOrder,IApiResponse,IState,IPagedResults} from '../../shared/interfaces';
@Injectable({
  providedIn: 'root'
})

export class DataService {

  
  constructor(private http:HttpClient) { }

  listCustomers(): Observable<any> {
    return this.http.get<any>('http://localhost:8009/customers/getAllCustomers');   
   }
   listOrders():Observable<any>{
    return this.http.get<any>('http://localhost:8009/orders/getAllOrders');   
   }
}
