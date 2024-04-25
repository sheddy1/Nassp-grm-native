var express = require('express');
var app = express();
const mongoose = require("mongoose");

const mongoUrl = "mongodb+srv://sheddy:sheddy12345@cluster0.nulxirh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl).then(()=>{
    console.log("database connected");
}).catch((e) => {
    console.log(e);
});

app.get("/", (req,res)=>{
    res.send({status:"started"})
})

app.listen(5001,()=>{
    console.log("Node don start sha")
});