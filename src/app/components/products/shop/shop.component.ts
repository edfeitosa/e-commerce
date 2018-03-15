import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService } from '../../../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public itensOut: any[];
  private sub: any;
  private id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductService
  ) { }

  ngOnInit() {
    this.products();
  }

  // verifica id na url
  verifica_id(): number {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => { this.id = queryParams['id']; });
    return (this.id != null) ? +this.id : 0 ;
  }

  // lista produtos
  products() {
    this.productsService.products_list(this.verifica_id())
    .subscribe(
      retorno => {
        this.itensOut = retorno;
      },
      error => console.log(error)
    );
  }

}
