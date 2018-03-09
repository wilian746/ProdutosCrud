'use strict';

const Produto = require('../Models/ProdutoModel');
const mongoose = require('mongoose');

exports.registroDeProduto = function (req, res, next) {
    Produto.create({
        nome: req.body.nome,
        quantidade: req.body.quantidade,
        valor: req.body.valor,
        marca: req.body.marca
    }, function (err, produtos) {
        if (err)
            return res.status(500).send({message: 'Erro ao criar Produto', error: err});

        return res.status(201).send({
            message: 'Produto criado com sucesso',
            Produto: produtos
        });
    });
};

exports.getAllProduto = function (req, res, next) {

    var query = Produto.find()
        
    query.exec(function (err, produtos) {
        if (err)
            return res.status(500).send({error: err});

        return res.status(200).json(produtos);
    });
};

exports.getOneProduto = function (req, res, next) {

    var query = Produto.find()
        
    query.exec(function (err, produtos) {
        if (err)
            return res.status(500).send({error: err});

        return res.status(200).json(produtos);
    });
};

exports.getOneProduto = function (req, res, next) {
    var obj = {};
    obj['_id'] = mongoose.Types.ObjectId(req.params.id_produto);
    var query = Produto.aggregate([
        {$match: obj}
    ])
    
    query.exec(function (err, produto) {
        if (err)
            return res.status(500).send({message: 'Erro ao buscar Produtos', error: err});

        return res.status(200).json(produto);
    });
};

exports.deleteProduto = function (req, res, next) {
    const id_produto = req.params.id_produto;

    Produto.findById(id_produto, function (err) {
        if (err)
            res.status(422).send({message: 'Produto não encontrado', error: err});

        Produto.remove({_id: id_produto}, function (err) {
            if (err)
                return res.status(500).send({message: 'Erro ao excluir Produto', error: err});
            
            return res.status(200).send({message: 'Produto excluído com sucesso'});
        });
    });
}

exports.alterarProduto = function (req,res,next) {
    var id_produto = req.params.id_produto;
    var nome = req.body.nome;
    var quantidade = req.body.quantidade;
    var valor = req.body.valor;
    var marca = req.body.marca;

    Produto.findById({ _id:id_produto }, function (err,produto) {
        if (err) 
            return handleError(err);
        
        produto.set({
            nome: nome,
            quantidade: quantidade,
            valor: valor,
            marca: marca
        });
        produto.save(function (err, produtoAlterado) {
            if (err) 
                return handleError(err);
            
            return res.status(201).send({
                message: 'Produto alterado com sucesso',
                Produto: produtoAlterado
            });
        });
    });
}