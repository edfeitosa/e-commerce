import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { AngularFireAuthModule, AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class SocialService {

    constructor(private afAuth: AngularFireAuth, private router: Router) { }
 
    loginGoogle() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(function (sucess) {
                sessionStorage.setItem("access", "allowed");
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error.message + '. Tente novamente.');
        });
    }
   
    loginFacebook() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(function (sucess) {
                sessionStorage.setItem("access", "permited");
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error.message + '. Tente novamente.');
        });
    }    
   
    signOut(): void {
        this.afAuth.auth.signOut();
        sessionStorage.removeItem("access");
        this.router.navigate(['/home']);
    }

}