
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


@Injectable()
export class LoginProvider {

  constructor(public http: Http, public storage: Storage) {
  }

  login(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://localhost:8080/login/', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          let data = res.json();
          this.storage.set('token', data.token);
          this.storage.set('profile', data.user);
          resolve(data.user);
        }, (err) => {
          reject(err);
        });
    });
  }

}
