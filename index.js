require('dotenv').config()



var express = require('express')
var cors = require('cors')

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });



var app = express()

app.use(cors())

app.get('/helloworld', function (req, res, next) {
  res.json({msg: 'helloworld'})
})

app.get('/users', function (req, res, next) {
    
    connection.query(
        'SELECT * FROM `users`',
        function(err, results, fields) {
            res.json(results)
        }
    );



})

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})
