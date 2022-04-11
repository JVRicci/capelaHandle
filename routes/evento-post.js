const post = require('../config/Posts.js');
const express = require('express');
const router = express.Router();
const db = require("../config/db.js");
const { query } = require('express');

var eventosRota = router.get('/eventos', (req,res)=>{

    (async()=>{

        var pesqEvento = await post.evento.findAll({
            raw: true,
            atribute:['nome', 'dataEvento', 'responsavel']
        })
        console.log(pesqEvento)
        
    res.render('eventos/eventos', {header: true, listaEventos:pesqEvento, nomeUser:req.session.login});

    })()

})

var registrarEvento = router.post('/registrarEvento', (req,res)=>{
    (async()=>{
        var novoEvento = await post.evento.create({
            descricao: req.body.descricaoEvento,
            dataEvento: req.body.dataEvento,
            responsavel: req.body.responsavelEvento,
            nome: req.body.nomeEvento
        });
        res.redirect('/eventos')
    })()
})

module.exports = {eventosRota, registrarEvento}