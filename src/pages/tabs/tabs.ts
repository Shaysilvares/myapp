import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CadastroLojaPage } from '../cadastro-loja/cadastro-loja';
import { DashboardPage } from '../dashboard/dashboard';
import { AnunciosPage } from '../anuncios/anuncios';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1 = DashboardPage;
  tab2 = CadastroLojaPage;
  tab3 = AnunciosPage;

  constructor(public navCtrl: NavController) {}

}
