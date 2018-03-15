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

  // lista produtos
  products() {
    this.productsService.products_list(0)
    .subscribe(
      retorno => {
        this.itensOut = retorno;
      },
      error => console.log(error)
    );
  }

}
