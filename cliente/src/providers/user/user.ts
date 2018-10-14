import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

  constructor(public http: Http) {
  }

  createUser(credential){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
        headers.append('Content-Type', 'application/json');

      this.http.post('http://localhost:8080/user/', JSON.stringify(credential), {headers: headers})
        .map(res=> res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }
}
