import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides = [
    {
      title: "Bem Vindo ao Curso",
      description: "A documentação do Ionic apresenta uma série de componentes úteis.",
      image: "assets/imgs/ica-slidebox-img-1.png",
    },
    {
      title: "O que é Ionic?",
      description: "Ionic Framework é um SDK de código aberto que permite aos desenvolvedores criar aplicativos móveis de alta qualidade com tecnologias da web como HTML, CSS, JAVASCRIPT.",
      image: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "O que é Ionic Cloud?",
      description: "A <b> Ionic Cloud </b> é uma plataforma em nuvem para gerenciar e dimensionar aplicativos Ionic com serviços integrados, como notificações push, compilações nativas, autenticação de usuário e atualizações em tempo real.",
      image: "assets/imgs/ica-slidebox-img-3.png",
    }
  ]
  constructor(public navCtrl: NavController) {

  }

  IrParaListagemProdutos(){
    this.navCtrl.push('ProdutosPage')
  }

}
