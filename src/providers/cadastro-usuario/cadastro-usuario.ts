import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../../../interfaces/IUsuario';

/*
  Generated class for the CadastroUsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastroUsuarioProvider {
    headers:any;
  constructor(
    public http: HttpClient,
    ) {
    console.log('Hello CadastroUsuarioProvider Provider');
    //this.headers = {"headers": {"authorization": "Bearer "+ this.token}}      
    }

  adicionarUsuario(data:IUsuario) {
    return this.http.post<IUsuario>("http://localhost:3000/usuarios", data);
  }
}
