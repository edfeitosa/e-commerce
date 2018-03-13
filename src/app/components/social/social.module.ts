import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SocialComponent } from './social.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule
  ],
  exports: [
    SocialComponent
  ],
  declarations: [
    SocialComponent
  ]
})
export class SocialModule { }
