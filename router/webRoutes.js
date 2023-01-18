const express = require('express');
const { default: fetch } = require('node-fetch');
const connection = require('../app');
const router = express.Router();

const URL = "http://localhost:2020"



router.get('/', async (req, res) => {

    let jobsArray = [];
    let studiesArray = [];
    let articlesArray = [];
    let projectsArray = [];


    await fetch(URL + '/api/jobs')
    .then(data => data.json())
    .then(data => jobsArray = data)

    await fetch(URL + '/api/studies')
    .then(data => data.json())
    .then(data => studiesArray = data)

    await fetch(URL + '/api/articles')
    .then(data => data.json())
    .then(data => articlesArray = data)

    await fetch(URL +  '/api/projects')
    .then(data => data.json())
    .then(data => projectsArray = data)

    res.render('home', {
        page: 'home',
        jobs: jobsArray,
        studies: studiesArray,
        articles: articlesArray,
        projects: projectsArray
    })

})

router.get('/about', (req, res) => {
    res.render('about', {page: 'about'})
})

router.get('/articles', async (req, res) => {

    let articlesArray = [];
    await fetch(URL + '/api/articles')
    .then(data => data.json())
    .then(data => articlesArray = data)

    res.render('articles', {page: 'articles', articles: articlesArray})
})

router.get('/projects', async (req, res) => {

    let projectsArray = [];
    await fetch(URL + '/api/projects')
    .then(data => data.json())
    .then(data => projectsArray = data)

    let reposData = []
    await fetch('https://api.github.com/users/santiagobaronz/repos')
    .then(data => data.json())
    .then(data => reposData = data);

    res.render('projects', {page: 'projects', projects: projectsArray, repos: reposData})
})

router.get('/articles/:articleName', (req, res) => {
    
    let {articleName} = req.params

    const sql = 'SELECT * FROM articulos';
    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){ 
            let counter= 0;
            let checkStatus = false;
            results.forEach( article => {
                let articleTitle = article.titulo_articulo.toLowerCase().replace(/ /g, "-");
                if(articleName == articleTitle){
                    console.log(article)
                    res.render('articlePage', {
                        page: 'articlePage',
                        title: article.titulo_articulo,
                        text: article.texto_articulo,
                        date: article.fecha_texto

                    })
                    checkStatus = true;
                }else{
                    counter++
                }
            });
            if(counter > 0 && checkStatus == false){
                res.render('404', {page: 'unitario'})
            }
        }
    });
})

module.exports = router