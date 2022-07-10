const post = require('../config/Posts.js');
const express = require('express');
const router = express.Router();
const db = require("../config/db.js");
const { query } = require('express');

var contas = router.get('/contas',(req,res)=>{

    
    (async()=>{

        var pesqContas = await post.contas.findAll({ 
            raw: true, 
            attributes: ['id', 'descricao', 'valor', 'categoria',
                        'fornecedor','vencimento','pagamento']
        })

        res.render('contas/contas', {header: true, listaContas: pesqContas, nomeUser:req.session.login})
    })()
    
})

var cadContas = router.post('/cadContas', (req, res)=>{
    (async()=>{
        var cadastrar = await post.contas.create({
            descricao: req.body.descricaoTxt,
            valor: req.body.valorTxt,
            categoria: req.body.categoriaCombo,
            fornecedor: "João Ricci",// req.body.fornecedorTxt,
            vencimento: req.body.vencimentoDate,
            pagamento: req.body.pagamentoDate
        })

        res.redirect('/contas')
    })()
})

module.exports = {contas, cadContas}