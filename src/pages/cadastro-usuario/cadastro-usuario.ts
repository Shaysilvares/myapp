import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { IUsuario } from '../../../interfaces/IUsuario';
import { CadastroUsuarioProvider } from '../../providers/cadastro-usuario/cadastro-usuario';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

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
    public cadastroUsuarioProvider: CadastroUsuarioProvider,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUsuarioPage');
  }

  addUsuario() {
  this.cadastroUsuarioProvider.adicionarUsuario(this.usuario).subscribe(
    data => {
      if(data) {
        if(data.token) {
          this.cadastroUsuarioProvider.setStorage("usuario", data);
          localStorage.setItem('token', data.token);
          let toast = this.toastCtrl.create({
          message: "Cadastro realizado com sucesso!",
          duration: 2000,
          position: 'bottom',
          closeButtonText: 'Ok'
        });
          toast.present();
          this.navCtrl.push(LoginPage);
          console.log(data);
        } else {          
          console.log(data); //validação
        }
      } else {
        //login com error
      }      
    }, error => {
      console.log(error);
    });
  }

  cancelar() {
    this.navCtrl.setRoot(HomePage);
  }

}
