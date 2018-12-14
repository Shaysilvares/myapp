import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DetalheLojaPage } from '../detalhe-loja/detalhe-loja';

/**
 * Generated class for the LojaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loja',
  templateUrl: 'loja.html',
})
export class LojaPage {

  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LojaPage');
  }

  closeModalLojas() {
    this.viewCtrl.dismiss();
  }

  goToDetalheLojaPage() {    
    this.navCtrl.push(DetalheLojaPage);
  }

}
