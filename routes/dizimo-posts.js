const post = require('../config/Posts.js');
const express = require('express');
const router = express.Router();
const db = require("../config/db.js");

var pesquisa = router.get('/dizimo',(req, res)=>{

    if(req.session.login){
        (async()=>{
            var query = await post.dizimista.findAll({
                raw: true,
                attributes:['id', 'nome', 'endereco.logradouro', 'endereco.bairro', 'contato.celular'],
                include:[{ 
                    model: post.endereco, attributes:['logradouro', 'bairro']
                },{
                    model: post.contato, attributes:['celular']
                }],order:[['id', 'ASC']]
            });
            res.render('dizimo/dizimo',{header: true, dizimista:query, nomeUser:req.session.login})
        })();
        
    }else{
        res.redirect('/');
    }
})


var cadastrarDizimista = router.post('/dizimo',(req, res)=>{

        (async()=>{
        var enderecoIns = await post.endereco.create({
            logradouro: String(req.body.enderecoTxt),
            numero: String(req.body.numeroTxt),
            bairro: String(req.body.bairroTxt),
            cep: String(req.body.cepTxt),
            uf: String(req.body.ufTxt),
            cidade: String(req.body.cidadeTxt)
            
        });
        var contatoIns= await post.contato.create({
            telefone: String(req.body.telefoneTxt),
            celular: String(req.body.celularTxt),
            email: String(req.body.emailTxt)
        });

        var dizimistaIns= await post.dizimista.create({

            idContato: await post.contato.max('id'),
            idEndereco: await post.endereco.max('id'),

            nome:String(req.body.nomeTxt),
            cpf: String(req.body.cpfTxt),
            nascimento: req.body.nascimentoDate,

            casamento: String(req.body.tipoCasamento),
            estadoCivil: String(req.body.estadoCivil),
            conjuge: String(req.body.conjugeTxt),
            nascConjuge: req.body.conjugeDate,
            ativo: 's'
        });

        res.redirect('/dizimo');
        
    })()
})


var cadastrarDizimo=router.post('/dizimo', (req,res)=>{
    (async ()=>{
        var dizimo =await post.dizimos.create({
            idDizimista: dizimista,
            qtdRecebida: req.body.valorTxt,
            dataRecebimento: req.body.data,
        })
    })
})




module.exports = {pesquisa, cadastrarDizimista}