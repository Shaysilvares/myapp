import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { ProductPage } from "../product/product";
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { LoginPage } from '../login/login';
import { CategoriasPage } from '../categorias/categorias';
import { LojaPage } from '../loja/loja';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ProdutosProvider
  ]
})
export class HomePage {
  public lista_produtos = new Array<any>(); 
  public isSearchbarOpened = false; 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    private produtosProvider: ProdutosProvider) {
      this.initializeItems();
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

  /* pages */
  goToProductPage(produto) {    
    this.navCtrl.push(ProductPage, { id: produto.id })
  }  
  goToLoginPage() {    
    this.navCtrl.push(LoginPage)
  }
  
  /* segment */
  openCategorias() {
    this.navCtrl.push(CategoriasPage);
  }
  openLojas() {
    this.navCtrl.push(LojaPage);
  }

  /* search */
  initializeItems() {
    this.lista_produtos;
  }
  getItems(ev: any) {
    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.lista_produtos = this.lista_produtos.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  /* Infinite Scroll */
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.produtosProvider.getProdutos().subscribe(
        data =>{
          this.lista_produtos = this.lista_produtos.concat((data as Array<any>));
          infiniteScroll.complete();
      });
    }, 500);    
  }
}
