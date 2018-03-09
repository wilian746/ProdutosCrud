var mongoose = require('mongoose');

var ProdutoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Informe seu nome do produto']
    },
    quantidade: {
        type: Number,
        required: [true, 'Informe a quantidade de produtos']
    },
    valor: {
        type: Number,
        required: [true, 'Informe o valor do produto']
    },
    marca: {
        type: String,
        required: [true, 'Informe a marca do produto']
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Produto', ProdutoSchema);