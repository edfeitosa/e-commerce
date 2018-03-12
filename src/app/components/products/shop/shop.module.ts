import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ShopComponent } from './shop.component';
import { routingShop } from './shop.routing';
 
@NgModule({
  imports: [
    CommonModule,
    routingShop,
    AngularFireAuthModule
  ],
  exports: [
    ShopComponent
  ],
  declarations: [
    ShopComponent
  ]
})
export class ShopModule { }
