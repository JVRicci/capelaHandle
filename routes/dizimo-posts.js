const post = require('../config/Posts.js');
const express = require('express');
const router = express.Router();
const db = require("../config/db.js");
const { query } = require('express');

// consultar Dizimistas
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
                }]
            });
            res.render('dizimo/dizimo',{header: true, dizimista:query, nomeUser:req.session.login})
        })();


        
    }else{
        res.redirect('/');
    }

})


// Cadastrar Dizimista
var cadastrarDizimista = router.post('/dizimo',(req, res)=>{

    try{
        var casamentoTxt = String(req.body.tipoCasamento);
        var conjugeTxt = String(req.body.conjugeTxt)
        var nascConjTxt = req.body.conjugeDate;

        if (String(req.body.tipoCasamento) == "" || String(req.body.conjugeTxt)=="" || 
        req.body.conjugeDate==""){
            var casamentoTxt = "nulo"
            var conjugeTxt = "nulo"
            var nascConjTxt = "'1000-01-01 00:00:00.000 +00:00'";
        }

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

            casamento: casamentoTxt,
            estadoCivil: String(req.body.estadoCivil),
            conjuge: conjugeTxt,
            nascConjuge: nascConjTxt,
            ativo: 's'
        });

        res.redirect('/dizimo');
        
    })()
    }
    catch(err){
        console.log(err)
    }
})




// Cadastrar Dizimo

var dizimistaPage = router.get("/dizimista:nome", (req,res)=>{
    var nome = req.params.nome;
    var idDiz
    (async(nome)=>{

        var query = await post.dizimista.findOne({
            raw:true,
            attributes:['id', 'nome', 'cpf', 'nascimento', 'casamento', 'estadoCivil', 'conjuge', 'nascConjuge', 'ativo',
                        'endereco.logradouro', 'endereco.numero', 'endereco.bairro', 'endereco.cidade', 
                        'contato.telefone', 'contato.celular'],
            include:[{
                model: post.endereco, attribute:['logradouro', 'numero', 'bairro', 'cidade']
            },{
                model: post.contato, attribute:['telefone', 'celular']
            }],
            where:{nome: req.params.nome}
        });

        idDiz = await query.id

        var dizimos = await post.dizimo.findAll({
            raw:true,
            atribute:['qtdRecebida', 'dataRecebimento'],
            where:{idDizimista: idDiz}
            
        })
        res.render("dizimo/dizimista", {header: true, query, dizimosTab:dizimos , nomeUser:req.session.login})    
    })()

})

var dizimistaPost = router.post("/dizimista:nome", (req, res)=>{
    var fullUrl = req.protocol + '://' + req.get('host', req.session.login) + req.originalUrl;
    (async()=>{
        var insert = await post.dizimo.create({
            idDizimista: req.body.idTxt,
            qtdRecebida: req.body.valorTxt,
            dataRecebimento: req.body.data
        })

    res.redirect(fullUrl)
    })()
})



module.exports = {pesquisa, cadastrarDizimista, dizimistaPage, dizimistaPost}