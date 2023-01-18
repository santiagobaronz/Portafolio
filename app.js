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
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.json());

/***************************************************************
 *                     Router y EJS 
***************************************************************/

    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views')
    app.use(express.static(__dirname + '/public'))

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

module.exports = connection

/***************************************************************
 *                          Routes 
***************************************************************/

app.use('/', require('./router/webRoutes'));
app.use('/api', require('./router/apiRoutes'));

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