import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http'; 

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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriasPage,
    TabsPage,
    ProdutoCategoriasPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ProductPageModule,
    HttpModule, 
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductPage,
    CategoriasPage,
    TabsPage,
    ProdutoCategoriasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutosProvider,
    CategoriasProvider
  ]
})
export class AppModule {}
