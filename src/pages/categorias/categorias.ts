import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CategoriasProvider } from '../../providers/categorias/categorias';
import { HomePage } from '../home/home';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { ProdutoCategoriasPage } from '../produto-categorias/produto-categorias';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
  providers: [
    CategoriasProvider,
    ProdutosProvider
  ]
})
export class CategoriasPage {
  private listaCategoria;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public categoriasProvider: CategoriasProvider,
    public produtoProvider: ProdutosProvider) {
  }

  ionViewDidLoad() {
    this.categoriasProvider.getCategorias().subscribe(
      data => {
        this.listaCategoria = (data as any);
      }, error => {
        console.log(error);
      }
    )
  }

  itemClicked(categorias) {
    this.navCtrl.push(ProdutoCategoriasPage, { id: categorias.id })
    console.log(categorias.id);
  }

  closeModalCategorias() {
    this.viewCtrl.dismiss();
  }

}
