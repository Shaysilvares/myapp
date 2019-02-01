import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../../../interfaces/IUsuario';
import { Storage } from '@ionic/storage';

/*
  Generated class for the CadastroUsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastroUsuarioProvider {
    url:string = "http://localhost:8000/api/";
    headers:any;
  constructor(
    public http: HttpClient,
    private storage: Storage
    ) {
    console.log('Hello CadastroUsuarioProvider Provider');
    //this.headers = {"headers": {"authorization": "Bearer "+ this.token}}
    }

  adicionarUsuario(data:IUsuario) {
    return this.http.post<IUsuario>(this.url + "cadastro", data);
  }

  setStorage(chave: string, valor: any) {
    this.storage.set(chave, valor);
  }

  getStorage(chave: string) {
    return this.storage.get(chave);
  }
}
