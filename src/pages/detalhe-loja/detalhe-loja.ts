import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LojaProvider } from '../../providers/loja/loja';
import { ProdutosProvider } from '../../providers/produtos/produtos';

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
    LojaProvider,
    ProdutosProvider
  ]
})
export class DetalheLojaPage {
  public detalheLoja;
  public detalheLojaId;
  public produtosLoja;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public lojaProvider: LojaProvider,
    public produtoProvider: ProdutosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheLojaPage');
  }

  ionViewDidEnter() {
    this.detalheLojaId = this.navParams.get("id");
    this.lojaProvider.getLoja(this.detalheLojaId).subscribe(
      data => {
        let retorno = (data as any);
        this.detalheLoja = retorno;
      }, error => {
        console.log(error);
      }
    );

    this.produtoProvider.getProdutosLoja(this.detalheLojaId).subscribe(
      data => {
        let produtos = (data as any);
        this.produtosLoja = produtos;
      }, error => {
        console.log(error);
      }
    );
  } 

}
