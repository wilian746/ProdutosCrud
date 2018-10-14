import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroUserPage } from './cadastro-user';

@NgModule({
  declarations: [
    CadastroUserPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroUserPage),
  ],
})
export class CadastroUserPageModule {}
