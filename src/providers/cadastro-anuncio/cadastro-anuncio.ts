import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { IAnuncio } from '../../../interfaces/IAnuncio';

/*
  Generated class for the CadastroAnuncioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastroAnuncioProvider {
  url:string = "http://10.147.160.244:8000/api/"

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello CadastroAnuncioProvider Provider');
  }

  setStorage(chave: string, valor: any) {
    this.storage.set(chave, valor);
  }

  getStorage(chave: string) {
    return this.storage.get(chave);
  }

  cadastrarAnuncio(anuncio: IAnuncio) {
    return this.http.post<IAnuncio>(this.url + "anuncio", anuncio);
  }
}