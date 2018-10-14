const express = require('express')

module.exports = (app) => {
  require('./swaggerDefinitions.js')
  const apiRoutes = express.Router()

  app.use(
    apiRoutes.get('/', (req, res) => {
      res.send('\n' +
                '<h1 style="text-align: center;">API REST | TOPICOS ESPECIAIS III</h1>' +
                '<h1 style="text-align: center;"><a href="/api-docs" style="color:green;">Clique aqui para ser redirecionado ao SWAGGER</a></h1>' +
              '\n')
    })
  )

  app.use('/helloworld',
    /**
     * @swagger
     * /helloworld:
     *   get:
     *     tags:
     *       - Helloworld
     *     description: Hello World
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: OK!
     *
    */
    apiRoutes.get('/helloworld', (req, res) => {
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end('\nHello there, world!\n')
    })
  )

  require('./User.route.js')(app)

  require('./Product.route.js')(app)

  require('./Login.route.js')(app)
}