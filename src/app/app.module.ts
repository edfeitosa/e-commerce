import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { routingApp } from './app.routing';

import { HomeModule } from './components/home/home.module';
import { ShopModule } from './components/products/shop/shop.module';
import { ListModule } from './components/products/list/list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ShopModule,
    ListModule,
    routingApp
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
