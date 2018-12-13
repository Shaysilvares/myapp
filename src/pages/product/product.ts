import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
  providers: [
    ProdutosProvider
  ]
  
})
export class ProductPage {
  private detalheProdutoId;
  public detalheProduto;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoProvider: ProdutosProvider) {
      
  }

  ionViewDidEnter() {
    this.detalheProdutoId = this.navParams.get("id");
    this.produtoProvider.getDetalheProdutos(this.detalheProdutoId).subscribe(
      data => {
        let retorno = (data as any);
        this.detalheProduto = retorno;
        console.log(this.detalheProduto);
      }, error => {
        console.log(error);
      }
    )
  }

}