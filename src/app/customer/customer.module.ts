import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule,MatTableModule,MatSelectModule,MatOptionModule
  } from '@angular/material';
@NgModule({
  imports: [
    CustomerRoutingModule, 
    SharedModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTableModule, 
    MatIconModule,
    MatSelectModule,
    MatOptionModule],
  exports:[
    CustomerRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatTableModule, 
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule],
  declarations: [CustomerRoutingModule.components]
})
export class CustomerModule { }