import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginProvider } from '../../providers/login/login';
import { IUsuario } from '../../../interfaces/IUsuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

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
  public formulario : FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loginProvider: LoginProvider,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController,
    private formBuilder: FormBuilder) {

      this.formulario = this.formBuilder.group({
        email:['', Validators.compose([Validators.required, Validators.email])],
        password:['', Validators.compose([Validators.minLength(5),Validators.required]) ]
      })
  }

  ionViewDidLoad() {
  }

  goToHomePage() {    
    this.navCtrl.setRoot(HomePage);
  }

  doLogin() {

    this.usuario.password = this.formulario.value.password;
    this.usuario.email = this.formulario.value.email;
    this.loginProvider.login(this.usuario).subscribe(
      data => {
        if(data) {
          if(data.token) {
            this.loginProvider.setStorage("usuario", data);
            localStorage.setItem('token', data.token);            
            this.navCtrl.push(TabsPage);
            this.trocaMenu();
            console.log(data);
          } else {
            //saber como tratar erro de validação usando toast
            console.log(data); //validação
            let erros = "";
            if(data.email) {
              for(let erro of data.email) {
                erros += erro + " ";
              }
            }
            if(data.password) {
              for(let erro of data.password) {
                erros += erro + " ";
              }
            }
            this.exibeToast(erros)
          }
        } else {
          //login com error
        }
      }, error => {
        let msg = "Login ou senha inválido"
        this.exibeToast(msg);
        console.log(error);
      });
    }

    exibeToast(msg:string) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000
      });
      toast.present();
    }

    trocaMenu() {
      this.menuCtrl.enable(true, 'menuDashboard');
      this.menuCtrl.enable(false, 'menuHome');
    }

    cancelar() {
      this.navCtrl.setRoot(HomePage);
    }
}
