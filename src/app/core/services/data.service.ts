import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map,catchError} from 'rxjs/operators';
import {ICustomer,IOrder,IApiResponse,IState,IPagedResults} from '../../shared/interfaces';
@Injectable({
  providedIn: 'root'
})

export class DataService {

  customersBaseUrl = '/api/customers';
  ordersBaseUrl = '/api/orders';
  orders: IOrder[];
  states: IState[];
//demo states
  demoStates :IState
  constructor(private http:HttpClient) { }
  getCustomersPage(page: number, pageSize: number): Observable<IPagedResults<ICustomer[]>> {
    return this.http.get<ICustomer[]>(
        `${this.customersBaseUrl}/page/${page}/${pageSize}`,
        { observe: 'response' })
        .pipe(
            map(res => {
                const totalRecords = +res.headers.get('X-InlineCount');
                const customers = res.body as ICustomer[];
                this.calculateCustomersOrderTotal(customers);
                return {
                    results: customers,
                    totalRecords: totalRecords
                };
            }),
            catchError(this.handleError)
        );
}
  listCustomers(): Observable<any> {
    return this.http.get<any>('http://localhost:8009/customers/getAllCustomers');   
   }
   listProducts(): Observable<any> {
    return this.http.get<any>('http://localhost:8009/products/getAllProducts');   
   }
   listOrders():Observable<any>{
    return this.http.get<any>('http://localhost:8009/orders/getAllOrders');   
   }

getCustomers(): Observable<ICustomer[]> {
  return this.http.get<ICustomer[]>(this.customersBaseUrl)
      .pipe(
          map(customers => {
              this.calculateCustomersOrderTotal(customers);
              return customers;
          }),
          catchError(this.handleError)
      );
}

getCustomer(customerId: number): Observable<ICustomer> {
  console.log("----data service---------------"+customerId);
  return this.http.get<ICustomer>('http://localhost:8009/customers'+ '/' + customerId)
      .pipe(
          map(customer => {
             // this.calculateCustomersOrderTotal([customer]);
              return customer;
          }),
          catchError(this.handleError)
      );
}

saveCustomer(customer: ICustomer): Observable<ICustomer> { 

    return this.http.post<ICustomer>('http://localhost:8009/customers/saveCustomer',customer)
      .pipe(catchError(this.handleError));
}

updateCustomer(customer: ICustomer): Observable<boolean> {
  return this.http.put<IApiResponse>(this.customersBaseUrl + '/' + customer.customerId, customer)
      .pipe(
          map(res => res.status),
          catchError(this.handleError)
      );
}

deleteCustomer(id: number): Observable<any> {
  return this.http.delete<any>('http://localhost:8009/customers/deleteCustomer' + '/' + id)
      .pipe(
          map(res => res.status),
          catchError(this.handleError)
      );
}

getStates(): Observable<IState[]> {
    
  return this.http.get<IState[]>('http://localhost:8009/customers/getAllStates')
     .pipe(catchError(this.handleError));
 
  return 
}

private handleError(error: HttpErrorResponse) {
  console.error('server error:----------', error);
  if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
  }
  return Observable.throw(error || 'Node.js server error');
}

calculateCustomersOrderTotal(customers: ICustomer[]) {
 /* for (const customer of customers) {
      if (customer && customer.orders) {
          let total = 0;
          for (const order of customer.orders) {
              total += order.itemCost;
          }
          customer.orderTotal = total;
      }
  }*/
}
}
