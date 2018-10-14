import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { ProdutosProvider } from '../providers/produtos/produtos';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AlterarProdutosComponent } from '../components/alterar-produtos/alterar-produtos';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login';
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AlterarProdutosComponent
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AlterarProdutosComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutosProvider,
    LoginProvider,
    UserProvider
  ]
})
export class AppModule {}
