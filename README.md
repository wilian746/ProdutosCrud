Criar Ler Alterar Deletar Produtos
=====================
## Sobre o projeto

Basicamente este projeto está focado no desenvolvimento Front-End e Back-End para realizar um CRUD usando IONIC, NODEJS e MONGODB
## Instalação

Certifique-se que você tenha instalado o [NodeJs](https://nodejs.org/en/download/) em sua máquina.

Clone o projeto para sua máquina:
```bash
$ git clone <LINK DO REPOSITÓRIO>
```

Após ter o projeto em sua máquina, com o terminal aberto vá até a pasta cliente e execute o comando abaixo no terminal para poder instalar as dependências necessárias:
```bash
$ npm install
```
Logo em seguida, com o terminal aberto vá até a pasta server e execute o comando abaixo no terminal para poder instalar as dependências necessárias:
```bash
$ npm install
```

#### Testando o projeto

Para realizar estas ações deve-se ter instalado as dependências necessárias como foi dito anteriormente.

- Para rodar o servidor e testar a api, com o terminal aberto vá até a pasta server execute:
```bash 
$ npm start
```
- Para rodar o projeto ionic, com o terminal aberto vá até a pasta cliente execute:
```bash 
$ npm start
```

#### CONFIGURANDO CONEXÕES NO SERVIDOR

- Configure a conexão com MongoDB no diretório: `/.env`

No projeto estou alocando o banco de dados Online no site [mlab.com](https://mlab.com/).
Mas essa variavel pode ser alterada para a url de seu banco local.

```bash
$ MONGODB_URI=mongodb:// << USUARIO >> : << SENHA >> @ << URL_DO_MLAB >>
```

- Configure a conexão a porta para rodar seu servidor: `/.env`

No projeto estou usando a porta para rodar o server 8080.

```bash
$ PORT=8080
```

## Rotas

#### API

- Retornar API
 {GET} /api

 ```bash
Headers{
  Content-Type : application/json
}
 ```
 
 #### PRODUTOS
 
 - Retonar Todos Produtos
 {GET} /produto

 ```bash
Headers{
  Content-Type : application/json
}
 ```
 
- Retonar um produto
 {GET} /produto/{ID_PRODUTO}

 ```bash
Headers{
  Content-Type : application/json
}
 ```
 
  - Criar um produto
 {POST} /produto
 
 ```bash
Headers{
  Content-Type : application/json
}
 ```

 ```bash
Body{
  nome:{
    type: String,
    required: true
  },
  marca:{
    type: String,
    required: true
  },
  valor:{
    type: Number,
    required: true
  },
  quantidade:{
    type: Number,
    required: true
  },
 }
 ```
 
 - Alterar um produto
 {PUT} /produto/{ID_PRODUTO}

 ```bash
Headers{
  Content-Type : application/json
}
 ```
 
 ```bash
Body{
  nome:{
    type: String,
    required: true
  },
  marca:{
    type: String,
    required: true
  },
  valor:{
    type: Number,
    required: true
  },
  quantidade:{
    type: Number,
    required: true
  },
 }
 ```
 
  - Deletar um produto
 {DELETE} /produto/{ID_PRODUTO}

 ```bash
Headers{
  Content-Type : application/json
}
 ```
