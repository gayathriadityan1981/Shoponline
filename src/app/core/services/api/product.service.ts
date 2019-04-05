
import {Product,Order,OrderItem,Cart} from '../../../shared/interfaces';
import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map,catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
  export class ProductService {
      constructor(private http:HttpClient){}
      findById(productId: number): Observable<Product> {
      
        return this.http.get<Product>('http://localhost:8009/products'+ '/' + productId)
            .pipe(
                map(pdt => {
                   // this.calculateCustomersOrderTotal([customer]);
                   
                    return pdt;
                }),
                catchError(this.handleError)
            );
      }
      saveCartItems(cartItems: OrderItem[]): Observable<OrderItem[]> { 

        return this.http.post<OrderItem[]>('http://localhost:8009/orders/saveCartItems',cartItems)
          .pipe(catchError(this.handleError));
    }
    updateCartItem(cartItem:OrderItem): Observable<OrderItem> { 
      return this.http.post<OrderItem>('http://localhost:8009/orders/updateCartItem',cartItem)
        .pipe(catchError(this.handleError));
  }
    saveCart(cart: Cart): Observable<Cart> { 

      return this.http.post<Cart>('http://localhost:8009/orders/saveCart',cart)
        .pipe(catchError(this.handleError));
  }
      saveOrder(order: Order): Observable<Order> { 

        return this.http.post<Order>('http://localhost:8009/orders/saveOrder',order)
          .pipe(catchError(this.handleError));
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
  getProduct(productId: number): Observable<Product> {
    console.log("----data service---------------"+productId);
    return this.http.get<Product>('http://localhost:8009/products'+ '/' + productId)
        .pipe(
            map(pdt => {
                return pdt;
            }),
            catchError(this.handleError)
        );
  }
}