const express = require('express');
const { default: fetch } = require('node-fetch');
const connection = require('../app');
const router = express.Router();

router.get('/jobs' , (req, res) => {
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

router.get('/studies' , (req, res) => {
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

router.get('/articles' , (req, res) => {
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


router.post('/create/article' , (req, res) => {

    const {title, abstract, content, date} = req.body;

    console.log(title)

    const articleTitle = mysql.escape(title);
    const articleAbstract = mysql.escape(abstract);
    const articleContent = mysql.escape(content)
    const articleDate = mysql.escape(date)

    const sql = 'INSERT INTO articulos (titulo_articulo, resumen_articulo, texto_articulo, fecha_texto, fecha_date) VALUES (?, ?, ?, ?, ?)';

    const params = [title, abstract, content, date, "prueba"];
    const formattedSql = mysql.format(sql, params);
    connection.query(formattedSql, (error, results) => {
        
    });

    

})

router.get('/projects' , (req, res) => {
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

module.exports = router