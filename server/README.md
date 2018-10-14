SERVER
=====================
## Sobre o projeto

CRUD básico usando SWAGGER, JWT, MONGO E NODEJS.

## Instalação

Certifique-se que você tenha instalado o [NodeJs](https://nodejs.org/en/download/) em sua máquina.

Clone o projeto para sua máquina:
```bash
$ git clone <LINK DO REPOSITÓRIO>
```

Após ter o projeto em sua máquina, execute o comando abaixo no terminal para poder instalar as dependências necessárias:
```bash
$ npm install
```

O projeto faz uso do [nodemon](https://nodemon.io/) installe para poder usar-lo:
```bash
$ npm install -g nodemon
```

#### Testando o projeto

- Para rodar o servidor e testar a api, execute:
```bash
$ npm start
```

#### CONFIGURANDO CONEXÕES

- Configure a conexão com MongoDB no diretório: `/.env`

No projeto estou alocando o banco de dados Online no site [mlab.com](https://mlab.com/).
Mas essa variavel pode ser alterada para a url de seu banco local.

```bash
$ MONGODB_URI=mongodb:// << USUARIO >> : << SENHA >> @ << URL_DO_MLAB >>
```

- Configure a conexão com TOKEN no diretório: `/.env`

No projeto estou usando JSON Web Token [JWT](https://jwt.io/) para criptgrafia de senhas.

```bash
$ TOKEN_SECRET= << TOKEN >>
```

- Configure a conexão a porta para rodar seu servidor: `/.env`

No projeto estou usando a porta para rodar o server 8080.

```bash
$ PORT=8080
```

## Swagger


#### [Localhost](http://localhost:8080/api-docs/)

```bash
$ http://localhost:8080/api-docs/
```
#### [Web](http://18.231.124.41:8080/api-docs/)

```bash
$ http://18.231.124.41:8080/api-docs/
```

## Obrigado!