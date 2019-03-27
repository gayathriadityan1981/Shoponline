import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { NavbarComponent } from './core/navbar/navbar.component';
//import { LoginComponent } from './login/login.component';
import {UserInfoService,LoginInfoInStorage} from './core/services/api/user-info.service';
import {ApiRequestService} from './core/services/api/api-request.service';
@NgModule({
  declarations: [
    AppComponent,
//    NavbarComponent,
//    LoginComponent
    
  ],
  imports: [
    BrowserModule,  
    CoreModule,       // Singleton objects (services, components that are loaded only once, etc.)
    AppRoutingModule ,//Main module for routes in this project
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule ,FormsModule
],
exports: [],
  providers: [UserInfoService,ApiRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
