import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IUsuario } from '../../../interfaces/IUsuario';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  url:string = "http://localhost:8000/api/";
  constructor(
    public http: HttpClient,
    private storage: Storage) {
    console.log('Hello LoginProvider Provider');
  }

  setStorage(chave: string, valor: any) {
    this.storage.set(chave, valor);
  }

  getStorage(chave: string) {
    return this.storage.get(chave);
  }

  /* buscarUsuario(data:IUsuario) {
    return this.http.get<IUsuario>(this.url + 'usuarios/'+ data.id);
  } */

  login(data:IUsuario) {
    return this.http.post<IUsuario>(this.url + 'login', data);
  }

  showUsuario(data:IUsuario) {
    return this.http.get<IUsuario>(this.url + 'usuarios', {"headers": {"authorization": "Baerer " + localStorage.getItem('token')}});
  }

}
