import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { SocialSharing } from '@ionic-native/social-sharing';
import {
  GoogleMaps,
  GoogleMap,
  Marker,
  Geocoder,
  GeocoderResult,
  GoogleMapOptions,
  GoogleMapsMapTypeId
} from '@ionic-native/google-maps';
import { HomePage } from '../home/home';

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
      }, error => {
        console.log(error);
      }
    )
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

      let mapOptions: GoogleMapOptions = {
        camera: {
          target: results[0].position,
          zoom: 16
        },
        mapType: GoogleMapsMapTypeId.NORMAL,
        controls: {
          compass: true,
          myLocationButton: true,
          indoorPicker: true,
          zoom: true
        }
      };
      this.map = GoogleMaps.create('map_canvas', mapOptions);

      // Add a marker
      let marker: Marker = this.map.addMarkerSync({
        'position': results[0].position,
        'title': loja_nome
      });
    });
  }

  /* compartilhamento via social media */
  whatsappShare() {
    this.socialSharing.shareViaWhatsApp("teste", this.imagem, this.url).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });
  }

  close() {
    this.navCtrl.setRoot(HomePage);
  }
}