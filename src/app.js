/***************************************************************
 *                     Dependencies 
***************************************************************/

    
    

    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const { default: fetch } = require('node-fetch');
    const mysql = require('mysql2');

    
    require('dotenv').config()

    const app = express();
    var publicPath = path.resolve(__dirname, './../public');
    app.use(express.static(publicPath));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static('./'));
    app.use(express.json());

/***************************************************************
 *                     Database connection 
***************************************************************/

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "santiagobaron"
})

connection.connect(error => {
    if(error) throw error;
    console.log('Base de datos conectada')
})

/***************************************************************
 *                          Routes 
***************************************************************/


app.get('/', (req, res) => {
    var options = { root: './public/', headers: { 'page': "home"}}
    res.setHeader('Content-type', 'text/html');
    res.sendFile('index.html', options)
})

app.get('/home', (req, res) => {
    
    var options = { root: './public/', headers: { 'page': "home"}}
    res.setHeader('Content-type', 'text/html');
    res.sendFile('index.html', options)
})

app.get('/about', (req, res) => {
    
    var options = { root: './public/', headers: { 'page': "about"}}
    res.setHeader('Content-type', 'text/html');
    res.sendFile('index.html', options)
})

app.get('/articles', (req, res) => {
    
    var options = { root: './public/', headers: { 'page': "articles"}}
    res.setHeader('Content-type', 'text/html');
    res.sendFile('index.html', options)
})

app.get('/projects', (req, res) => {
    
    var options = { root: './public/', headers: { 'page': "projects"}}
    res.setHeader('Content-type', 'text/html');
    res.sendFile('index.html', options)
})

app.get('/404', (req, res) => {
    var options = { root: './public'}
    res.setHeader('Content-type', 'text/html');
    res.sendFile('404.html', options)
})

app.get('/articles/:articleName', (req, res) => {
    
    let {articleName} = req.params

    const sql = 'SELECT * FROM articulos';
    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){ 
            let counter= 0;
            let checkStatus;
            results.forEach((article, index) => {
                let articleTitle = article.titulo_articulo.toLowerCase().replace(/ /g, "-");
                if(articleName == articleTitle){
                    var options = {
                        root: './public/',
                        headers: {
                            'page': 'articleUnitary',
                            'idArticle': article.id
                        }
                    }
                    checkStatus = true;
                    res.sendFile('index.html', options)
                }else{
                    counter++
                }
            });
            
            if(counter > 0 && checkStatus == false){
                var options = {root: './public/',headers: {'page': '404',
                        'content': 'Este artículo no existe o tiene un enlace URL diferente'}}
                res.sendFile('index.html', options)
            }
        }
    });
})

app.get('/articles/library/:articleId', (req, res) => {
    
    let {articleId} = (req.params);
    articleId = mysql.escape(parseInt(articleId));

    if (isNaN(articleId)) {
        res.json({
            code: 404,
            reason: "No es una dirección válida"
        });
        return;
    }

    const sql = 'SELECT * FROM articulos WHERE id = ?';
    connection.query(sql, [articleId] , (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        }else{
            res.json('no_results')
        }
    });
})

app.get('/api/jobs' , (req, res) => {
    const sql = 'SELECT * FROM trabajos';
    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        }else{
            res.json('no_results')
        }
    });
})

app.get('/api/studies' , (req, res) => {
    const sql = 'SELECT * FROM educacion ORDER BY id DESC';
    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        }else{
            res.json('no_results')
        }
    });
})

app.get('/api/articles' , (req, res) => {
    const sql = 'SELECT * FROM articulos ORDER BY id DESC';
    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        }else{
            res.json('no_results')
        }
    });
})

app.get('/api/projects' , (req, res) => {
    const sql = 'SELECT * FROM proyectos ORDER BY id DESC';
    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        }else{
            res.json('no_results')
        }
    });
})

/***************************************************************
 *                     Github Login 
***************************************************************/

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

app.get('/admin/login', (req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.sendFile('login.html', { root: './public/admin' })
})

app.get('/admin/dashboard', (req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.sendFile('dashboard.html', { root: './public/admin' })
})

app.get('/security', (req, res) => {

    const clientId = parseInt(req.query.clientID);

    (parseInt(process.env.STAFF_ID) == clientId) ? res.send(true) :res.send(false)
})



app.get('/api/getAccessToken', async (req, res) =>{

    const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + req.query.code;
    await fetch('https://github.com/login/oauth/access_token' + params, {
        method: "POST",
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(response => res.json(response))

})

app.get('/api/getUserData', async (req, res) => {
    req.get("Authorization");
    await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
            "Authorization": req.get("Authorization")
        }
    })
    .then(response => response.json())
    .then(response => {
        (parseInt(process.env.STAFF_ID) == response.id) ? res.json(response) : res.json({msg: "No autorizado"})
    })
})


/***************************************************************
 *                          Server
***************************************************************/

const port = process.env.port || 2020;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));