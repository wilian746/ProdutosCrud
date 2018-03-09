// express é quem faz as ligações para realizar requisição http
const express = require('express');
//Retorna o middleware de compressão usando o dado OPTION. 
// O middleware tentará comprimir os corpos de resposta para todas as solicitações que atravessam 
// o middleware, com base no dado OPTION
const compression = require('compression');
// bodyParser é quem responsável por pegar o body da requisição
const bodyParser = require('body-parser');
// morgan é muito interessante para leitura de tokens
const logger = require('morgan');
// errorhandler como o proprio nome diz, apresentar erros
const errorHandler = require('errorhandler');
// dorenv é uma biblioteca para leitura de variaveis de ambiente
const dotenv = require('dotenv');
// mongoose é a extensão do mongodb para nodejs ser usada nas webapi
const mongoose = require('mongoose');
// cors é para habilitar a segurança das requisições http
const cors = require('cors');
// path é quem consegue andar pelo diretorio ou adquirir o diretorio raiz
const path = require('path');
/**
 * Carrega variaveis do arquivo .env, onde contém chaves da API
 */
dotenv.load({
    path: '.env'
});

/**
 * Cria o server express.
 */
const app = express();
const server = require("http").Server(app);

/**
 * porta, cors, logger, compression configuração da api.
 */
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(cors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin']
}));

/* Dizer que irá usar a biblioteca do errorHandler no projeto*/
app.use(errorHandler());

/**
 * Inicia body nas requisições http para ser usado
 * */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/**
 * Conexão com MongoDB.
 */
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', function () {
    console.error('Falha ao conectar com o Banco de Dados');
    process.exit(1);
});


/**
 * Carregar App Modules e Rotas
 */
const router = require('./src/Routes/Api')(app);

/**
 * INICIA O SERVIDOR.
 */
server.listen(app.get('port'), function () {
    console.log('Servidor rodando na porta ' + app.get('port') + ' em modo ' + app.get('env'));
});

// Exporta para ser usado em qualquer lugar do projeto
module.exports = app;