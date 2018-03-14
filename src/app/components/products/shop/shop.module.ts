import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ShopComponent } from './shop.component';
import { routingShop } from './shop.routing';

// carrega dados do header
import { HeaderModule } from './../../header/header.module';

// service
import { ProductService } from './../../../services/products.service';
 
@NgModule({
  imports: [
    CommonModule,
    routingShop,
    HeaderModule,
    HttpModule
  ],
  exports: [
    ShopComponent
  ],
  declarations: [
    ShopComponent
  ],
  providers: [
    ProductService
  ]
})
export class ShopModule { }
