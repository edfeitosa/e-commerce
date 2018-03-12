import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { SocialService } from './../../../services/social.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  user: Observable<firebase.User>

  constructor(
    private socialService: SocialService, 
    private afAuth: AngularFireAuth
  ) {
    this.user = this.afAuth.authState
  }

  ngOnInit() { }

  logout(): void {
    this.socialService.signOut();
  }

}
