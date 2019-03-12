import { NgModule,Optional,SkipSelf } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule,
  MatTableModule//,
  //MatTableDataSource
} from '@angular/material';
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
     // MatTableDataSource,
      
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
     // MatTableDataSource,
      MatToolbarModule],
    declarations:[NavbarComponent]
})

export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule
// Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
   super(parentModule);
  }
}