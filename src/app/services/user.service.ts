import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {IUserLogin,User} from '../shared/interfaces';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isUserLoggedIn;
  constructor(public http:HttpClient) { 
    this.isUserLoggedIn = false;
  }
  public _loggedInUser?: IUserLogin;

getLoggedInUser(): IUserLogin {
    return this._loggedInUser;
}
setLoggedInUser(user: IUserLogin) {
    this._loggedInUser = user;
}
setUserLoggedIn(status:boolean) {
  this.isUserLoggedIn = true;
}
getUserLoggedIn() {
  return this.isUserLoggedIn;
}
setUserLoggedOut() {
  this.isUserLoggedIn = false;
}

  getUserDetails(id: number) : Observable<any> {
    
    //  return this.http.post('http://localhost:8009/users/getUser/',id).pipe(map(res => res));
      return this.http.get<any>(`http://localhost:8009/users/getUser/${id}`);
    }
    
  
    deleteUser(id){
        return this.http.get('http://localhost:8009/deleteUser/'+id);
    }
    saveUser(model:any){
     
      return this.http.post('http://localhost:8009/users/saveUser/',model).pipe(map(res=>res));
  }
    updateUser(model:any){
     
        return this.http.post('http://localhost:8009/users/editUser/',model).pipe(map(res=>res));
    }
    listUsers(): Observable<any> {
     return this.http.get<any>('http://localhost:8009/users/getAllUsers');
     //return this.http.get('	http://dummy.restapiexample.com/api/v1/employees');
    }
    
  exportCSV(model:any){
     
    return this.http.post('http://localhost:8009/reports/userReports/',model).pipe(map(res=>res));
  }
  
  }
  