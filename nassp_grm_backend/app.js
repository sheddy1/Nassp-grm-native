const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'grm_system'
});

connection.getConnection(function (err, connection) {
    console.log("Database connected")
})

// app.get("/",(req,res)=>{
//     res.send({status: "started"});
// });

app.get('/users', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM users', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

app.post('/register',async(req,res)=>{
    const {email, password, phone}=req.body;

    con.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO customers (email, password, phone) VALUES ('Company Inc', 'Highway 37', 0706557506)";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
});



app.listen(3000, () => {
    console.log('Go to http://localhost:3000/users so you can see the data.');
   });

// app.listen(3000, () => {
//     console.log('Go to http://localhost:3000/users so you can see the data.');
//    });
