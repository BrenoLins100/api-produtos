const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produtoSchema = new Schema({
    nome: {
        type: String
    },
    preco: {
        type: String
    },
    criadoEm:{
        type: Date, default: Date.now
    },
    atualizadoEm:{
        type: Date, default: Date.now
    },
    __v:{
        type: Number, 
        select: false
    },
    emEstoque:{
        type: Boolean
    },
})

module.exports = mongoose.model('produto', produtoSchema);