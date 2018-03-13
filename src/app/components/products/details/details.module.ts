import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsComponent } from './details.component';
import { routingList } from './details.routing';

@NgModule({
  imports: [
    CommonModule,
    routingList
  ],
  exports: [
    DetailsComponent
  ],
  declarations: [
    DetailsComponent
  ]
})
export class DetailsModule { }
