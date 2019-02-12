import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AnuncioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnuncioProvider {
  url: string = "https://dev.autodicas.com/api/";

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello AnuncioProvider Provider');
  }

  setStorage(chave: string, valor: any) {
    this.storage.set(chave, valor);
  }

  getStorage(chave: string) {
    return this.storage.get(chave);
  }

  getAnunciosLoja() {
    return this.http.get(this.url + "produtos/loja/2");
  }
}
