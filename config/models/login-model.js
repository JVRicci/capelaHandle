const db = require("../db.js");

const usuario = db.sequelize.define('usuario',{

    nome:{
        type: db.Sequelize.STRING
    },
    sexo:{
        type: db.Sequelize.STRING
    },
    funcao:{
        type: db.Sequelize.STRING
    },
    cpf:{
        type: db.Sequelize.STRING
    },
    ativo:{
        type: db.Sequelize.STRING
    },
    idLogin:{
        type: db.Sequelize.STRING
    }

},{freezeTableName: true})