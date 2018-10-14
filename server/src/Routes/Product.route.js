const ProductController = require('../Controllers/ProductController.js')
const express = require('express')
const jwt = require('../Auth/JWT.js')

module.exports = (app) => {
  require('./swaggerDefinitions.js')
  const apiRoutes = express.Router()

  app.use('/',
    /**
     * @swagger
     * /product:
     *   post:
     *     tags:
     *       - Product
     *     description: Cria um produto no banco de dados
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: Authorization
     *         description: Token UserLogged
     *         in: header
     *         required: true
     *         type: apiKey
     *       - name: produto
     *         description: Dados para criar produto
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/product'
     *     responses:
     *       200:
     *         description: OK!
     *       500:
     *         description: Internal Server Error!
    */
    apiRoutes.post('/product', jwt.authenticate, ProductController.createProduct),
    /**
     * @swagger
     * /product:
     *   get:
     *     tags:
     *       - Product
     *     description: Retorna todos os produtos do banco de dados
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
    apiRoutes.get('/product', jwt.authenticate, ProductController.getAllProduct),
    /**
     * @swagger
     * /product/{id}:
     *   get:
     *     tags:
     *       - Product
     *     description: Retorna um produto do banco de dados
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: Authorization
     *         description: Token UserLogged
     *         in: header
     *         required: true
     *         type: apiKey
     *       - name: id
     *         description: Id do produto
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
    apiRoutes.get('/product/:id', jwt.authenticate, ProductController.getOneProduct),
    /**
     * @swagger
     * /product/{id}:
     *   put:
     *     tags:
     *       - Product
     *     description: Altera um produto do banco de dados
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: Authorization
     *         description: Token UserLogged
     *         in: header
     *         required: true
     *         type: apiKey
     *       - name: id
     *         description: Id do produto
     *         in: path
     *         required: true
     *         type: string
     *       - name: produto
     *         description: Dados para criar produto
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/product'
     *     responses:
     *       200:
     *         description: OK!
     *       500:
     *         description: Internal Server Error!
    */
    apiRoutes.put('/product/:id', jwt.authenticate, ProductController.updateProduct),
    /**
     * @swagger
     * /product/{id}:
     *   delete:
     *     tags:
     *       - Product
     *     description: Deleta um produto do banco de dados
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: Authorization
     *         description: Token UserLogged
     *         in: header
     *         required: true
     *         type: apiKey
     *       - name: id
     *         description: Id do produto
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: OK!
     *       500:
     *         description: Internal Server Error!
    */
    apiRoutes.delete('/product/:id', jwt.authenticate, ProductController.deleteProduct)
  )
}