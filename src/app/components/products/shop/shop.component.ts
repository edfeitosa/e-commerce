import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private productsService: ProductService
  ) { }

  ngOnInit() {
    this.products();
    console.log(this.verifica_id());
  }

    // verifica id na url
    verifica_id(): any {
      this.sub = this.route.params.subscribe(params => { this.id = +params['id']; });
      return this.sub;
    }

  // lista produtos
  products() {
    this.productsService.products_list(0)
    .subscribe(
      retorno => {
        this.itensOut = retorno.Container;
      },
      error => console.log(error)
    );
  }

}
