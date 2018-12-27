import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http'; 
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductPageModule } from '../pages/product/product.module';
import { ProdutosProvider } from '../providers/produtos/produtos';
import { ProductPage } from '../pages/product/product';
import { TabsPage } from '../pages/tabs/tabs';
import { CategoriasPage } from '../pages/categorias/categorias';
import { CategoriasProvider } from '../providers/categorias/categorias';
import { ProdutoCategoriasPage } from '../pages/produto-categorias/produto-categorias';
import { LoginPage } from '../pages/login/login';
import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';
import { LoginProvider } from '../providers/login/login';
import { CadastroUsuarioProvider } from '../providers/cadastro-usuario/cadastro-usuario';
import { LojaPage } from '../pages/loja/loja';
import { DetalheLojaPage } from '../pages/detalhe-loja/detalhe-loja';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LojaProvider } from '../providers/loja/loja';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CadastroProdutoPage } from '../pages/cadastro-produto/cadastro-produto';




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
    CadastroProdutoPage
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
    CadastroProdutoPage
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
    Camera
  ]
})
export class AppModule {}
