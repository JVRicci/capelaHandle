//imports de modulos
const express = require('express')
const { engine } = require ('express-handlebars');
const bodyParser = require('body-parser');
const session = require("express-session");


//importações de rotas
const rotasDizimo = require('./routes/dizimo-posts');
const rotasLogin = require('./routes/login-rota');

const app = express();
const port = '3000';

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({secret:'sessao do meotwo'}))

app.engine('handlebars', engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');


app.use(express.static(__dirname +'/public'))
app.use('/css', express.static(__dirname + '/public\style'))
app.use('/img', express.static(__dirname + '/public\img'))
app.use('/js', express.static(__dirname + '/public\js'))
app.use('/views', express.static(__dirname + '/views'));



app.post('/',rotasLogin.login);

app.get('/inicio', (req, res)=>{
    
    if(req.session.login)
    res.render('inicio', {header:true, nomeUser:req.session.login});
    else res.redirect('/');
});


app.get('/dizimo', rotasDizimo.pesquisa);

app.post('/dizimo',rotasDizimo.cadastrarDizimista);

// rotas ----------------------------------------



app.get('/', (req,res)=>{
    req.session.login=null;
    res.render('login');
});

app.get('/cadastrar-dizimista', (req, res)=>{
    if(req.session.login)
    res.render('dizimo/cadastrar-dizimista', {header:true, nomeUser:req.session.login});
    else res.redirect('/');
})

app.listen(port, (req,res)=>{
    console.log('Server aberto na porta:'+port+'\n http://localhost:3000');
});