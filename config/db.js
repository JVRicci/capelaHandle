const Sequelize = require('Sequelize');

const sequelize = new Sequelize ('bancoCapela', 'JVvsRicci', 'ozy123',{
    host:'DESKTOP-B1DL0LN',
    dialect: 'mssql',
    define: {
        timestamps: false,
        
    },
},
);

module.exports= {
    Sequelize:Sequelize,
    sequelize: sequelize
};

sequelize.authenticate().then(
    console.log("Banco conectado")
).catch((erro)=>console.log(erro))

