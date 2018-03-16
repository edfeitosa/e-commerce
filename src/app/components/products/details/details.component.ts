import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { ProductService } from '../../../services/products.service';
import { CommentsService } from '../../../services/comments.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

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
    private commentsService: CommentsService
  ) { }

  ngOnInit() {
    this.products();
    this.comentarios();
    this.form_validation();
    this.form_group();
  }

  // verifica id na url
  verifica_id(): number {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params.id;
      });
    return (this.id != null) ? +this.id : 0 ;
  }

  // lista produto a partir de id
  products() {
    this.productsService.products_list(this.verifica_id())
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
      com_mensagem: this.com_mensagem
    });
  }

  form_validation(com_mensagem = '') {
    this.com_mensagem = new FormControl(com_mensagem, Validators.compose([Validators.required, Validators.maxLength(144)]));
  }

  form_submit(content) {
    this.commentsService.comment_save(
      this.verifica_id(),
      sessionStorage.getItem("nome"),
      this.form.controls.com_mensagem.value)
    .subscribe(
      retorno => {
        if (retorno[0].HttpStatusCode == 200) {
          this.comentarios();
          //window.location.reload();
        } else {
          alert(retorno[0].Mensagem);
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
