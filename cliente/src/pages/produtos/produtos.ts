import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, LoadingController } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { AlterarProdutosComponent } from '../../components/alterar-produtos/alterar-produtos';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import Moment from 'moment'

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  public produtos: any = [];
  public resposta: any = {};
  public loading
  public moment: any = Moment;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController,
    public produtosProvider: ProdutosProvider,
    public loadingCtrl: LoadingController,
    public modal: ModalController,) {
  }

  ionViewDidLoad() {
    this.getAllProdutos()
    console.log('BEM VINDO AOS PRODUTOS')
  }

  parseFloatList (item) {
    return parseFloat(item).toFixed(2)
  }

  getAllProdutos() {
    this.showLoader()
    this.produtosProvider.getProdutos()
      .then((result) => {
        this.loading.dismiss()
        let data: any = result
        this.produtos = data.product
        console.log(this.produtos)
      })
      .catch((err) => {
        this.loading.dismiss()
        if (err.status === 401) {
          this.navCtrl.setRoot(LoginPage)
          this.showToast('Token expirou faça login novamente!', 2500)
        } else if (err.status === 404) {
          this.produtos = []
          this.showToast('Nenhum produto encontrado para a pesquisa!', 2500)
        } else {
          this.showToast('Falha ao conectar com o servidor!', 2500)
        }
      })
  }
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    this.loading.present();
  }

  logout () {
    this.storage.set('token', '')

    this.navCtrl.setRoot(LoginPage)
  }
  editar(id) {
    const AlterarProdutosModal = this.modal.create(AlterarProdutosComponent, {id: id});
    AlterarProdutosModal.present();
  }

  showToast(message: string, duration?: number) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      showCloseButton: true,
      closeButtonText: "OK"
    });
    toast.present();
  }

  deletar(id) {
    this.produtosProvider.deleteProdutos(id)
      .then(() => {
        this.showLoader()
        this.mostraMenssagem('Produto excluído com sucesso', 1000)
        setTimeout(() => {
          this.loading.dismiss()
          this.getAllProdutos()
        }, 1000);
      })
      .catch((err) => {
        this.showToast('Falha ao conectar com o servidor!', 2500)
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
