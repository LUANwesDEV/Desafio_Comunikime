const mongoose = require('../database');
//const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    nomeDoProduto: {
        type: String,
        require: true,
    },
    
    valor:{
        type: String,
        required: true,
        
    },
    categoria:{
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true, // serve para informar ser obrigatorio colocar o email.
        lowercase: true,
    },
    createdAt: {  // Vai fazer a anotação do registro de quando foi criado.
        type: Date, 
        default: Date.now,
    },
}); // o schema é os "campos" dentro do banco de dados

// UserSchema.pre('save', async function(next){
//     const hash = await bcrypt.hash(this.password, 10); // Para criptografia da senha!!
//     this.password = hash;

//     next();
// });

const CadastrarProdutos = mongoose.model('CadastrarProdutos', UserSchema);

module.exports = CadastrarProdutos; 