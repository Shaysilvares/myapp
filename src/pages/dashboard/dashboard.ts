import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IUsuario } from '../../../interfaces/IUsuario';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [
    LoginProvider
  ]
})
export class DashboardPage {
  usuario:IUsuario = {email: '', password: ''};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loginProvider: LoginProvider) {
  }

  ionViewDidLoad() {
    this.loginProvider.getStorage("usuario").then(usuario => {
      if(usuario) {
        this.usuario = usuario;
        this.loginProvider.showUsuario(usuario).subscribe(
          data => {
            this.usuario = data;
          }, error => {
            console.log(error);
          })
      }
    })
  }

}
