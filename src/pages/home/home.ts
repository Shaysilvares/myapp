import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductPage } from "../product/product";
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ProdutosProvider
  ]
})
export class HomePage {
  public lista_produtos = new Array<any>();  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private produtosProvider: ProdutosProvider) {

  }

  goToProductPage(produto) {    
    this.navCtrl.push(ProductPage, { id: produto.id })
  }
  
  goToLoginPage() {    
    this.navCtrl.push(LoginPage)
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
