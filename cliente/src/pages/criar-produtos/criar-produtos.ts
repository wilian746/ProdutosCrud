import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProdutosProvider } from '../../providers/produtos/produtos';

/**
 * Generated class for the CriarProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-produtos',
  templateUrl: 'criar-produtos.html',
})
export class CriarProdutosPage {
  private formProduto: FormGroup;
  public loading
  constructor(
    public fb: FormBuilder,
    public produtos: ProdutosProvider,
    public navParams: NavParams,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {

      this.formProduto = fb.group({
        nome: [null, [Validators.required]],
        marca: [null, [Validators.required]],
        valor: [null, [Validators.required]],
        quantidade: [null, [Validators.required]]
      })
  }

  ionViewDidLoad() {
  }

  submit(){
    this.showLoader();
    this.produtos.criarProdutos(this.formProduto.value).then((res)=>{
      this.loading.dismiss()
      this.mostraMenssagem(res.message, 2500)
      this.navCtrl.setRoot('ProdutosPage')
    })
  }
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    this.loading.present();
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
