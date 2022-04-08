const post = require('../config/Posts.js');
const express = require('express');
const router = express.Router();
const db = require("../config/db.js");
const { query } = require('express');


var eventosRota = router.get('/eventos', (req,res)=>{
    res.render('eventos/eventos', {header: true, nomeUser:req.session.login});
})

module.exports = {eventosRota}