import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroLojaPage } from './cadastro-loja';

@NgModule({
  declarations: [
    CadastroLojaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroLojaPage),
  ],
})
export class CadastroLojaPageModule {}
