import {Injectable} from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../core/services/auth.service';

@Injectable()

export class CanActivateGuard implements CanActivate{
    constructor(private  authService:AuthService,private router:Router){
    }
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
      /*  console.log("-----canActivate------"+this.authService.isAuthenticated)
        if(this.authService.isAuthenticated){
            return true;
        }
        this.authService.redirectUrl=state.url;
        this.router.navigate(['/login']);
        return false;*/
        if (localStorage.getItem('currentUser')) {
			return true;
		}else {
			this.router.navigate(['/login']);
			return false;
		}
    }
}
