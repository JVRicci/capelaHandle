const db = require("./db.js");

const endereco = db.sequelize.define('endereco',{
    logradouro:{
        type: db.Sequelize.STRING
    },
    numero: {
        type: db.Sequelize.STRING
    },
    bairro:{
        type: db.Sequelize.STRING
    },
    cep: {
        type: db.Sequelize.STRING
    },
    uf:{
        type: db.Sequelize.STRING
    },
    cidade:{
        type: db.Sequelize.STRING
    }
});


const contato = db.sequelize.define('contato',{
    telefone:{
        type:db.Sequelize.STRING
    },
    celular:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    }
}, { freezeTableName: true });




const dizimista = db.sequelize.define ('dizimista', {
    idContato: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    idEndereco:{
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    nome: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    },
    nascimento: {
        type: db.Sequelize.DATE
    },
    casamento: {
        type: db.Sequelize.STRING
    },
    estadoCivil: {
        type: db.Sequelize.STRING
    },
    conjuge: {
        type: db.Sequelize.STRING
    },
    nascConjuge:{
        type: db.Sequelize.DATE
    },
    ativo:{
        type: db.Sequelize.STRING
    }
},{ freezeTableName: true });


const dizimos = db.sequelize.define('dizimos',{
    idDizimista:{
        type: db.Sequelize.INTEGER,
        allowNull: true,
    },
    qtdRecebida:{
        type: db.Sequelize.REAL
    },
    dataRecebimento:{
        type: db.Sequelize.DATE
    }
});


dizimista.belongsTo(endereco,{foreignKey:'id',target:'idEndereco'})
dizimista.belongsTo(contato,{foreignKey:'id',target:'idContato'})



module.exports= {dizimista, dizimos, endereco, contato}


