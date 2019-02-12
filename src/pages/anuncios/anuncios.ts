import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroProdutoPage } from '../cadastro-produto/cadastro-produto';
import { AnuncioProvider } from '../../providers/anuncio/anuncio';


/**
 * Generated class for the AnunciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anuncios',
  templateUrl: 'anuncios.html',
  providers: [
    AnuncioProvider
  ]
})
export class AnunciosPage {
  public mensagem: string;
  public anuncios: Array<any>;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public anuncioProvider: AnuncioProvider) {
        
  }
  
  ionViewDidLoad() {
    /* this.anuncioProvider.getAnunciosLoja().subscribe(
      data =>{
        this.anuncios = (data as Array<any>);
        if(this.anuncios.length != 0) {
          this.mensagem = "Você ainda não possui algum anúncio";
        } else {
          
        }
        console.log(this.anuncios);
      }, error => {
        console.log(error);
      }
    ) */
    let anuncio = this.anuncioProvider.getStorage("anuncio");
    anuncio.then(
      data => {
        this.anuncios = (data as any);
        console.log(this.anuncios);
      });
    
  }

  cadastrarAnuncio() {
    this.navCtrl.push(CadastroProdutoPage);
  }

}
