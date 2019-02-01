import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IUsuario } from '../../../interfaces/IUsuario';
import { CadastroUsuarioProvider } from '../../providers/cadastro-usuario/cadastro-usuario';
import { HomePage } from '../home/home';

/**
 * Generated class for the CadastroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
  providers: [
    CadastroUsuarioProvider
  ]
})
export class CadastroUsuarioPage {
  usuario: IUsuario = {email:'', password:''};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cadastroUsuarioProvider: CadastroUsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUsuarioPage');
  }

  addUsuario() {
  this.cadastroUsuarioProvider.adicionarUsuario(this.usuario).subscribe(
    data => {
      this.cadastroUsuarioProvider.setStorage("usuario", data);
      localStorage.setItem('token', data.token);
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  cancelar() {
    this.navCtrl.setRoot(HomePage);
  }

}
