import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CadastroUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-user',
  templateUrl: 'cadastro-user.html',
})
export class CadastroUserPage {
  public formRegister: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public userProvider: UserProvider,
    public toastCtrl: ToastController) {
    this.formRegister = fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUserPage');
  }

  submit () {
    this.userProvider.createUser(this.formRegister.value)
      .then((res) => {
        this.showToast('Usuário cadastrado com sucesso!', 1500)
        this.navCtrl.setRoot(LoginPage)
      })
      .catch((err) => {
        this.showToast('Falha ao conectar com o servidor!', 2500)
        console.error(err)
      })
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
}
