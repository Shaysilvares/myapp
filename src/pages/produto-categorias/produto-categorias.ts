import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { ProductPage } from '../product/product';

/**
 * Generated class for the ProdutoCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto-categorias',
  templateUrl: 'produto-categorias.html',
  providers: [
    ProdutosProvider
  ]
})
export class ProdutoCategoriasPage {
  private categoriaId;
  public produtosCategoria = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoProvider: ProdutosProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoCategoriasPage');
  }

  ionViewDidEnter() {
    this.categoriaId = this.navParams.get("id");
    this.produtoProvider.getProdutosCategoria(this.categoriaId).subscribe(
      data => {
        let retorno = (data as Array<any>);
        this.produtosCategoria = retorno;
        console.log(this.produtosCategoria);
      }, error => {
        console.log(error);
      }
    )
  }

  goToProductPage(produto) {    
    this.navCtrl.push(ProductPage, { id: produto.id })
  }
}
