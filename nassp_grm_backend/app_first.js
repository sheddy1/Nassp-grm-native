// const express= require('express');
// const app=express();
// const mongoose=require("mongoose");
// const mongoUrl="mongodb+srv://sgodwin:NassPrim$376@nassp-grm.zcubwbe.mongodb.net/?retryWrites=true&w=majority&appName=nassp-grm"
// app.use(express.json());

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'grm_system'
});

// connection.connect(mysql).then(()=>{
//     console.log("Database connected")
// })

// require('./Users')

// const User=mongoose.model("UserInfo")

// app.get("/",(req,res)=>{
//     res.send({status: "started"});
// });

// app.post('/register',async(req,res)=>{
//     const {email, password, phone}=req.body;

//     const oldUser = await User.findOne({email:email})

//     if(oldUser){
//         return res.send({data: "User already exists"})
//     }

//     try {
//         await User.create({
//             email: email,
//             password: password,
//             phone: phone
//         })
//         res.send({status:"ok", data: "User Created"})
//     } catch (error) {
//         res.send({status:"Error", data: error})
//     }
// })

// app.listen(5001,()=>{
//     console.log('Node js server has started');
// });