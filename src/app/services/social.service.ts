import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocialService {

    user: Observable<firebase.User>

    constructor(private afAuth: AngularFireAuth, private router: Router) {
        this.user = this.afAuth.authState
    }  
 
    loginGoogle() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(
            (success) => {
            this.router.navigate(['/products/shop']);
          }).catch(
            (err) => {
            alert('${error.message} Please try again')
          })
        /*    .catch(function (error) {
            alert('${error.message} Please try again')
        }) */
    }    
   
    loginFacebook() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .catch(function (error) {
            alert('${error.message} Please try again')
        })
    }    
   
    signOut(): void {
        this.afAuth.auth.signOut();
    }

}