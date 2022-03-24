const server = require('../server.js')
const post = require('../config/Posts.js');
const db = require("../config/db.js");
/*
async function selectDizimista2(){
    var query = await post.dizimista.findAll({
        raw: true,
        attributes:['id', 'nome', 'endereco.logradouro', 'endereco.bairro', 'contato.celular'],
        include:[{ 
            model: post.endereco, attributes:['logradouro', 'bairro']
        },{
            model: post.contato, attributes:['celular']
        }],
    });
    return query
}*/

function selectDizimista(){
    return new Promise((resolve, reject)=>{
        var query = post.dizimista.findAll({
            raw: true,
            attributes:['id', 'nome', 'endereco.logradouro', 'endereco.bairro', 'contato.celular'],
            include:[{ 
                model: post.endereco, attributes:['logradouro', 'bairro']
            },{
                model: post.contato, attributes:['celular']
            }],
        });
        return resolve (query)
        
    })
}


console.log(selectDizimista)

module.exports = {post, server, db, selectDizimista}

