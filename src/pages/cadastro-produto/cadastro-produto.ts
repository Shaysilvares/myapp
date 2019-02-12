import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CadastroAnuncioProvider } from '../../providers/cadastro-anuncio/cadastro-anuncio';
import { IAnuncio } from '../../../interfaces/IAnuncio';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the CadastroProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-produto',
  templateUrl: 'cadastro-produto.html',
  providers: [
    Camera,
    CadastroAnuncioProvider,
    LoginProvider
  ]
})
export class CadastroProdutoPage {
  img:string = "";
  anuncio:IAnuncio = {
    tipoveiculo:[],
    categoria:[],    
    titulo: '',
    descricao:'',
    imagem:'',
    valor: 0
    };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public camera: Camera,
    public cadastroAnuncioProvider: CadastroAnuncioProvider,
    public loginProvider: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroProdutoPage');
  }

  tirarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
    this.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
 
    });
  }

  cadastrar() {
    let usuario = localStorage.getItem('token');
    console.log(usuario);
    //this.anuncio.imagem = this.img;
    this.anuncio.token = usuario;    
    this.cadastroAnuncioProvider.setStorage("anuncio", this.anuncio);
  }
}
