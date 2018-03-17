import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdutosProvider {

  constructor(public http: Http) {
  }

  getProdutos(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
        headers.append('Content-Type', 'application/json');

      this.http.get('http://54.207.115.112:8080/produto/', {headers: headers})
        .map(res=> res.json())
        .subscribe(data => {
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

      this.http.delete('http://54.207.115.112:8080/produto/' + id, {headers: headers})
        .map(res=> res.json())
        .subscribe(data => {
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

      this.http.get('http://54.207.115.112:8080/produto/' + id, {headers: headers})
        .map(res=> res.json())
        .subscribe(data => {
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

      this.http.put('http://54.207.115.112:8080/produto/' + id, JSON.stringify(credential), {headers: headers})
        .map(res=> res.json())
        .subscribe(data => {
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

      this.http.post('http://54.207.115.112:8080/produto/', JSON.stringify(credential), {headers: headers})
        .map(res=> res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

}
