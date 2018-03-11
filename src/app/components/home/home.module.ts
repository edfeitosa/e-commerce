import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { routingHome } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    routingHome
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
