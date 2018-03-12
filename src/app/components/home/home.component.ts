import { Component, OnInit } from '@angular/core';
import { SocialService } from './../../services/social.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private socialService: SocialService) { }

  ngOnInit() { }

  loginFacebook(): void {
    this.socialService.loginFacebook();
  }

  loginGoogle(): void {
    this.socialService.loginGoogle();
  }

  logout(): void {
    this.logout();
  }

}
