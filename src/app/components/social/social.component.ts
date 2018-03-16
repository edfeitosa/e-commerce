import { Component, OnInit } from '@angular/core';

import { SocialService } from './../../services/social.service';
import { isNull } from 'util';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  public nome: string;
  public foto: string;

  constructor(
    private socialService: SocialService
  ) { }

  ngOnInit() {
    this.nome = sessionStorage.getItem("nome");
    this.foto = sessionStorage.getItem("foto");
    console.log(sessionStorage.getItem("nome"));
  }

  logout(): void {
    this.socialService.signOut();
  }

}
