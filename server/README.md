SAVE SERVICE SERVER
=====================
## Sobre o projeto

Percebe-se que os Prestadores de Serviço (Eletricista, Encanadores, Ajudantes, Professores, Artistas, dentre outros...) tem uma dificuldade muito grande em conseguir ter seu nome conhecido no mercado principalmente no início, talvez pela falta de experiência ou de indicações, já em outros casos, a concorrência é o maior problema.
Assim, o aplicativo tem o objetivo de ajudar as pessoas a mostrar seu diferencial, seja pontualidade, empenho, agilidade e varias outras qualidades que esse profissional tem, mas não consegue mostrar no mercado tradicional.
Criando assim uma forma rápida para pesquisa de prestadores de serviço e suas qualidades, requisitar o prestador de serviço e saber quando ele irá chegar, poder conversar com o prestador de serviço para saber o preço médio do serviço prestado, e várias outras funções que contem no aplicativo.

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

No projeto estou usando a porta para rodar o server 9000.

```bash
$ PORT=9000
```

No projeto está sendo rodado a porta 3000 junto para fazer toda a parte de Socket.io

```bash
$ PORT_SOCKET=3000
```

## Swagger


#### [Localhost](http://localhost:9000/api-docs/)

```bash
$ http://localhost:9000/api-docs/
```
#### [Web](http://18.231.124.41:9000/api-docs/)

```bash
$ http://18.231.124.41:9000/api-docs/
```
## Rotas

#### Usuário

- Retornar todos os Usuários 
 {GET} /api/v1/user

 ```bash
Headers{
        Content-Type : application/x-www-form-urlencoded
        Authorization : {TOKEN_USER_LOGGED}
  }
 ```

 
- Retornar um Usuário específico
 {GET} /api/v1/user/{ID_USER}

 ```bash
 Headers{
        Content-Type : application/x-www-form-urlencoded
        Authorization : {TOKEN_USER_LOGGED}
  }
 ``` 
 
- Retornar um Usuário_Prestador específico
 {GET} /api/v1/user/userPrestador/{ID_USER}

 ```bash
 Headers{
        Content-Type : application/x-www-form-urlencoded
        Authorization : {TOKEN_USER_LOGGED}
  }
 ``` 
 
- Deletar usuário
 {DELETE} /api/v1/user/{ID_USER}

 ```bash
 Headers{
        Content-Type : application/x-www-form-urlencoded
        Authorization : {TOKEN_USER_LOGGED}
  }
 ``` 
 
- Atualizar Usuário


 ```bash
  Headers{
        Content-Type : application/x-www-form-urlencoded
        Authorization : {TOKEN_USER_LOGGED}
  }
 ``` 

 ```bash
 Body{
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
 }
 ```
 
- Atualizar Usuário com Foto
 {PUT} /api/v1/user/foto/{ID_USER}

 ```bash
 Headers{
        Content-Type : application/x-www-form-urlencoded
        Authorization : {TOKEN_USER_LOGGED}
 }
 ```
 
```bash
 Body{
    nome:{
        type: String,
        required: true
    }
    email:{
        type: String,
        required: true
    }
    foto:{
        path:{
            type: String
        },
        folderName:{
            type: String
        },
        fileName:{
            type: String
        }
    }
 }
```
 
- Enviar Foto
 {POST} /api/v1/user/sendImage
 
 ```bash
  Body{
    profilePicture : FILE
 }
 ```
 
- Enviar várias Fotos
 {POST} /api/v1/user/sendManyImage

 ```bash
  Body{
    pictures : FILES
 }
 ``` 
 
- Retornar uma foto
 {GET} /api/v1/user/image/{FOLDER_NAME}/{FILE_NAME}

 ```bash
 
 ``` 

#### AUTH

- Registro de Usuário
{POST} /api/v1/auth/registroDeUsuario

```bash 
 Body{
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
        min: 6
    },
    foto: {
        path: {
            type: String
        },
        fileName: {
            type: String
        },
        folderName: {
            type: String
        }
    }
  }
```

- Realizar Login
{POST} /api/v1/auth/login

```bash
 Body{
     email: {
         type: String,
         required: true,
         unique: true
     },
     password: {
         type: String,
         required: true,
         min: 6
     }
 }
```

#### Prestador

