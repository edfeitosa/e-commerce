import { Injectable, EventEmitter, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalVariable } from '../globals';

@Injectable()
export class CommentsService {

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

    comment_save(Nome: string, Descricao: string, Id: number) {
        let params;
        params = JSON.stringify({ "identificadorSistema": Nome, "descricaoSistema": Descricao, "idSistema": Id });
        let options = new RequestOptions({ headers: this.header() });
        return this.http.post(
          GlobalVariable.SERVIDOR + GlobalVariable.COMMENT_SAVE + "?identificadorSistema=" + Nome + "&descricaoSistema=" + Descricao + "&idSistema=" + Id, 
          params, options)
        .map((response:Response) => {
            let insert = response.json();
            this.showComponent.emit(true);
            return insert;
        })
        .catch((error:any) => Observable.throw(error.json().error || 'Erro no servidor'));
    }
    
    comment_list() {
        let options = new RequestOptions({ headers: this.header() });
        return this.http.get(GlobalVariable.SERVIDOR + GlobalVariable.COMMENT_LIST, options)
        .map((response:Response) => {
            let list = response.json();
            return list;
        })
        .catch((error:any) => Observable.throw(error.json().error || 'Erro no servidor'));
    }

}