import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { SocialSharing } from '@ionic-native/social-sharing';

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

  private mensagem: string;
  private imagem: string;
  private url: string;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoProvider: ProdutosProvider,
    public socialSharing: SocialSharing) {
      
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

  /* compartilhamento via social media */
  whatsappShare() {
    this.socialSharing.share("teste", null, "teste", 'https:autodicas.com').then(()=> {
      console.log("sucesso");
    }).catch(()=>{
      console.log("error");
    });
  }

}