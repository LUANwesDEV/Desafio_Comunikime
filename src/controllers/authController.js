const express = require('express');

const CadastrarProdutos = require('../models/CadastrarProdutos');

const router = express.Router();//serve para definir rotas para os produtos

router.post('/registrar', async (req, res) => {
    const { nomeDoProduto } = req.body;
    try {
        if (await CadastrarProdutos.findOne({ nomeDoProduto }))
            return res.status(400).send({ erro: 'Produto ja existente!' })
        
            const cadastrarProdutos = await CadastrarProdutos.create(req.body); // onde vai receber todos os parametros 
        return res.send({ cadastrarProdutos }); 
    } 
    catch (err) {
        return res.status(400).send({ erro: 'Falha ao registrar produtos' });
    }
});

router.get('/mostrar', async (req, res)=>{
    const produto = await CadastrarProdutos.find();
    try{
        return res.json(produto);
    }catch(err){
        return res.status(400).send({ erro: 'Falha ao mostrar produtos' });
    }
});

router.put('/atualizar/:id', async (req, res)=>{
    try{
        const produto = await CadastrarProdutos.updateOne({_id: req.params.id },req.body);

        return res.json({message: 'Produto atualizado com sucesso!'});
    }catch{
        return res.status(400).send({ erro: 'Erro ao atualizar produto' });
    }
});

router.delete('/apagar/:id', async (req, res)=>{
    try{
        const produto = await CadastrarProdutos.deleteOne({ _id: req.params.id});

        return res.json({message: 'Produto apagado com sucesso'});
    }catch (err){
        return res.status(400).send({erro: 'Erro ao apagar produto'});
    }
});

module.exports = app => app.use('/auth', router); // aqui vai repassar as rotas nos paramentros que foi definido.
