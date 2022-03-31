const post = require('../config/Posts.js');
const express = require('express');
const router = express.Router();
const db = require ("../config/db.js");

var doacoes = router.get('/doacoes', (req, res)=>{
    res.render("doacoes/doacoes", {header: true, nomeUser:req.session.login});
});

module.exports={doacoes}