- Registro de Prestador
{POST} /api/v1/produto/registroDeProduto

 ```bash
 Headers{
        Content-Type : application/x-www-form-urlencoded
        Authorization : {TOKEN_USER_LOGGED}
 }
 ```
 
```bash
 Body{
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String
        required: true
    }
    dataDeNascimento:{
        type: String,
        required: true
    },
    genero:{
        type: String,
        required: true
    },
    webSite: {
        type: String
    },
    redeSocial: {
        type: String
    },
    cursos:{
        type: String
    },
    areaProfissao: {
        type: String,
        required: true
    },
    profissao:{
        type: String,
        required: true
    },
    tipoProfissao:{
        type: String
    },
    isPrestador:{
        type: Boolean
    },
    visualizacao:{
        type: Number
    },
    like_voted:{
        type: mongoose.Schema.ObjectId
    },
    foto1: {
        path: {
            type: String
        },
        fileName: {
            type: String
        },
        folderName: {
            type: String
        }
    },
    foto2: {
        path: {
            type: String
        },
        fileName: {
            type: String
        },
        folderName: {
            type: String
        }
    },
    foto3: {
        path: {
            type: String
        },
        fileName: {
            type: String
        },
        folderName: {
            type: String
        }
    }
    id_user: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
 }
```

- Retornar todos os UserPrestadores
{GET} /api/v1/prestador/userPrestador

```bash
 Headers{
        Content-Type : application/x-www-form-urlencoded
        Authorization : {TOKEN_USER_LOGGED}
 }
 ```

- Retornar todos os Prestadores
{GET} /api/v1/prestador/

```bash
 Headers{
        Content-Type : application/x-www-form-urlencoded
        Authorization : {TOKEN_USER_LOGGED}
 }
 ```

- Atualizar Prestador
{PUT} /api/v1/prestador/{ID_PRESTADOR}

 ```bash
 Headers{
        Content-Type : application/x-www-form-urlencoded
        Authorization : {TOKEN_USER_LOGGED}
 }
 ```
 
```bash
 Body{
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    }
    dataDeNascimento:{
        type: String,
        required: true
    },
    genero:{
        type: String,
        required: true
    },
    webSite: {
        type: String
    },
    redeSocial: {
        type: String
    },
    cursos:{
        type: String
    },
    areaProfissao: {
        type: String,
        required: true
    },
    profissao:{
        type: String,
        required: true
    },
    tipoProfissao:{
        type: String
    },
    isPrestador:{
        type: Boolean
    },
    visualizacao:{
        type: Number
    },
    like_voted:{
        type: mongoose.Schema.ObjectId
    },
    foto1: {
        path: {
            type: String
        },
        fileName: {
            type: String
        },
        folderName: {
            type: String
        }
    },
    foto2: {
        path: {
            type: String
        },
        fileName: {
            type: String
        },
        folderName: {
            type: String
        }
    },
    foto3: {
        path: {
            type: String
        },
        fileName: {
            type: String
        },
        folderName: {
            type: String
        }
    }
 }
```

- Atualizar Prestador Simples 
{PUT} /api/v1/prestador/simples/{ID_PRESTADOR}

```bash
 Headers{
    Content-Type : application/x-www-form-urlencoded
    Authorization : {TOKEN_USER_LOGGED}
 }
 ```
 
 ```bash
 Body{
    Body{
    endereco: {
        type: String
    },
    telefone: {
        type: String
    }
    dataDeNascimento:{
        type: String
    },
    genero:{
        type: String
    },
    webSite: {
        type: String
    },
    redeSocial: {
        type: String
    },
    cursos:{
        type: String
    },
    areaProfissao: {
        type: String
    },
    profissao:{
        type: String
    },
    tipoProfissao:{
        type: String
    },
    isPrestador:{
        type: Boolean
    },
    visualizacao:{
        type: Number
    },
    like_voted:{
        type: mongoose.Schema.ObjectId
    },
    foto1: {
        path: {
            type: String
        },
        fileName: {
            type: String
        },
        folderName: {
            type: String
        }
    },
    foto2: {
        path: {
            type: String
        },
        fileName: {
            type: String
        },
        folderName: {
            type: String
        }
    },
    foto3: {
        path: {
            type: String
        },
        fileName: {
            type: String
        },
        folderName: {
            type: String
        }
    }
 }
 ```
 
 - Deletar Prestador
{DELETE} /api/v1/prestador/{ID_PRESTADOR}

 ```bash
 Headers{
        Content-Type : application/x-www-form-urlencoded
        Authorization : {TOKEN_USER_LOGGED}
 }
 ```

 - Deletar Foto
{POST} /api/v1/prestador/deletarFoto

 ```bash
 Headers{
        Content-Type : application/x-www-form-urlencoded
        Authorization : {TOKEN_USER_LOGGED}
 }
 ```
 
  ```bash
 Body{
    foto:{
        fileName: {
            type: String
        },
        folderName: {
            type: String
        }
    }
 }
 ```
 
