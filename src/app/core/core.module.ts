import { NgModule,Optional,SkipSelf } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../core/services/auth.service';
import {AuthInterceptor} from '../core/interceptors/auth.interceptor';

import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule,MatTableModule
  } from '@angular/material';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
    imports:[RouterModule,
      //material io
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
      ReactiveFormsModule //for form valildation
    ],
    exports:[RouterModule,NavbarComponent,
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
      MatToolbarModule
    ],
    declarations:[NavbarComponent],
    providers:[AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }]
})

export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule
// Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
   super(parentModule);
  }
}