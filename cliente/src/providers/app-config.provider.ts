export class AppConfig {
  private url: string;
  public produtos: string;

  constructor() {
      this.url = 'http://localhost:8080/';
      //this.url = 'http://192.168.0.108:8080'
      this.produtos = this.url + 'produto/';
  }
}
