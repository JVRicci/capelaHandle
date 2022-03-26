const post = require('../config/Posts.js');
const express = require('express');
const router = express.Router();
const db = require("../config/db.js");

var pesquisa = router.get('/dizimo',(req, res)=>{

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
        res.render('dizimo/dizimo',{header: true, dizimista:query})
    })();
})



var cadastrarDizimista = router.post('/dizimo',(req, res)=>{

    (async()=>{
        var enderecoIns = await post.endereco.create({
            logradouro: req.body.enderecoTxt,
            numero: req.body.numeroTxt,
            bairro: req.body.bairroTxt,
            cep: req.body.cepTxt,
            uf: req.body.ufTxt,
            cidade: req.body.cidadeTxt
            
        });
        var contatoIns= await post.contato.create({
            telefone: req.body.telefoneTxt,
            celular: req.body.celularTxt,
            email: req.body.emailTxt
        });

        var dizimistaIns= await post.dizimista.create({

            idContato: await post.contato.max('id'),
            idEndereco: await post.endereco.max('id'),

            nome:req.body.nomeTxt,
            cpf: req.body.cpfTxt,
            nascimento: req.body.nascimentoDate,

            casamento: String(req.body.tipoCasamento),
            estadoCivil: String(req.body.estadoCivil),
            conjuge: req.body.conjugeTxt,
            nascConjuge: req.body.conjugeDate,
            ativo: 's'
        });
        
        (async()=>{
            var query = await post.dizimista.findAll({
                raw: true,
                attributes:['id', 'nome', 'endereco.logradouro', 'endereco.bairro', 'contato.celular'],
                include:[{ 
                    model: post.endereco, attributes:['logradouro', 'bairro']
                },{
                    model: post.contato, attributes:['celular']
                }],
            });
            res.render('dizimo/dizimo',{header: true, dizimista:query})
        })();

        
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