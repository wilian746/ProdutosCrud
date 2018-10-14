const LoginController = require('../Controllers/LoginController.js')
const express = require('express')
const jwt = require('../Auth/JWT.js')

module.exports = (app) => {
  require('./swaggerDefinitions.js')
  const apiRoutes = express.Router()

  app.use('/',
    /**
     * @swagger
     * /login:
     *   post:
     *     tags:
     *       - Login
     *     description: Realiza Login no sistema
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: login
     *         description: Dados para realizar login
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/user'
     *     responses:
     *       200:
     *         description: OK!
     *       500:
     *         description: Internal Server Error!
    */
    apiRoutes.post('/login', jwt.login,  LoginController.login),
    /**
     * @swagger
     * /testAuth:
     *   get:
     *     tags:
     *       - Auth
     *     description: Autenticação de rotas
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: Authorization
     *         description: Token UserLogged
     *         in: header
     *         required: true
     *         type: apiKey
     *     responses:
     *       200:
     *         description: OK!
     *       500:
     *         description: Internal Server Error!
     *
    */
    apiRoutes.get('/testAuth', jwt.authenticate, LoginController.testAuth),
  )
}