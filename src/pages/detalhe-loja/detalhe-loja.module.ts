import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheLojaPage } from './detalhe-loja';

@NgModule({
  declarations: [
    DetalheLojaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheLojaPage),
  ],
})
export class DetalheLojaPageModule {}
