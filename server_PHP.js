// var express = require('express');
// var app = express();

// var mysql = require('mysql');
// var bodyParser = require('body-parser');

// app.use(bodyParser.json({type:'application/json'}));
// app.use(bodyParser.urlencoded({extended:true}));

// var con = mysql.createConnection({
//     host: 'localhost',
//     port: '8889',
//     user: 'root',
//     password: '',
//     database: 'grm_system'
// });

// var server = app.listen(4547, function(){
//     var host = server.address().address
//     var port = server.address().port
//     console.log("start");
// });

// con.connect(function(error){
//     if(error) console.log(error);
//     else console.log("connected");
// })

// app.get('/users', function(req, res){
//     con.query('select * from users', function(error, rows, fields) {
//         if(error) console.log(error);

//         else{
//             console.log(rows);
//             res.send(rows);
//         }
//     });
// })

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'grm_system'
});

var server = app.listen(4547, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("start");
});

connection.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
})

app.get('/users', function(req, res){
    connection.query('select * from users', function(error, rows, fields) {
        if(error) console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }
    });
})

