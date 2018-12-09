import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProdutosProvider Provider');
  }

  getProdutos() {
    return this.http.get("https://dev.autodicas.com/api/produtos");
  }

}
