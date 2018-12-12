import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CategoriasPage } from '../categorias/categorias';

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

  categoriasRoot = CategoriasPage;


  constructor(public navCtrl: NavController) {}

}
