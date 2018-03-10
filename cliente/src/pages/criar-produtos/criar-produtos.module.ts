import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarProdutosPage } from './criar-produtos';

@NgModule({
  declarations: [
    CriarProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarProdutosPage),
  ],
})
export class CriarProdutosPageModule {}
