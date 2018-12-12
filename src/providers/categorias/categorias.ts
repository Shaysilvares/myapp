import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CategoriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriasProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CategoriasProvider Provider');
  }

  getCategorias() {
    return this.http.get("https://dev.autodicas.com/api/categorias");
  }

}
