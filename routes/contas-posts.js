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

module.exports = {contas}