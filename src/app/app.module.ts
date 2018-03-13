import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { routingApp } from './app.routing';

import { HomeModule } from './components/home/home.module';
import { ShopModule } from './components/products/shop/shop.module';
import { DetailsModule } from './components/products/details/details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ShopModule,
    DetailsModule,
    routingApp
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
