const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { default: fetch } = require('node-fetch');
const mysql = require('mysql');
require('dotenv').config({path:'./.env'})

const app = express();

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
var publicPath = path.resolve(__dirname, './../public');
console.log(publicPath)
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.sendFile('index.html', { root: './../public/' })
})

/***************************************************************
 *                          Server
***************************************************************/

const port = process.env.port || 2020;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));