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
            .then((credential) =>  {
                sessionStorage.setItem("access", "allowed");
                sessionStorage.setItem("nome", credential.additionalUserInfo.profile.name);
                sessionStorage.setItem("foto", credential.additionalUserInfo.profile.picture);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error.message + '. Tente novamente.');
        });
    }
   
    loginFacebook() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then((credential) =>  {
                sessionStorage.setItem("access", "allowed");
                sessionStorage.setItem("nome", credential.additionalUserInfo.profile.name);
                sessionStorage.setItem("foto", credential.additionalUserInfo.profile.picture);
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