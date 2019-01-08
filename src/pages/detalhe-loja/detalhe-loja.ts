import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LojaProvider } from '../../providers/loja/loja';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import {
  GoogleMaps,
  GoogleMap,
  Marker,
  Geocoder,
  GeocoderResult,
  GoogleMapOptions
} from '@ionic-native/google-maps';
import { HomePage } from '../home/home';


/**
 * Generated class for the DetalheLojaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-loja',
  templateUrl: 'detalhe-loja.html',
  providers: [
    LojaProvider,
    ProdutosProvider
  ]
})
export class DetalheLojaPage {
  public detalheLoja;
  public detalheLojaId;
  public produtosLoja;

    /*mapa */    
    map: GoogleMap;
    isRunning: boolean;
    endereco: string;
    loja_nome: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public lojaProvider: LojaProvider,
    public produtoProvider: ProdutosProvider) {
  }

  ionViewDidEnter() {
    this.detalheLojaId = this.navParams.get("id");
    this.lojaProvider.getLoja(this.detalheLojaId).subscribe(
      data => {
        let retorno = (data as any);
        this.detalheLoja = retorno;
        
        this.endereco = this.detalheLoja.endereco + ", " + this.detalheLoja.numero + " Belford Roxo - Rio de Janeiro, Brasil"
        this.loja_nome = this.detalheLoja.razao_social;
        
        this.loadMap(this.endereco, this.loja_nome);
      }, error => {
        console.log(error);
      }
    );

    this.produtoProvider.getProdutosLoja(this.detalheLojaId).subscribe(
      data => {
        let produtos = (data as any);
        this.produtosLoja = produtos;
      }, error => {
        console.log(error);
      }
    );
  }
  
  /* Mapa */
  loadMap(search_address: string, loja_nome: string) {
    console.log(search_address);
    // Address -> latitude,longitude
    Geocoder.geocode({
      "address": search_address
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

  close() {
    this.navCtrl.setRoot(HomePage);
  }
}
