import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { SocialSharing } from '@ionic-native/social-sharing';
import {
  GoogleMaps,
  GoogleMap,
  Marker,
  Geocoder,
  GeocoderResult
} from '@ionic-native/google-maps';

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
    ProdutosProvider,
    SocialSharing
  ]

})
export class ProductPage {
  private detalheProdutoId;
  public detalheProduto;

  /* social share */
  private mensagem: string;
  private imagem: string;
  private url: string;

  /*mapa */
  search_address: any;
  map: GoogleMap;
  isRunning: boolean;
  endereco: string;
  loja_nome: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public produtoProvider: ProdutosProvider,
    public socialSharing: SocialSharing) {
    this.imagem = "https://dev.autodicas.com/img/produtos/2/tmpphpe502zg//_img_81043.jpeg";
    this.url = "https:autodicas.com";

  }

  ionViewDidEnter() {
    this.detalheProdutoId = this.navParams.get("id");
    this.produtoProvider.getDetalheProdutos(this.detalheProdutoId).subscribe(
      (data: any) => {        
        let retorno = (data as any);
        this.detalheProduto = retorno;

        /* mapa */
        data.loja.forEach(element => {
          this.endereco = element.endereco + ", " + element.numero + " Belford Roxo - Rio de Janeiro, Brasil"
          this.loja_nome = element.razao_social;
        });        
        this.loadMap(this.endereco, this.loja_nome);
        this.map = GoogleMaps.create('map_canvas');
      }, error => {
        console.log(error);
      }
    )
  }

  /* compartilhamento via social media */
  whatsappShare() {
    this.socialSharing.shareViaWhatsApp(this.detalheProduto.titulo, this.detalheProduto.imagem, this.url).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });
  }

  /* Mapa */
  loadMap(endereco: string, loja_nome: string) {
    console.log(endereco);
    // Address -> latitude,longitude
    Geocoder.geocode({
      "address": endereco
    }).then((results: GeocoderResult[]) => {
      console.log(results);

      if (!results.length) {
        this.isRunning = false;
        return null;
      }

      // Add a marker
      let marker: Marker = this.map.addMarkerSync({
        'position': results[0].position,
        'title': loja_nome
      });

      // Move to the position
      this.map.animateCamera({
        'target': marker.getPosition(),
        'zoom': 17
      }).then(() => {
        marker.showInfoWindow();
        this.isRunning = false;
      }); 
    });
  }

}