


var express = require('express');
var app = express();
var mongo = require('mongodb').MongoClient;
const mongoose = require("mongoose");
app.use(express.json());


const mongoUrl = "mongodb+srv://sheddy:sheddy12345@cluster0.nulxirh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl).then(()=>{
    console.log("database connected");
}).catch((e) => {
    console.log(e);
});

//requiring user UserDetailSchema
require('./UserDetails'); 

const User =mongoose.model("UserInfo");

app.get("/", (req,res)=>{
    res.send({status:"started"})
})

app.get('/data', (req, res)=>{
  mongoose.connect(mongoUrl, (err, db)=>{
      var collection = db.collection('users');
      collection.find({}).toArray((x, hasil)=>{
          res.send(hasil);
      })
  })
})



//registration api
// app.post('/register', async(req, res) => {
  // const {email, password, phone} = req.body;

  // const oldUSer = await User.findOne({email:email});

  // if(oldUser){
  //   return res.send({data: "User already exists"});
  // }

  // try {
  //   await User.create({
  //     email:email,
  //     password,
  //     phone
  //   });
  //   res.send({status:"ok", data:"User has been created yu dey whine"});
  // } catch (error) {
  //   res.send({status: "error", data: error});
  // }
// })

//registration api
const db = "test";
app.post('/register', (req, res) => {
  console.log(req.body);
  db.collection('userinfos').insertOne(req.body, (err, data) => {
      if(err) return console.log(err);
      res.send(('saved to db: ' + data));
  })
});

app.listen(5001,()=>{
    console.log("Node don start sha")
});