import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';
import { CadastroLojaPage } from '../pages/cadastro-loja/cadastro-loja';
import { CadastroProdutoPage } from '../pages/cadastro-produto/cadastro-produto';
import { LoginProvider } from '../providers/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard'; 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  dashboardPages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    public loginProvider: LoginProvider,
    public menuCtrl: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },      
      { title: 'Cadastre-se', component: CadastroUsuarioPage },
      { title: 'Login', component: LoginPage }
    ];

    this.dashboardPages = [
      { title: 'Home', component: DashboardPage },      
      { title: 'Loja', component: CadastroLojaPage },      
      { title: 'Anúncios', component: CadastroProdutoPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  openDashboardPage(page) {
    this.nav.push(page.component);
  }

  sair() {
    this.loginProvider.setStorage("usuario", null);
    this.menuCtrl.enable(false, 'menuDashboard');
    this.menuCtrl.enable(true, 'menuHome');
    this.nav.setRoot(HomePage);
  }
}
