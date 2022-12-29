const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { default: fetch } = require('node-fetch');
const mysql = require('mysql');
require('dotenv').config({path:'./.env'})

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
    res.setHeader('Content-type', 'text/html');
    res.sendFile('index.html', { root: './../public/' })
})

app.get('/:page', (req, res) => {
    
    var options = { root: './public/', headers: { 'page': req.params.page}}
    res.setHeader('Content-type', 'text/html');
    res.sendFile('index.html', options)
})

app.get('/articles/:articleName', (req, res) => {
    
    let {articleName} = req.params

    const sql = 'SELECT * FROM articulos';
    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){ 
            results.forEach(article => {
                let articleTitle = article.titulo_articulo.toLowerCase().replace(/ /g, "-")
                if(articleName == articleTitle){
                    res.json(article);
                }
            });
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

/***************************************************************
 *                          Server
***************************************************************/

const port = process.env.port || 2020;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));