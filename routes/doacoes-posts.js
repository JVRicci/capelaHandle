const post = require('../config/Posts.js');
const express = require('express');
const router = express.Router();
const db = require ("../config/db.js");

var doacoes = router.get('/doacoes', (req, res)=>{

    (async()=>{
        var doadorQuery = await post.doador.findAll({
            row: true,
            attributes: [ 'id', 'nome'],

        })
        console.log(doadorQuery)
        res.render("doacoes/doacoes", {header: true, doadores: doadorQuery, nomeUser:req.session.login});
    })()

});

module.exports={doacoes}