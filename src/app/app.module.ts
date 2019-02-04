import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http'; 
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductPageModule } from '../pages/product/product.module';

import { HomePage } from '../pages/home/home';
import { ProductPage } from '../pages/product/product';
import { TabsPage } from '../pages/tabs/tabs';
import { CategoriasPage } from '../pages/categorias/categorias';
import { ProdutoCategoriasPage } from '../pages/produto-categorias/produto-categorias';
import { LoginPage } from '../pages/login/login';
import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';
import { LojaPage } from '../pages/loja/loja';
import { DetalheLojaPage } from '../pages/detalhe-loja/detalhe-loja';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { CadastroProdutoPage } from '../pages/cadastro-produto/cadastro-produto';
import { CadastroLojaPage } from '../pages/cadastro-loja/cadastro-loja';

import { ProdutosProvider } from '../providers/produtos/produtos';
import { CategoriasProvider } from '../providers/categorias/categorias';
import { LoginProvider } from '../providers/login/login';
import { CadastroUsuarioProvider } from '../providers/cadastro-usuario/cadastro-usuario';
import { LojaProvider } from '../providers/loja/loja';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SocialSharing } from '@ionic-native/social-sharing';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriasPage,
    TabsPage,
    ProdutoCategoriasPage,
    LoginPage,
    CadastroUsuarioPage,
    LojaPage,
    DetalheLojaPage,
    DashboardPage,
    CadastroProdutoPage,
    CadastroLojaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ProductPageModule,
    HttpModule, 
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductPage,
    CategoriasPage,
    TabsPage,
    ProdutoCategoriasPage,
    LoginPage,
    CadastroUsuarioPage,
    LojaPage,
    DetalheLojaPage,
    DashboardPage,
    CadastroProdutoPage,
    CadastroLojaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutosProvider,
    CategoriasProvider,
    LoginProvider,
    CadastroUsuarioProvider,
    LojaProvider,
    SocialSharing,
    Camera,
    GoogleMaps
  ]
})
export class AppModule {}
