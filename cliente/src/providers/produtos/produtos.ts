import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app-config.provider';

@Injectable()
export class ProdutosProvider {

  constructor(public http: Http, public appConfig: AppConfig) {
  }

  getProdutos(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
        headers.append('Content-Type', 'application/json');

      this.http.get(this.appConfig.produtos, {headers: headers})
        .subscribe(res => {
          let data = res.json();
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteProdutos(id){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
        headers.append('Content-Type', 'application/json');

      this.http.delete(this.appConfig.produtos + id, {headers: headers})
        .subscribe(res => {
          let data = res.json();
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  getOneProduto(id){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
        headers.append('Content-Type', 'application/json');

      this.http.get(this.appConfig.produtos + id, {headers: headers})
        .subscribe(res => {
          let data = res.json();
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  alterarProdutos(id, credential){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
        headers.append('Content-Type', 'application/json');

      this.http.put(this.appConfig.produtos + id, JSON.stringify(credential), {headers: headers})
        .subscribe(res => {
          let data = res.json();
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  criarProdutos(credential){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
        headers.append('Content-Type', 'application/json');

      this.http.post(this.appConfig.produtos, JSON.stringify(credential), {headers: headers})
        .subscribe(res => {
          let data = res.json();
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

}
