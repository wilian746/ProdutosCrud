const UserController = require('../Controllers/UserController.js')
const express = require('express')

module.exports = (app) => {
  require('./swaggerDefinitions.js')
  const apiRoutes = express.Router()

  app.use('/',
    /**
     * @swagger
     * /user:
     *   post:
     *     tags:
     *       - User
     *     description: Cria um usuário no banco de dados
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: usuário
     *         description: Dados para criar usuário
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
    apiRoutes.post('/user', UserController.createUser),
    /**
     * @swagger
     * /user:
     *   get:
     *     tags:
     *       - User
     *     description: Retorna todos os usuários do banco de dados
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: OK!
     *       500:
     *         description: Internal Server Error!
     *
    */
    apiRoutes.get('/user', UserController.getAllUser),
    /**
     * @swagger
     * /user/{id}:
     *   get:
     *     tags:
     *       - User
     *     description: Retorna um usuário do banco de dados
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Id do usuário
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: OK!
     *       500:
     *         description: Internal Server Error!
     *
    */
    apiRoutes.get('/user/:id', UserController.getOneUser),
    /**
     * @swagger
     * /user/{id}:
     *   put:
     *     tags:
     *       - User
     *     description: Altera um usuário do banco de dados
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Id do usuário
     *         in: path
     *         required: true
     *         type: string
     *       - name: usuário
     *         description: Dados para criar usuário
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
    apiRoutes.put('/user/:id', UserController.updateUser),
    /**
     * @swagger
     * /user/{id}:
     *   delete:
     *     tags:
     *       - User
     *     description: Deleta um usuário do banco de dados
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Id do usuário
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: OK!
     *       500:
     *         description: Internal Server Error!
    */
    apiRoutes.delete('/user/:id', UserController.deleteUser)
  )
}