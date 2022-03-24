const express = require('express')
const path = require ('path')
const { engine } = require ('express-handlebars');
const db = require('./config/db.js');
const bodyParser = require('body-parser');
const sequelize = require('./config/db.js');
const post = require('./config/Posts.js');
const models = require('./models/dizimo-posts.js');

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


app.post('/',(req,res)=>{
    //carrega variaveis introduzidas pelo user nos campos
    let nomeLog = req.body.login;
    let senhaLog = req.body.senha;   

    (async ()=>{
        var query = await post.usuario.findOne({
            raw: 1,
            attributes: ['id', 'nome', 'funcao', 'login.login','login.senha'],
            include:{
                model: post.login, attributes: ['login', 'senha'],
                where:{
                    login: nomeLog, senha: senhaLog
                }
            },
        })
        if(query != null){
            //res.session.login = login;
            res.render('inicio', {nomeUser: query['nome'], header:true})
        }
        else{
            res.render('login')
        }
    })();

});


app.get('/dizimo',(req,res)=>{
    
    /*var select = models.selectDizimista().then(
        (result)=>{
            console.log(result)
            return result})
    
    res.render('dizimo/dizimo',  {dizimista: select, header:true})*/
    async function selectDizimista(){
        var query = await post.dizimista.findAll({
            raw: true,
            attributes:['id', 'nome', 'endereco.logradouro', 'endereco.bairro', 'contato.celular'],
            include:[{ 
                model: post.endereco, attributes:['logradouro', 'bairro']
            },{
                model: post.contato, attributes:['celular']
            }],
        });
        res.render('dizimo/dizimo',  {dizimista: query, header:true})
    }
    selectDizimista()
});


app.post('/dizimo',(req, res)=>{
    res.render('dizimo/dizimo', {header: true})
});

// rotas ----------------------------------------




app.get('/inicio', (req, res)=>{
    res.render('inicio', {header:true});
});



app.get('/', (req,res)=>{
    res.render('login');
});

app.get('/cadastrar-dizimista', (req, res)=>{
    res.render('dizimo/cadastrar-dizimista', {header:true});
})

app.listen(port, (req,res)=>{
    console.log('Server aberto na porta:'+port+'\n http://localhost:3000');
});