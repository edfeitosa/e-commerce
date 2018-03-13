import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopComponent } from './shop.component';
import { routingShop } from './shop.routing';
// carrega dados do header
import { HeaderModule } from './../../header/header.module';
 
@NgModule({
  imports: [
    CommonModule,
    routingShop,
    HeaderModule
  ],
  exports: [
    ShopComponent
  ],
  declarations: [
    ShopComponent
  ]
})
export class ShopModule { }
