import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';

import { FilterTextboxModule } from './filter-textbox/filter-textbox.module';
//import { MapModule } from './map/map.module';
//import { PaginationModule } from './pagination/pagination.module';
import { LowrcasePipe } from './pipes/lowrcase.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import {Filter} from './pipes/filter.pipe';
//import { SortByDirective } from './directives/sortby.directive';
import {OnlynumberDirective} from '../shared/directives/onlynumber.directive';
@NgModule({
  imports: [CommonModule, FilterTextboxModule// MapModule,, PaginationModule
 ],
  exports: [ CommonModule, FormsModule,FilterTextboxModule , CapitalizePipe, TrimPipe,LowrcasePipe,Filter,OnlynumberDirective//, SortByDirective, MapModule, PaginationModule
             ],
  declarations: [ CapitalizePipe, TrimPipe,LowrcasePipe,Filter,OnlynumberDirective// SortByDirective 
]
})
export class SharedModule { }