import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
// carrega dados do login social
import { SocialModule } from './../social/social.module';

@NgModule({
  imports: [
    CommonModule,
    SocialModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ]
})
export class HeaderModule { }
