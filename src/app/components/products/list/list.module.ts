import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list.component';
import { routingList } from './list.routing';

@NgModule({
  imports: [
    CommonModule,
    routingList
  ],
  exports: [
    ListComponent
  ],
  declarations: [
    ListComponent
  ]
})
export class ListModule { }
