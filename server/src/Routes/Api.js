'use strict';
const express = require('express');
const path = require('path')
const ProdutoController = require('../Controllers/ProdutoController.js');

module.exports = function (app) {
  const versionApi = express.Router();
  const apiRoutes = express.Router();
  const produtoRoutes = express.Router();
  
  app.use('/api', versionApi , function (req, res) {
    res.writeHead(200);
    res.end('API FUNCIONOU! UHUUULLL\n');
  });

  app.use('/produto', 
    produtoRoutes.get('/', ProdutoController.getAllProduto),
    produtoRoutes.get('/:id_produto', ProdutoController.getOneProduto),
    produtoRoutes.post('/', ProdutoController.registroDeProduto),
    produtoRoutes.put('/:id_produto', ProdutoController.alterarProduto),
    produtoRoutes.delete('/:id_produto', ProdutoController.deleteProduto)
  );
}