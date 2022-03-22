const express = require('express')
const path = require ('path')
const { engine } = require ('express-handlebars');
const sql = require('mssql/msnodesqlv8');
const db = require('./config/db.js');
const bodyParser = require('body-parser');
const sequelize = require('./config/db.js');
const post = require('./config/Posts.js');


const app = express();
const port = '3000';

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine('handlebars', engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname +'/public'))
app.use('/css', express.static(__dirname + '/public\style'))
app.use('/img', express.static(__dirname + '/public\img'))
app.use('/js', express.static(__dirname + '/public\js'))
app.use('/views', express.static(__dirname + '/public/views'));


app.get('/login',(req,res)=>{
    //carrega variaveis introduzidas pelo user nos campos
    let nomeLog = req.body.login;
    let senhaLog = req.body.senha;
    
    async function funcLogin(login, senha){

        try {
            let con = await sql.connect(db);
            
            let comando = await con.request().query("SELECT u.id, u.nome, u.funcao, l.login,  l.senha from login as l " +
            "join usuario as u on u.idlogin = l.id where l.login = '"+String(login) +"' and l.senha = '"+String(senha)+"';")
        
            let result = comando.recordset[0];
            
            if(result != null){
                
                req.session.login = login;
                res.render('main');
            }
            else{
                res.render('login/login');
            }
            
        }
        catch(e){ 
            console.log(e);
            sql.close;
        }
    }

    funcLogin(nomeLog, senhaLog)

});





app.get('/inicio', (req, res)=>{
    res.render('inicio');
});

app.get('/dizimo',(req,res)=>{

    (async ()=>{
        var query = await post.dizimista.findAll({
            raw: true,
            attributes:['id', 'nome', 'endereco.logradouro', 'endereco.bairro', 'contato.celular'],
            include:[{ 
                model: post.endereco, attributes:['logradouro', 'bairro']
            },{
                model: post.contato, attributes:['celular']
            }],
            
        });

        console.log( query)
        res.render('dizimo/dizimo', {dizimista: query})
    
    })();
});



app.get('/', (req,res)=>{
    res.render('login');
});

app.listen(port, (req,res)=>{
    console.log('Server aberto na porta:'+port+'\n http://localhost:3000');
});