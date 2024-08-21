// // const express= require('express');
// // const app=express();
// // const mongoose=require("mongoose");
// // const mongoUrl="mongodb+srv://sgodwin:NassPrim$376@nassp-grm.zcubwbe.mongodb.net/?retryWrites=true&w=majority&appName=nassp-grm"
// // app.use(express.json());

// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'viaduct.proxy.rlwy.net',
  user     : 'root',
  password : 'LehLmCWAtICelpaHFbFeGJqcPERIigAE',
  database : 'railway'
});

// connection.connect(mysql).then(()=>{
//     console.log("Database connected")
// })

// // require('./Users')

// // const User=mongoose.model("UserInfo")

// // app.get("/",(req,res)=>{
// //     res.send({status: "started"});
// // });

// // app.post('/register',async(req,res)=>{
// //     const {email, password, phone}=req.body;

// //     const oldUser = await User.findOne({email:email})

// //     if(oldUser){
// //         return res.send({data: "User already exists"})
// //     }

// //     try {
// //         await User.create({
// //             email: email,
// //             password: password,
// //             phone: phone
// //         })
// //         res.send({status:"ok", data: "User Created"})
// //     } catch (error) {
// //         res.send({status:"Error", data: error})
// //     }
// // })

// // app.listen(5001,()=>{
// //     console.log('Node js server has started');
// // });

// var express = require('express');
// var app = express();
// const mongoose = require("mongoose");

// const mongoUrl = "mongodb+srv://sheddy:sheddy12345@cluster0.nulxirh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(mongoUrl).then(()=>{
//     console.log("database connected");
// }).catch((e) => {
//     console.log(e);
// });

// app.get("/", (req,res)=>{
//     res.send({status:"started"})
// })

// app.listen(5001,()=>{
//     console.log("Node don start sha")
// });