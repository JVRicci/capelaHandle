const post = require('../config/Posts.js');
const express = require('express');
const router = express.Router();

var login

var login = router.post('/',(req,res)=>{
    //carrega variaveis introduzidas pelo user nos campos
    let nomeLog = req.body.login;
    let senhaLog = req.body.senha;   

    (async ()=>{
        var query = await post.usuario.findOne({
            raw: 1,
            attributes: ['id', 'nome', 'funcao', 'login.login','login.senha'],
            include:{
                model: post.login, attributes: ['login', 'senha'],
                where:{
                    login: nomeLog, senha: senhaLog
                }
            },
        })
        if(query != null){
            
            req.session.login = query['nome'];
            res.render('inicio', {nomeUser: req.session.login, header:true})
            
        }
        else{
            
            req.session.login = null;
            res.render('login')
        }
    })();

});

module.exports={login}