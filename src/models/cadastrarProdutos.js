const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    nomeDoProduto: {
        type: String,
        require: true,
    },
    valor: {
        type: String,
        required: true,

    },
    categoria: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true, // serve para informar ser obrigatorio colocar este campo.
        lowercase: true,
    },
    createdAt: {  // Vai fazer a anotação do registro de quando foi criado.
        type: Date,
        default: Date.now,
    },
});

const CadastrarProdutos = mongoose.model('CadastrarProdutos', UserSchema);

module.exports = CadastrarProdutos;