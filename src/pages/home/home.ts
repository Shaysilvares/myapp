import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductPage } from "../product/product";
import { ProdutosProvider } from '../../providers/produtos/produtos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ProdutosProvider
  ]
})
export class HomePage {
  public objeto_home = {
    titulo: "Bateria Moura",
    preco: "R$ 100,00",
    vendedor: "WR autopeças"
  }

  public lista_produtos = new Array<any>();  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private produtosProvider: ProdutosProvider) {

  }

  goToProductPage(produto) {    
    this.navCtrl.push(ProductPage, { id: produto.id })
  }

  ionViewDidLoad() {
    this.produtosProvider.getProdutos().subscribe(
      data =>{
        this.lista_produtos = (data as Array<any>);
        console.log(this.lista_produtos);
      }, error => {
        console.log(error);
      }
    )
  }

}