#### Favorito
- Retornar todos os Favoritos do Usuário Logado 
 {GET} /api/v1/favorito/{ID_USERLOGGED}

 ```bash
Headers{
    Content-Type : application/x-www-form-urlencoded
    Authorization : {TOKEN_USER_LOGGED}
  }
 ```
 
- Retornar um Favorito específico 
 {GET} /api/v1/favorito/oneFavorito/{ID_USER}/{ID_PRESTADOR}

 ```bash
Headers{
    Content-Type : application/x-www-form-urlencoded
    Authorization : {TOKEN_USER_LOGGED}
  }
 ```
 
 - Registrar um Favorito
 {POST} /api/v1/favorito/

 ```bash
Headers{
    Content-Type : application/x-www-form-urlencoded
    Authorization : {TOKEN_USER_LOGGED}
  }
 ```
 
  ```bash
 Body{
    id_user:{
        type: mongoose.Schema.ObjectId,
        required: true
    },
    id_prestador:{
        type: mongoose.Schema.ObjectId,
        required: true
    },
    id_userLogged:{
        type: mongoose.Schema.ObjectId,
        required: true
    },
    isFavorito:{
        type: Boolean,
        required: true
    }
 }
 ```
 
 - Deletar Favorito 
 {DELETE} /api/v1/favorito/{ID_USER}/{ID_PRESTADOR}/{ID_USER_LOGGED}

 ```bash
Headers{
    Content-Type : application/x-www-form-urlencoded
    Authorization : {TOKEN_USER_LOGGED}
  }
 ```

#### Histórico de chamada
- Retornar todos Histórico de chamada
{GET} /api/v1/historyCall/

 ```bash
Headers{
    Content-Type : application/x-www-form-urlencoded
    Authorization : {TOKEN_USER_LOGGED}
  }
 ```

- Retornar um Histórico de chamada
{GET} /api/v1/historyCall//oneHistory/{ID_USER}/{ID_PRESTADOR}

 ```bash
Headers{
    Content-Type : application/x-www-form-urlencoded
    Authorization : {TOKEN_USER_LOGGED}
  }
 ```

 
  - Registrar Histórico de chamada
{POST} /api/v1/historyCall/

 ```bash
Headers{
    Content-Type : application/x-www-form-urlencoded
    Authorization : {TOKEN_USER_LOGGED}
  }
 ```
 
   ```bash
 Body{
    id_user:{
        type: mongoose.Schema.ObjectId,
        required: true
    },
    id_prestador:{
        type: mongoose.Schema.ObjectId,
        required: true
    },
    id_userLogged:{
        type: mongoose.Schema.ObjectId,
        required: true
    }
 }
 ```
 
- Atualizar Histórico de chamada
{PUT} /api/v1/historyCall/{ID_HISTORYCALL}

 ```bash
Headers{
    Content-Type : application/x-www-form-urlencoded
    Authorization : {TOKEN_USER_LOGGED}
  }
 ```
 
   ```bash
 Body{
    id_user:{
        type: mongoose.Schema.ObjectId
    },
    id_prestador:{
        type: mongoose.Schema.ObjectId
    },
    id_userLogged:{
        type: mongoose.Schema.ObjectId
    }
 }
 ```
 
 - Atualizar Histórico de chamada
{DELETE} /api/v1/historyCall/{ID_USER}/{ID_PRESTADOR}/{ID_USERLOGGED}

 ```bash
Headers{
    Content-Type : application/x-www-form-urlencoded
    Authorization : {TOKEN_USER_LOGGED}
  }
 ```