const db = require("./db.js");

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


const dizimo = db.sequelize.define('dizimo',{
    idDizimista:{
        type: db.Sequelize.INTEGER,
        allowNull: true,
    },
    qtdRecebida:{
        type: db.Sequelize.STRING,
    },
    dataRecebimento:{
        type: db.Sequelize.DATE
    }
},{freezeTableName: true});


const doador = db.sequelize.define('doador',{
    idContato:{
        type: db.Sequelize.INTEGER,
        allowNull: true,
    },

    idEndereco:{
        type: db.Sequelize.INTEGER,
        allowNull: true,
    },

    nome: {
        type: db.Sequelize.STRING
    }

},{freezeTableName: true})

const doacao = db.sequelize.define('doacao',{
    idDoador:{
        type: db.Sequelize.INTEGER,
        allowNull: true
    },
    descricao: {
        type: db.Sequelize.STRING,
    },
    destino: {
        type: db.Sequelize.STRING,
    },
    dataReceb: {
        type: db.Sequelize.DATE
    },
    tipoDoacao: {
        type: db.Sequelize.STRING,
    }

}, {freezeTableName: true})


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

},{freezeTableName: true});

const login = db.sequelize.define('login',{
    login: {
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.STRING
    }
},{freezeTableName: true})




dizimista.belongsTo(endereco,{foreignKey:'idEndereco',target:'id'});
dizimista.belongsTo(contato,{foreignKey:'idContato',target:'id'});
usuario.belongsTo(login,{foreignKey:'id',target:'idLogin'});
dizimo.belongsTo(dizimista,{foreignKey:'idDizimista', target:'id'});
doacao.belongsTo(doador,{foreignKey:'idDoador', target:'id'})


module.exports= {dizimista, dizimo, 
                    endereco, contato, 
                    login, usuario, 
                    doador, doacao}


