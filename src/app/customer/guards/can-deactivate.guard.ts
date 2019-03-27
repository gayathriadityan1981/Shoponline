import { NgModule, Injectable } from '@angular/core';
import { RouterStateSnapshot,ActivatedRouteSnapshot,CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import {CustomerEditComponent} from '../customer-edit/customer-edit.component';

@Injectable()

export class CanDeactivateGuard implements CanDeactivate<CustomerEditComponent>{

    constructor(){}

    canDeactivate(
        component:CustomerEditComponent,
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot
    ):Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}