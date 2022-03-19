const sql = require('mssql/msnodesqlv8');
const sqlConfig = { 

    server: "DESKTOP-B1DL0LN",port:1433,
    user: "JVvsRicci",
    password: "ozy123",
    database: "bancoCapela",
    options:{
        trustedConnection: true,
    },
}
sql.on ('error', err=>(
    console.log(err.message)
))


module.exports = sqlConfig;

