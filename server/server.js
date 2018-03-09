/**
 * Module dependencies.
 */
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
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
 * Express, cors, logger, compression configuração.
 */
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(cors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin']
}));
app.use(errorHandler());

/**
 * Inicia body e cookie dentro de req
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
 * Começa Express server.
 */
server.listen(app.get('port'), function () {
    console.log('Servidor rodando na porta ' + app.get('port') + ' em modo ' + app.get('env'));
});

module.exports = app;