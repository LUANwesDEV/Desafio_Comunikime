const express = require('express');
//const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');

//const authConfig = require('../config/auth');

const CadastrarProdutos = require('../models/CadastrarProdutos');

const router = express.Router();//serve para definir rotas para os produtos


router.post('/register', async (req, res) => {
    //const { nomeDoProduto } = req.body;

    try {
        /*if (await cadastrarProdutos.findOne({ nomeDoProduto }))
            return res.status(400).send({ erro: 'Produto ja existente!' })*/

        const cadastrarProdutos = await CadastrarProdutos.create(req.body); // onde vai receber todos os parametros 
        return res.send({ cadastrarProdutos }); 

    } 
    catch (err) {
        return res.status(400).send({ erro: 'Falha ao registrar produtos' });
    }
});


module.exports = app => app.use('/auth', router); // aqui vai repassar as rotas nos paramentros que foi definido.