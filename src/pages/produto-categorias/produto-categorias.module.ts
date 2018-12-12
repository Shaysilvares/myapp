import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutoCategoriasPage } from './produto-categorias';

@NgModule({
  declarations: [
    ProdutoCategoriasPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutoCategoriasPage),
  ],
})
export class ProdutoCategoriasPageModule {}
