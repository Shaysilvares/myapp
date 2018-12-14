import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginProvider } from '../../providers/login/login';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { IUsuario } from '../../../interfaces/IUsuario';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    LoginProvider
  ]
})
export class LoginPage {
  usuario:IUsuario = {email:'',senha:''};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loginProvider: LoginProvider) {
  }

  ionViewDidLoad() {
  }

  goToHomePage() {    
    this.navCtrl.setRoot(HomePage);
  }

  buscarUsuario() {
    this.loginProvider.getStorage("usuario").then(usuario => {
      if(usuario) {
        this.usuario = usuario;
        this.loginProvider.buscarUsuario(usuario).subscribe(
          data => {
            this.usuario = data;
          }, error => {
            console.log(error);
          }
        )
      } else {
        
      }
    });
  }
}
