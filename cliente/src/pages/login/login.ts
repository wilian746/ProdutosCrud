import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public formLogin: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public loginProvider: LoginProvider,
    public toastCtrl: ToastController) {
    this.formLogin = fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login () {
    this.loginProvider.login(this.formLogin.value)
      .then((res) => {
        this.navCtrl.setRoot('ProdutosPage')
        this.showToast('Bem vindo!', 1500)
      })
      .catch((err) => {
        this.showToast('Falha ao conectar com o servidor!', 2500)
        console.error(err)
      })
  }

  register () {
    this.navCtrl.push('CadastroUserPage')
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
