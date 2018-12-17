import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DetalheLojaPage } from '../detalhe-loja/detalhe-loja';
import { LojaProvider } from '../../providers/loja/loja';

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
  providers: [
    LojaProvider
  ]
})
export class LojaPage {
  public listaLojas: any;

  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public lojaProvider: LojaProvider) {
  }

  ionViewDidLoad() {
    this.lojaProvider.getLojas().subscribe(
      data => {
        this.listaLojas = (data as any);
        console.log(this.listaLojas);
      }, error => {
        console.log(error);
      }
    );
  }

  closeModalLojas() {
    this.viewCtrl.dismiss();
  }

  goToDetalheLojaPage(loja) {    
    this.navCtrl.push(DetalheLojaPage, {id:loja.id});
  }

}
