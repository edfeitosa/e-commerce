import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2/index';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseConfig } from './../../../environments/firebase.config';

import { HomeComponent } from './home.component';
import { routingHome } from './home.routing';
import { SocialService } from './../../services/social.service';

@NgModule({
  imports: [
    CommonModule,
    routingHome,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    SocialService
  ]
})
export class HomeModule { }
