const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const logger = require('morgan')
const errorHandler = require('errorhandler')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

dotenv.load({
    path: '.env'
})

const app = express()
const server = require("http").Server(app)

app.set('port', process.env.PORT || 3000)
app.use(compression())
app.use(logger('dev'))
app.use(cors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin']
}))

app.use(errorHandler())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect(process.env.MONGODB_URI).then(
    () => {
        console.log('Database connected successfully! ')
    },
    err => {
        console.error('Error connected DataBase: ', err)
        process.exit(1)
    }
)

require('./src/Routes/index.js')(app)

server.listen(app.get('port'), function () {
    console.log('\n-> Server running on port ' + app.get('port') + ' in ' + app.get('env') + ' mode ' + '\n')
})

/* ---------------------------------------------------------------------------------- */

/* Configurações para documentação usando swagger */

/* Importando biblioteca e onde estão a base do swagger */
let swaggerJSDoc = require('swagger-jsdoc')

// Definições do SWAGGER

let swaggerDefinition = {
  info: {
    title: 'API_TOPICOS_ESPECIAIS_III',
    version: '1.0.0'
  },
  host: 'localhost:8080',
  basePath: '/'
}

// Opção do swagger
let options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // Diretorio onde contem as rotas do swagger
  apis: ['./src/Routes/*.js']
}

// initialize swagger-jsdoc
let swaggerSpec = swaggerJSDoc(options)

// Configurações da view do Swagger
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'swagger')))

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

module.exports = app