import { Injectable, EventEmitter, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalVariable } from '../globals';

@Injectable()
export class ProductService {

    showComponent = new EventEmitter<boolean>();

    constructor(
      private http: Http
    ) { }

    header(): any {
        let headers;
        headers = new Headers({
          'Content-Type': 'application/json'
        });
        return headers;
    }

    products_list(Id: number) {
        let options = new RequestOptions({ headers: this.header() });
        return this.http.get(GlobalVariable.SERVIDOR + GlobalVariable.PRODUCT_LIST + '/' + Id, options)
        .map((response:Response) => {
            let list = response.json();
            return list;
        })
        .catch((error:any) => Observable.throw(error.json().error || 'Erro no servidor'));
    }

}