import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LojaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LojaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LojaProvider Provider');
  }

  getLojas() {
    return this.http.get("https://dev.autodicas.com/api/lojas");
  }

  getLoja(lojaId: any) {
    return this.http.get(`https://dev.autodicas.com/api/loja/${lojaId}`);
  }

}
