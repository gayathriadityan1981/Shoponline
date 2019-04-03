import { Injectable ,Output,EventEmitter} from '@angular/core';
import {HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Observable,BehaviorSubject,Subject} from 'rxjs';
import {map,catchError} from 'rxjs/operators';
import {User} from '../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
/*
  authUrl='auth';
  isAuthenticated=false;
  redirectUrl:string;
  @Output() authChanged:EventEmitter<boolean>=new EventEmitter<boolean>();

  constructor(private http:HttpClient) { }

  private userAuthChanged(status:boolean){
    this.authChanged.emit(status);//raise changed event
  }

  login(userLogin: IUserLogin): Observable<boolean> {
    console.log("-------userlogin-------"+userLogin.email);
    console.log("-------userlogin-------"+userLogin.password);
    return this.http.post<boolean>('http://localhost:8009/auth/login', userLogin)
        .pipe(
            map(loggedIn => {
              console.log("-------loggedIn-------"+loggedIn);
                this.isAuthenticated = loggedIn;
                this.userAuthChanged(loggedIn);
                return loggedIn;
            }),
            catchError(this.handleError)
        );
}

  logout(): Observable<boolean> {
    return this.http.post<boolean>(this.authUrl + '/logout', null)
        .pipe(
            map(loggedOut => {
                this.isAuthenticated = !loggedOut;
                this.userAuthChanged(!loggedOut); // Return loggedIn status
                return loggedOut;
            }),
            catchError(this.handleError)
        );
}

private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Server error');
}*/

private currentUserSubject:BehaviorSubject<User>;
public currentUser:Observable<User>;
authUrl='auth';
isAuthenticated=false;
redirectUrl:string;
@Output() authChanged:EventEmitter<boolean>=new EventEmitter<boolean>();

public getLoggedInName = new Subject(); //Alternate method to Emitting data across Components. Subject() is doing both Emitting data and Subscribing it in another component. So its the best way to compare with Emitting using Output.
constructor(private http:HttpClient) {

  this.currentUserSubject=new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser=this.currentUserSubject.asObservable();
 }
 private userAuthChanged(status:boolean){
  this.authChanged.emit(status);//raise changed event
}
public get currentUserValue():User{
  return this.currentUserSubject.value;
}
//Get User's Display name from session storage
getUserName():string{
  let userObj:User = this.getUserInfo();
  if (userObj!== null){
      return userObj.firstName;
  }
  return "no-user";
}
 //Get userinfo from session storage
 getUserInfo():User|null {
  try{
      let userInfoString:string = localStorage.getItem('currentUser');
      if (userInfoString) {
          let userObj:User = JSON.parse(localStorage.getItem('currentUser'));
          return userObj;
      }
      else{
          return null;
      }
  }
  catch (e) {
      return null;
  }
}

login(userLogin:User){

 return this.http.post<any>('http://localhost:8009/auth/login/',userLogin).pipe(map(user=>{
  //if(user&&user.token){
    if(user){
   
   // console.log("------user.token----"+user.token);
    //store user details and jwt token in local storage to keep user logged in between page references
    localStorage.setItem('currentUser',JSON.stringify(user));
    console.log("------user----name------"+user.name);
    this.getLoggedInName.next(user.name); //next() method is alternate to emit().
   this.currentUserSubject.next(user);      
    }
    else{
      this.getLoggedInName.next('Sign In');
    }
    return user;
 }));
}
logout(){
  console.log("------user---logged out-------");
  localStorage.removeItem('user');
  this.currentUserSubject.next(null);
}
}

