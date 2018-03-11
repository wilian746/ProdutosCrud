import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { AlterarProdutosComponent } from '../../components/alterar-produtos/alterar-produtos';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  public produtos: any = [];
  public resposta: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public produtosProvider: ProdutosProvider,
    public modal: ModalController,) {
  }

  ionViewDidLoad() {
    this.getAllProdutos()
  }

  getAllProdutos() {
    this.produtosProvider.getProdutos().then((result) => {
      this.produtos = result
    })
  }
  editar(id) {
    const AlterarProdutosModal = this.modal.create(AlterarProdutosComponent, {id: id});
    AlterarProdutosModal.present();
  }

  deletar(id) {
    this.produtosProvider.deleteProdutos(id).then(() => {
      this.mostraMenssagem('Produto excluído com sucesso', 3000)
      setTimeout(() => {
        this.getAllProdutos()
      }, 200);
    })
  }

  incluir() {
    this.navCtrl.push('CriarProdutosPage')
  }

  mostraMenssagem(message: string, duration?: number) {
    let menssagem = this.toastCtrl.create({
      message: message,
      duration: duration,
      showCloseButton: true,
      closeButtonText: "Ok"
    });
    menssagem.present();
  }
}
