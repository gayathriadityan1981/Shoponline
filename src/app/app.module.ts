import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerOrdersComponent } from './customer/customer-orders/customer-orders.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
    CustomerOrdersComponent  
  ],
  imports: [
    BrowserModule,  
    CoreModule,       // Singleton objects (services, components that are loaded only once, etc.)
    AppRoutingModule ,//Main module for routes in this project
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule 
],
exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
