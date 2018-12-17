import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LojaProvider } from '../../providers/loja/loja';

/**
 * Generated class for the DetalheLojaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-loja',
  templateUrl: 'detalhe-loja.html',
  providers: [
    LojaProvider
  ]
})
export class DetalheLojaPage {
  public detalheLoja;
  public detalheLojaId;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public lojaProvider: LojaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheLojaPage');
  }

  ionViewDidEnter() {
    this.detalheLojaId = this.navParams.get("id");
    this.lojaProvider.getProdutoLojas(this.detalheLojaId).subscribe(
      data => {
        let retorno = (data as any);
        this.detalheLoja = retorno;
        console.log(this.detalheLoja);
      }, error => {
        console.log(error);
      }
    )
  }

}
