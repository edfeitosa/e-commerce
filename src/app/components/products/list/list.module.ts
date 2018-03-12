import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ListComponent } from './list.component';
import { routingList } from './list.routing';

@NgModule({
  imports: [
    CommonModule,
    routingList,
    AngularFireAuthModule
  ],
  exports: [
    ListComponent
  ],
  declarations: [
    ListComponent
  ]
})
export class ListModule { }
