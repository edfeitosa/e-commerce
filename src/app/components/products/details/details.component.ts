import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { ProductService } from '../../../services/products.service';
import { CommentsService } from '../../../services/comments.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user: Observable<firebase.User>

  public itensOut: any[];
  public comentariosOut: any[];
  private sub: any;
  private id: number;

  // form
  private form: FormGroup;
  private com_usuario: FormControl;
  private com_mensagem: FormControl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductService,
    private commentsService: CommentsService,
    private afAuth: AngularFireAuth
  ) {
    this.user = this.afAuth.authState
  }

  ngOnInit() {
    this.products();
    this.form_validation();
    this.form_group();
    console.log(this.verifica_id());
    this.user;
    this.user.subscribe((user: firebase.User) => {
        console.log('Seu usuário é: ' + user.displayName);
    });
  }

  // verifica id na url
  verifica_id(): number {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => { this.id = queryParams['id']; });
    return this.id;
    // return (this.id != null) ? +this.id : 0 ;
  }

  // lista produto a partir de id
  products() {
    this.productsService.products_list(1)
    .subscribe(
      retorno => {
        this.itensOut = retorno;
      },
      error => console.log(error)
    );
  }

  // form
  form_group() {
    this.form = new FormGroup({
      com_usuario: this.com_usuario,
      com_mensagem: this.com_mensagem
    });
  }

  form_validation(com_usuario = 'Teste TESTE', com_mensagem = '') {
    this.com_usuario = new FormControl(com_usuario, Validators.nullValidator);
    this.com_mensagem = new FormControl(com_mensagem, Validators.compose([Validators.required, Validators.maxLength(144)]));
  }

  form_submit(content) {
    this.commentsService.comment_save(
      /* this.verifica_id() */ 1,
      this.form.controls.com_usuario.value, 
      this.form.controls.com_mensagem.value)
    .subscribe(
      retorno => {
        if (retorno.HttpStatusCode == 200 && retorno.SystemCode == 1) {
          this.comentarios();
        } else {
          alert(retorno.Mensagem);
        }
      },
      error=> {
        alert("Algo está errado...");
      }
    );
  }

  comentarios() {
    this.commentsService.comment_list(this.verifica_id())
    .subscribe(
      retorno => {
        this.comentariosOut = retorno;
      },
      error => console.log(error)
    );
  }

}
