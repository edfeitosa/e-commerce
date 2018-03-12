import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialService } from './../../services/social.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private socialService: SocialService, private router: Router) {
    if (sessionStorage.getItem('access') != undefined) {
      this.router.navigate(['/products/shop']);
    }
  }

  ngOnInit() { }

  loginFacebook(): void {
    this.socialService.loginFacebook();
  }

  loginGoogle(): void {
    this.socialService.loginGoogle();
  }

  logout(): void {
    this.socialService.signOut();
  }

}
