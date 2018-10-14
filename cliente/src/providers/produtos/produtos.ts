import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class ProdutosProvider {

  private token: any;
  constructor(public http: Http, public storage: Storage) {
  }

  getProdutos(){
    return new Promise((resolve, reject) => {
      this.storage.get('token').then((value) => {
        this.token = value;
        let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Authorization', this.token);

        console.log(headers)
        this.http.get('http://localhost:8080/product/', {headers: headers})
          .map(res=> res.json())
          .subscribe(data => {
            resolve(data);
          }, (err) => {
            reject(err);
          });
      });
    });
  }

  deleteProdutos(id){
    return new Promise((resolve, reject) => {
      this.storage.get('token').then((value) => {
				this.token = value;
        let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Authorization', this.token);

        console.log(headers)

        this.http.delete('http://localhost:8080/product/' + id, {headers: headers})
          .map(res=> res.json())
          .subscribe(data => {
            resolve(data);
          }, (err) => {
            reject(err);
          });
        });
    });
  }

  getOneProduto(id){
    return new Promise((resolve, reject) => {
      this.storage.get('token').then((value) => {
				this.token = value;
        let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Authorization', this.token);

        console.log(headers)

        this.http.get('http://localhost:8080/product/' + id, {headers: headers})
          .map(res=> res.json())
          .subscribe(data => {
            resolve(data);
          }, (err) => {
            reject(err);
          });
        });
    });
  }

  alterarProdutos(id, credential){
    return new Promise((resolve, reject) => {
      this.storage.get('token').then((value) => {
				this.token = value;
        let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Authorization', this.token);

        let data = {
          'name': credential.name,
          'quantity': parseInt(credential.quantity),
          'value': parseFloat(credential.value),
          'validity': credential.validity
        }

        console.log("TESTE", data)

        this.http.put('http://localhost:8080/product/' + id, data, {headers: headers})
          .map(res=> res.json())
          .subscribe(data => {
            resolve(data);
          }, (err) => {
            reject(err);
          });
        });
    });
  }

  criarProdutos(credential){
    return new Promise((resolve, reject) => {
      this.storage.get('token').then((value) => {
				this.token = value;
        let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Authorization', this.token);

        let data = {
          'name': credential.name,
          'quantity': parseInt(credential.quantity),
          'value': parseFloat(credential.value),
          'validity': credential.validity
        }

        console.log("TESTE", data)
        this.http.post('http://localhost:8080/product/', data, {headers: headers})
          .map(res=> res.json())
          .subscribe(data => {
            resolve(data);
          }, (err) => {
            reject(err);
          });
        });
    });
  }

}
