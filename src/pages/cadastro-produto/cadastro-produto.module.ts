import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroProdutoPage } from './cadastro-produto';

@NgModule({
  declarations: [
    CadastroProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroProdutoPage),
  ],
})
export class CadastroProdutoPageModule {}
