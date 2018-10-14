import { Component } from '@angular/core';
import { ViewController, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProdutosProvider } from '../../providers/produtos/produtos';
/**
 * Generated class for the AlterarProdutosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'alterar-produtos',
  templateUrl: 'alterar-produtos.html'
})
export class AlterarProdutosComponent {
  private formEditar: FormGroup;
  private idProduto: any;
  public loading: any;
  public resultGetOne: any;
  public resultEdit: any;
  constructor(
    public view: ViewController,
    public fb: FormBuilder,
    public produtos: ProdutosProvider,
    public navParams: NavParams,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
    this.formEditar = fb.group({
      name: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      value: [null, [Validators.required]],
      validity: [null, [Validators.required]]
    })
  }
  ionViewDidLoad() {
    this.idProduto = this.navParams.get('id')
    this.getOneProduto()
  }
  getOneProduto(){
    this.showLoader()
    this.produtos.getOneProduto(this.idProduto).then((res)=>{
      this.resultGetOne = res
      console.log(this.resultGetOne)
      this.formEditar.setValue({
        name: this.resultGetOne.product.name,
        quantity: this.resultGetOne.product.quantity,
        value: this.resultGetOne.product.value,
        validity: this.resultGetOne.product.validity
      })
      this.loading.dismiss()
    })
  }
  concluir(){
    this.showLoader();
    this.produtos.alterarProdutos(this.idProduto, this.formEditar.value).then((res)=>{
      this.resultEdit = res
      this.loading.dismiss()
      this.mostraMenssagem(this.resultEdit.message, 2500)
      this.navCtrl.setRoot('ProdutosPage')
    })
  }
  closeModal(){
    this.view.dismiss();
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
