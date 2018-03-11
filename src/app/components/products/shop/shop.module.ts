import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopComponent } from './shop.component';
import { routingShop } from './shop.routing';

@NgModule({
  imports: [
    CommonModule,
    routingShop
  ],
  exports: [
    ShopComponent
  ],
  declarations: [
    ShopComponent
  ]
})
export class ShopModule { }
