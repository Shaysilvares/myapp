import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginProvider } from '../../providers/login/login';
import { IUsuario } from '../../../interfaces/IUsuario';
import { DashboardPage } from '../dashboard/dashboard';

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
  usuario:IUsuario = {email:'', password:''};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loginProvider: LoginProvider,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
  }

  goToHomePage() {    
    this.navCtrl.setRoot(HomePage);
  }

  doLogin() {
    this.loginProvider.login(this.usuario).subscribe(
      data => {
        if(data) {
          if(data.token) {
            this.loginProvider.setStorage("usuario", data);
            localStorage.setItem('token', data.token);            
            this.navCtrl.push(DashboardPage);
            this.trocaMenu();
            console.log(data);
          } else {
            //saber como tratar erro de validação usando toast
            console.log(data); //validação
          }
        } else {
          //login com error
        }
      }, error => {
        let toast = this.toastCtrl.create({
          message: "Login ou senha inválido",
          duration: 3000
        });
        toast.present();
        console.log(error);
      });
    }

    trocaMenu() {
      this.menuCtrl.enable(true, 'menuDashboard');
      this.menuCtrl.enable(false, 'menuHome');
    }

    cancelar() {
      this.navCtrl.setRoot(HomePage);
    }
}
