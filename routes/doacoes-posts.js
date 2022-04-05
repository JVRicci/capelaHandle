const post = require('../config/Posts.js');
const express = require('express');
const router = express.Router();
const db = require("../config/db.js");
const { query } = require('express');

var doacoes = router.get('/doacoes', (req, res)=>{

    (async()=>{
        var doadorQuery = await post.doador.findAll({
            raw: true,
            attributes: [ 'id', 'nome'],

        })
        var doacaoQuery = await post.doacao.findAll({
            raw: true,
            attributes: ['idDoador', 'descricao', 'destino', 'dataReceb', 'tipoDoacao'],
            where: idDoador = req.body.id
        })
        res.render("doacoes/doacoes", {header: true, doadores: doadorQuery, doacoes:doacaoQuery, nomeUser:req.session.login});
    })()

});


var doadorCad = router.post('/doador', (req, res)=>{

    try{
    (async()=>{
        var doadorCad = await post.doador.create({
            idContato:1,
            idEndereco: 1,
            nome: req.body.doadorTxt
        })
        res.redirect('/doacoes');
        
    })()
    } catch(err){
        console.log(err)
    }
})

var doacaoCad = router.post('/doacao', (req, res)=>{
    try{
    (async()=>{
        var doacaoCad = await post.doacao.create({
            idDoador: req.body.doadorIdTxt,
            descricao: String(req.body.descricaoTxt),
            destino: String(req.body.destinoTxt),
            dataReceb: req.body.recebimentoDate,
            tipoDoacao: req.body.tipoSel
        })
        res.redirect('/doacoes')
    })()
        
    } catch(err){
        console.log(err)
    }
})

module.exports={doacoes, doadorCad}