//const mongoose = require('mongoose')

//var produto = mongoose.model('produto');

const produto = require('../models/produtoModel')

//get all
exports.lista_todos_os_produtos = function(req, res) {
    produto.find({}, (err, produtos)=> {
        if(err) {
            res.send(err)
        }
        res.json(produtos)
    })
}

// get id 

exports.lista_um_produto = (req, res)=> {
    produto.findOne({"_id": req.params.produtoId}, function(err, produto) {
        if(err) {
            res.send(err)
        }
        res.json(produto)
    })
}

// post 

exports.adiciona_um_produto = (req,res)=>{
    const novoProduto = new produto(req.body)
    novoProduto.save((err,produto)=>{
        if(err){
            res.send(err)
        }
        res.json(produto)
    })
}

//put

exports.atualiza_um_produto = (req,res)=>{
    produto.findOneAndUpdate({_id: req.params.produtoId}, req.body, {new: true,},
        (err,produto)=>{
            if(err){
                res.send(err);
            }
            res.json(produto)
        }    
    )
}

//delete 

exports.remove_um_produto = (req,res)=>{
    produto.deleteOne({_id: req.params.produtoId},(err)=>{
        if(err){
            res.send(err)
        }
        res.json({"Mensagem:": "Produto deletadox"})
    })
}